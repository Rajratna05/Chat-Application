const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Serve static files
app.use(express.static('public'));

// Store active users
const users = new Map();
const messages = [];

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Handle user join
  socket.on('user-join', (username) => {
    users.set(socket.id, {
      id: socket.id,
      username: username,
      joinedAt: new Date()
    });

    // Send existing messages to the new user
    socket.emit('load-messages', messages);

    // Notify all users about new user
    io.emit('user-connected', {
      username: username,
      userCount: users.size
    });

    // Send updated user list
    io.emit('users-list', Array.from(users.values()));

    console.log(`${username} joined the chat`);
  });

  // Handle new message
  socket.on('send-message', (data) => {
    const user = users.get(socket.id);
    if (user) {
      const message = {
        id: Date.now(),
        username: user.username,
        text: data.text,
        timestamp: new Date().toISOString()
      };

      messages.push(message);
      
      // Keep only last 100 messages
      if (messages.length > 100) {
        messages.shift();
      }

      // Broadcast message to all users
      io.emit('new-message', message);
    }
  });

  // Handle typing indicator
  socket.on('typing', () => {
    const user = users.get(socket.id);
    if (user) {
      socket.broadcast.emit('user-typing', user.username);
    }
  });

  socket.on('stop-typing', () => {
    socket.broadcast.emit('user-stop-typing');
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      users.delete(socket.id);
      
      io.emit('user-disconnected', {
        username: user.username,
        userCount: users.size
      });

      io.emit('users-list', Array.from(users.values()));
      
      console.log(`${user.username} left the chat`);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});