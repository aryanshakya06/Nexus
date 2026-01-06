# 🚀 Nexus

A **professional MERN-based web application** designed to centralize, track, and enhance projects built by students of a particular college. Nexus enables **faculty mentoring**, **student collaboration**, and **AI-powered insights** so that innovation doesn’t start from scratch.

> Built as a **portfolio-grade personal project** with production-level backend practices, security, and scalability in mind.

---

## ✨ Key Highlights

* 🎓 College-focused project repository
* 👨‍🏫 Faculty can track, mentor, and review student projects
* 🧑‍🎓 Students can explore existing work, research trends, and connect with seniors
* 🤖 AI-powered auto-tagging using **Gemini API** (technology, domain, keywords)
* 🔐 Strong authentication & security architecture
* ⚙️ Designed to scale into a **SaaS platform**

---

## 🧠 Core Features

### 🔐 Authentication & Security

* Email-based **2FA (OTP)** for signup & login
* JWT-based authentication (Access + Refresh tokens)
* Sessions & refresh tokens stored in **Redis**
* CSRF protection using **X-CSRF tokens (Redis-backed)**
* MongoDB sanitization against NoSQL injection
* Rate limiting using Redis

### 📦 Project Management

* Full **CRUD operations** for projects
* Auto AI tagging (tech stack, domain, keywords)
* File uploads support
* Admin & user role separation

### 🤖 AI Integration

* Gemini API integration for:

  * Auto-detecting technologies
  * Domain classification
  * Intelligent tagging using existing project data

### 🌐 Platform Features

* RESTful APIs
* Modular backend architecture
* Clean frontend with admin & user layouts

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Context API
* CSS Modules

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Redis (Upstash)

### Tooling & Libraries

* Gemini API
* Nodemailer (Email OTP / 2FA)
* Zod (Schema validation)
* JWT Authentication
* Redis Rate Limiter
* Mongo Sanitize
* Git & GitHub

---

## 📁 Project Structure

```
Nexus/
│
├── backend/
│   ├── config/          # DB, Redis, CSRF, Tokens, Mail, AI config
│   ├── controllers/     # Admin, User, Project logic
│   ├── middlewares/     # Auth, Error handling
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded files
│   ├── index.js         # Server entry point
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── context/
│   │   ├── layout/      # Admin & User layouts
│   │   ├── pages/       # App pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

> This is a **monorepo** containing both frontend and backend.

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
REDIS_URL=your_redis_url
FRONTEND_URL=http://localhost:5173
SMTP_USER=your_email
SMTP_PASS=your_app_password
JWT_SECRET=your_jwt_secret
REFRESH_SECRET=your_refresh_secret
GEMINI_API_KEY=your_gemini_api_key
```

⚠️ **Never commit real credentials to GitHub**.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/aryanshakya06/Nexus.git
cd nexus
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`
Backend runs on `http://localhost:5000`

---

## 🎥 Demo

A working demo video is included showcasing:

* Authentication flow
* Project creation
* Admin dashboard
* AI tagging behavior

---

## 🧪 Code Quality & Practices

* Modular folder structure
* Separation of concerns (controllers, routes, services)
* Centralized error handling
* Secure session & token handling
* Production-inspired backend design

---

## 🔮 Future Enhancements

* Convert into a **multi-tenant SaaS platform**
* College-wise onboarding
* Advanced AI analytics dashboard
* Recommendation system for students
* Public project discovery mode

---

## 👤 Author

**Aryan Shakya**
3rd Year IT Student
Aspiring SDE | MERN | System Design Enthusiast

🔗 LinkedIn & GitHub available on profile

---

## 📜 License

This project is licensed under the **MIT License**.

---

⭐ If you find this project interesting, consider giving it a star - it helps a lot!