# InterviewAI

An AI-powered mock interview platform designed to help job seekers prepare for technical, behavioral, and domain-specific interviews with interactive simulations and real-time feedback.

🌐 **Live Demo:** [https://interviewai-dlxt.onrender.com](https://interviewai-dlxt.onrender.com)

---

## 🚀 Features

- **Tailored Interview Preparation:** Select target roles, skill sets, and difficulty levels to generate relevant interview prompts.
- **Dynamic AI Questions:** Adapts questions dynamically based on previous responses, resumes, or job descriptions.
- **Instant AI Feedback:** Get actionable evaluations on technical accuracy, communication clarity, problem-solving, and tone.
- **Voice & Text Modes:** Practice via interactive chat or voice-to-text input for realistic interview practice.
- **Performance Dashboard:** Track interview progress, view past session transcripts, and identify key areas for growth.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Next.js / React, TypeScript, Tailwind CSS |
| **Backend** | Node.js / Next.js API Routes / Express |
| **AI Integration** | OpenAI API / Google Gemini API / LangChain |
| **Database** | PostgreSQL / Supabase / MongoDB |
| **Authentication** | NextAuth.js / Clerk / Firebase Auth |

---

## 📂 Project Structure

```text
InterviewAI/
├── public/              # Static assets and media
├── src/
│   ├── app/             # Application routes and pages
│   ├── components/      # Reusable UI components
│   ├── lib/             # API clients, database configuration, and helpers
│   └── styles/          # Global styles and Tailwind configs
├── .env.example         # Template for required environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18.0.0 or higher)
- **npm**, **yarn**, or **pnpm**
- An API Key for **OpenAI** or **Google Gemini**

### Installation

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/Sayan200427/InterviewAI.git](https://github.com/Sayan200427/InterviewAI.git)
   cd InterviewAI
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your API keys and configuration settings to `.env.local`:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   DATABASE_URL=your_database_connection_string
   OPENAI_API_KEY=your_openai_api_key
   GEMINI_API_KEY=your_gemini_api_key
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔑 Environment Variables Reference

| Variable | Description | Required |
| :--- | :--- | :---: |
| `OPENAI_API_KEY` | API key for generating AI interview prompts and feedback | Yes |
| `GEMINI_API_KEY` | Alternative AI service key for model processing | Optional |
| `DATABASE_URL` | Connection string for storing user sessions & transcripts | Yes |
| `NEXTAUTH_SECRET` | Secret key used for session encryption | Yes |

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the Repository
2. Create a Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add new feature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---


---

## 🧑‍💻 Author

- **Sayan** - [@Sayan200427](https://github.com/Sayan200427)
