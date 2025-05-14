# Chat Application Frontend

## Overview
A real-time chat application frontend built with React.js and Socket.IO, designed to work with a backend server for seamless messaging.

## Table of content

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [API Integration](#api-integration)

---

## Project Structure

```plain
chat_application_frontend/
├── public/               # Static assets
├── src/
│   ├── app/       
│   ├── assets/          
│   ├── environments/     
│   ├── index.html        # HTML file
│   ├── styles.scss       # Global Style
│   └── main.ts           # Entry point
├── .gitignore
├── package.json
└── README.md
```
---

## Technologies Used

- ***React.js:*** JavaScript library for building user interfaces.
- ***Socket.IO Client:*** Enables real-time communication between frontend and backend.
- ***Bootstrap:*** Provides foundational styling capabilities.
- ***Material-UI:*** For modern, responsive UI components and styling.
- ***Redux:*** Handles application state management effectively.
- ***React Router DOM:*** Facilitates client-side routing and navigation.
- ***Axios:*** For making API calls and handling HTTP requests.

---

## Installation

**Prerequisite**
- Nodejs
- backend 

***Steps***
1. Clone the repository
```bash
git clone https://github.com/tharunika-tharu/chat_application_frontend.git
cd chat_application_frontend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
VITE_API_URL=http://localhost:5000  
VITE_SOCKET_URL=http://localhost:5000  
```

4. Run the development server
```bash
npm run dev
```

---

## Features

- Real-time messaging 
- User authentication 
- Responsive UI 
- Group chats & private messaging
- Message history 
- Typing indicators 
- Online/offline status
- Emoji support

---

## API Integration

<h2>REST API Endpoints</h2>
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/auth/login</td>
            <td>User login</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/auth/signup</td>
            <td>User registration</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/chat</td>
            <td>Fetch past messages</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/chat</td>
            <td>Send new message</td>
        </tr>
    </tbody>
</table>

<h2>Socket.IO Events</h2>
<table>
    <thead>
        <tr>
            <th>Event</th>
            <th>Direction</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>connect</td>
            <td>Client → Server</td>
            <td>Establish connection</td>
        </tr>
        <tr>
            <td>send_message</td>
            <td>Client → Server</td>
            <td>Send a new message</td>
        </tr>
        <tr>
            <td>receive_message</td>
            <td>Server → Client</td>
            <td>Broadcast received message</td>
        </tr>
        <tr>
            <td>user_online</td>
            <td>Server → Client</td>
            <td>Update online users list</td>
        </tr>
        <tr>
            <td>typing</td>
            <td>Bidirectional</td>
            <td>Show typing indicator</td>
        </tr>
    </tbody>
</table>
