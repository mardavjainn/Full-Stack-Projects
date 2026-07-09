# ThinkBoard

A MERN stack note-taking application designed for organizing and managing thoughts. It features a responsive UI, complete CRUD capabilities, and robust API rate limiting under Redis caching.


Try the Application here :https://thinkk-board.vercel.app/


---
## Highlights
1. Modern responsive dark UI
2. Full CRUD capability with database persistence
3. Server-side rate limiting protection

---
## Features
### Core Application
1. Create, view, update, and delete notes dynamically
2. Interactive toast alerts for success and error feedbacks

### Security and Infrastructure
1. Custom Express API rate limiter using Upstash Redis
2. Fail-safe middleware ensuring service continues if Redis drops offline
3. CORS configuration for deployment hosting

---
## Technology Stack
- Frontend: React, React Router, Tailwind CSS, DaisyUI, Axios, Vite
- Backend: Node.js, Express, MongoDB (Mongoose), Upstash Redis

---
## Getting Started

### Local Backend Setup
1. Navigate to directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create `backend/.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

### Local Frontend Setup
1. Navigate to directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Create `frontend/.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
3. Start the Vite server:
   ```bash
   npm run dev
   ```

---
## API Endpoints
All requests route through `/api/notes`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/notes` | Fetch all notes (sorted by newest) |
| GET | `/api/notes/:id` | Fetch a single note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note by ID |
