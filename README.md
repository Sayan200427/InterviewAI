# AI Interview

AI Interview is a full-stack interview preparation app. The frontend is built with React and Vite, and the backend uses Express, MongoDB, JWT authentication, Razorpay payments, Firebase login, resume upload/parsing, and AI-generated interview questions and feedback.

## Project Structure

```text
.
+-- backend/     # Express API, MongoDB models, auth, payments, interview logic
`-- frontend/    # React + Vite client app
```

## Prerequisites

- Node.js
- npm
- MongoDB connection string
- Firebase project credentials
- OpenRouter API key
- Razorpay API keys

## Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=6000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Create a `.env` file inside `frontend/`:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## Installation

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Running Locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

The backend defaults to:

```text
http://localhost:6000
```

Note: `frontend/src/App.jsx` currently sets `ServerUrl` to `http://localhost:8000`. Update that value to match your backend port, or run the backend with `PORT=8000`.

## Available Scripts

Backend:

```bash
npm run dev
npm start
```

Frontend:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Features

- User authentication with Google/Firebase and JWT cookies
- Resume upload and parsing
- AI-generated interview questions
- Interview answer submission and feedback
- Interview reports and history
- Razorpay payment integration
