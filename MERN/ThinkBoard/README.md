# 🧠 ThinkBoard

ThinkBoard is a modern, responsive, and secure note-taking web application built on the **MERN (MongoDB, Express, React, Node.js)** stack. Featuring a sleek, premium dark-themed interface enhanced with **Tailwind CSS** and **DaisyUI**, it supports full CRUD capabilities, smooth micro-animations, and bulletproof rate limiting powered by **Upstash Redis**.

---

## ✨ Features

- **🚀 Complete CRUD Operations**: Create, read, update, and delete notes instantly with dynamic state updates.
- **🛡️ Intelligent Rate Limiting**: Integrated **Upstash Redis** rate limiter protecting the server with a sliding window policy (10 requests per 20 seconds).
- **🩹 Resilient Fallbacks**: If Upstash Redis is unreachable, the rate limiter fails gracefully so the application remains fully functional.
- **🎨 Premium Dark Theme UI**: A beautiful user interface using CSS radial-gradients, glassmorphism, responsive grid layouts, and custom-styled notes cards.
- **🔔 Interactive Toast Notifications**: Fluid alert toasts using `react-hot-toast` for success and error actions.
- **⚡ Fast HMR & Navigation**: Powered by **Vite** and **React Router v7** for instantaneous routing and smooth page transitions.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19 (Functional Components & Hooks)
- **Routing**: React Router v7 / React Router DOM
- **Styling**: Tailwind CSS v3 & DaisyUI v4
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

### Backend
- **Server Framework**: Express (Node.js)
- **Database**: MongoDB (via Mongoose ODM)
- **In-Memory Cache & Limiting**: Upstash Redis & Upstash Rate Limiter
- **Environment Management**: Dotenv
- **Cross-Origin Resource Sharing**: CORS

---

## 📂 Project Structure

```
Mernthinkboard/
├── backend/
│   ├── src/
│   │   ├── config/          # Database & Upstash Redis configs
│   │   ├── controllers/     # Controller logic for Notes API
│   │   ├── middleware/      # Express middlewares (e.g. rate limiters)
│   │   ├── models/          # Mongoose schema models
│   │   ├── routes/          # Express route definitions
│   │   └── server.js        # Backend entry point
│   ├── .env                 # Environment variables config (local only)
│   └── package.json         # Backend dependencies & scripts
│
└── frontend/
    ├── src/
    │   ├── assets/          # Static assets & styles
    │   ├── Components/      # Reusable UI components (Navbar, NoteCard, etc.)
    │   ├── lib/             # Axios instance & utility helpers
    │   ├── Pages/           # Application views (HomePage, NoteDetail, createPage)
    │   ├── App.jsx          # React main routes and background grid layout
    │   └── main.jsx         # React application mounting point
    ├── tailwind.config.js   # Tailwind design configuration
    └── package.json         # Frontend dependencies & scripts
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **MongoDB** (local installation or MongoDB Atlas cluster URI)
- **Upstash Account** (for Upstash Redis REST credentials)

---

### 1. Setup Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `backend/` directory:
   ```env
   PORT=5000
   Mongo_uri=your_mongodb_connection_uri
   UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
   ```
4. Start the development server (runs nodemon):
   ```bash
   npm run dev
   ```

---

### 2. Setup Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## 🔌 API Documentation

All API requests are routed through `/api/notes`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/notes` | Fetches all notes, sorted by newest first |
| **GET** | `/api/notes/:id` | Fetches details of a single note by its ID |
| **POST** | `/api/notes` | Creates a new note |
| **PUT** | `/api/notes/:id` | Updates title or content of an existing note |
| **DELETE** | `/api/notes/:id` | Deletes a note by its ID |

---

## 🔒 Security & Optimization

ThinkBoard implements a custom Express rate limiter using `@upstash/ratelimit` (sliding window of **10 requests per 20 seconds**). 

- **Hardened Security**: Prevents spamming notes creation and edits.
- **Robust Failure Resilience**: If the Redis REST connection fails or rate limit quotas are exceeded on your cloud instance, the server logs `Rate Limit Error (Redis unreachable)` but continues serving the requests without interruption.
- **Frontend Interactivity**: Displays a custom visual overlay (`RateLimitedUI`) informing the user when they have hit the rate limit threshold.
