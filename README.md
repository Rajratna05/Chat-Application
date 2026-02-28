# CHAT APPLICATION

Company Name: CODTECH IT SOLUTIONS

Name: Rajratna Nitin Kamble

Intern ID: CTIS3288

Domain Name: Full Stack Web Development

Batch Duration: 8 Weeks

Mentor Name: Nila Santos


# 🚀 Real-Time Collaborative Document Editor

A powerful, modern collaborative document editor built with React, Node.js, MongoDB, and Socket.IO. Edit documents together in real-time with live cursors, instant synchronization, and rich text formatting.

![Tech Stack](https://img.shields.io/badge/React-18.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.6-black)

## ✨ Features

### 🤝 Real-Time Collaboration
- **Live Editing**: See changes as other users type in real-time
- **Multi-User Cursors**: View where collaborators are editing with colored cursors
- **Active User Tracking**: See who's online and editing the document
- **Instant Synchronization**: Changes sync across all connected clients instantly

### 📝 Rich Text Editing
- **Full-Featured Editor**: Powered by Quill.js with comprehensive formatting options
- **Headers & Styles**: H1-H6, bold, italic, underline, strikethrough
- **Lists & Indentation**: Ordered and unordered lists with multi-level indentation
- **Colors**: Text and background color customization
- **Media Support**: Insert images, videos, and links
- **Code Blocks**: Syntax-highlighted code snippets

### 💾 Document Management
- **Create & Organize**: Easily create and manage multiple documents
- **Search Functionality**: Quickly find documents by title
- **Auto-Save**: Automatic saving with visual feedback
- **Version History**: Track changes and restore previous versions
- **Delete Documents**: Remove unwanted documents

### 🎨 User Experience
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Dark Mode**: Toggle dark mode for comfortable editing
- **Mobile Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Toast Notifications**: Real-time feedback for all actions
- **Grid/List Views**: Choose your preferred document layout

## 🏗️ Architecture

```
┌─────────────────────┐
│   React Frontend    │  ← Vite, Quill.js, Socket.IO Client
│   (Port 3001)       │
└──────────┬──────────┘
           │ HTTP + WebSocket
           ↓
┌─────────────────────┐
│  Node.js Backend    │  ← Express, Socket.IO Server
│   (Port 3000)       │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│    MongoDB          │  ← Document Storage
└─────────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library with hooks
- **Quill.js** - Rich text WYSIWYG editor
- **Socket.IO Client** - Real-time communication
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client
- **Vite** - Fast build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - WebSocket server
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Quick Start

**1. Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and configure MONGODB_URI
npm run dev
```

**2. Setup Frontend** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```

**3. Access the Application**
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

See **DOCUMENTATION.md** for detailed setup instructions and architecture details.

## 📁 Project Structure

```
collaborative-editor/
├── backend/           # Node.js + Express + Socket.IO
├── frontend/          # React + Vite
├── DOCUMENTATION.md   # Detailed technical documentation
└── README.md         # This file
```

## 🎯 Quick Usage Guide

1. **Enter your name** on the landing page
2. **Create a new document** or open an existing one
3. **Start typing** - changes are auto-saved
4. **Share the URL** with collaborators
5. **See real-time edits** from multiple users simultaneously

## 📚 Documentation

For detailed information, see:
- **DOCUMENTATION.md** - Complete technical documentation including:
  - System architecture
  - API endpoints
  - Socket.IO events
  - Database schema
  - Component structure
  - Performance optimizations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Happy Collaborating! 🎉**

Built with ❤️ using React, Node.js, MongoDB, and Socket.IO
