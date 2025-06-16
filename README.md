🧠 LangGraph AI Chatbot
A Perplexity-style AI chatbot built with Next.js, FastAPI, and LangGraph, featuring real-time streaming, web search via Tavily, and semantic conversational memory. This project demonstrates how to deploy a scalable, modern AI chatbot for both learning and production use.

✨ Key Features
🔁 Real-time AI Streaming
Instant, token-by-token response rendering via Server-Sent Events (SSE)

🌐 Live Web Search
Dynamic integration with Tavily API to fetch and summarize up-to-date online content

🧠 Conversation Memory
Context retention using LangGraph to enable smarter, multi-turn interactions

🔎 Transparent Reasoning Flow
Clearly visualizes the bot’s reasoning stages: Searching → Reading → Responding

📱 Responsive Modern UI
Clean and elegant UI design, optimized for mobile, tablet, and desktop

🛠️ Tech Stack & Architecture
🖥️ Frontend — Next.js + React
Built with Next.js 14+ App Router

Supports live updates via SSE from FastAPI

Custom components for:

Chat messages

User inputs

Search transparency

Styled with Tailwind CSS for a sleek UI

⚙️ Backend — FastAPI + LangGraph
FastAPI handles:

REST endpoints

Real-time streaming

LangGraph manages:

Multi-step conversational logic

Search + reasoning tool chaining

Uses:

Groq (LLaMA) or OpenAI GPT-4o for LLM responses

Tavily Search API for fetching real-time data

Token responses streamed using SSE for ultra-low latency

🔍 How It Works – Request Lifecycle
mermaid
Copy
Edit
sequenceDiagram
    participant User
    participant Frontend (Next.js)
    participant Backend (FastAPI)
    participant LangGraph
    participant Tavily API
    participant LLM (GPT-4o/Groq)

    User->>Frontend: Submit query
    Frontend->>Backend: Send API request (SSE)
    Backend->>LangGraph: Process via agents
    LangGraph-->>LLM: Check if search is needed
    alt External Search Required
        LangGraph->>Tavily API: Perform search
        Tavily API-->>LangGraph: Return results
    end
    LangGraph-->>LLM: Provide context + search results
    LLM-->>Backend: Generate response (token by token)
    Backend-->>Frontend: Stream tokens to UI (SSE)
    Frontend->>User: Display real-time reasoning flow
🚀 Getting Started
🔑 Prerequisites
Ensure the following tools are installed:

Tool	Required Version
Node.js	v18+
Python	v3.10+
API Keys	OpenAI / Groq, Tavily

📦 Installation
bash
Copy
Edit
# 1. Clone the repository
git clone https://github.com/your-username/LangGraph-AI-Chatbot.git
cd LangGraph-AI-Chatbot

# 2. Install frontend dependencies
cd client
npm install

# 3. Install backend dependencies
cd ../server
pip install -r requirements.txt
🧪 Environment Setup
Create a .env file in both /client and /server folders with the following values:

Client .env.local

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:8000
Server .env

env
Copy
Edit
OPENAI_API_KEY=your_openai_key
GROQ_API_KEY=your_groq_key
TAVILY_API_KEY=your_tavily_key
🧪 Running Locally
In two terminals:

bash
Copy
Edit
# Terminal 1: Start Backend
cd server
uvicorn main:app --reload

# Terminal 2: Start Frontend
cd client
npm run dev
Navigate to: http://localhost:3000

📸 Screenshots
(Insert relevant UI screenshots here — chat flow, search UI, reasoning stages, etc.)

🔗 API Integration
Tavily Search API: https://www.tavily.com

Groq API: https://console.groq.com

LangGraph: Tool chaining and agent flow: https://langgraph.dev

📚 Learn More
LangGraph Docs

FastAPI Docs

Next.js Docs

🤝 Contributing
Pull requests are welcome! Please ensure your code follows the project’s code style and passes linting.

📝 License
MIT License

