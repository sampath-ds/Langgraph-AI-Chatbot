A fully customizable, modern AI chatbot interface built with Next.js, FastAPI, and LangGraph – designed to replicate the experience of Perplexity.ai with real-time AI interaction and integrated web search. This project is a hands-on implementation of a semantic search chatbot with streaming and memory features, ideal for learning or production deployment.

✨ Key Features:
🔁 Real-time AI Streaming – Delivers AI responses as they’re generated
🌐 Live Web Search – Fetches real-time information using the Tavily API
🧠 Conversation Memory – Retains past interactions for contextual replies
🔎 Transparent Search Workflow – Visualizes search, reasoning, and response stages
📱 Fully Responsive UI – Clean, elegant interface across devices and screen sizes

🛠️ Tech Stack & Architecture
This project is split into a client-server architecture to ensure scalability and modularity.

🔧 Client: Next.js + React
Built using the latest features in React and Next.js
Supports streaming updates via Server-Sent Events (SSE)
Custom components for user interaction, AI messages, and search transparency

⚙️ Server: FastAPI + LangGraph
FastAPI serves REST endpoints and real-time streams
LangGraph handles conversational logic and tool chaining
Integrated with GROQ(lamma) for language generation

Uses Tavily API to conduct real-time web search and summarize results

Real-time streaming of tokens via SSE for low-latency UX

🚀 Getting Started
🔑 Prerequisites
Make sure you have the following:

Node.js v18 or above
Python v3.10 or above
OpenAI API Key or Groq API key
Tavily API Key



🔍 How It Works – Request Lifecycle
User inputs a query via the chatbot

FastAPI backend processes it using GPT-4o

LangGraph decides whether external search is needed

If yes:

Tavily search API is triggered

Results are parsed and passed back to GPT-4o

AI forms a final response

Streaming starts – Tokens are streamed to the frontend in real-time

User sees search stages like "Searching", "Reading", and "Writing"