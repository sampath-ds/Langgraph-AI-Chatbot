🧠 LangGraph AI Chatbot
A fully customizable, modern AI chatbot interface built with Next.js, FastAPI, and LangGraph — inspired by Perplexity.ai. It offers real-time streaming, integrated web search, and contextual memory for natural, dynamic interactions. This hands-on project is ideal for both learning and production deployment.

✨ Features
Real-time AI Streaming – Responses are streamed token by token for a fluid chat experience

Live Web Search – Integrates with Tavily API to fetch and summarize up-to-date online content

Conversation Memory – Retains user history for more intelligent follow-up responses

Transparent Reasoning Flow – Clearly shows the stages of thinking: Searching → Reading → Writing

Responsive UI – Mobile-first, clean interface with intuitive user experience

🛠️ Tech Stack
Frontend – Next.js + React
Built using the latest features in React and App Router

Seamless token streaming via Server-Sent Events (SSE)

Custom components for chat history, user input, and step-by-step AI reasoning

Designed with Tailwind CSS for clean, modern visuals

Backend – FastAPI + LangGraph
FastAPI provides REST APIs and real-time streaming endpoints

LangGraph handles multi-tool reasoning chains and conversation memory

Uses Groq or OpenAI (GPT-4o) for semantic language generation

Tavily API fetches real-time web content for enhanced answers

Low-latency token streaming for a snappy experience

🔍 How It Works
User submits a query via the chat interface

FastAPI receives the query and invokes LangGraph

LangGraph determines whether a web search is required

If needed, Tavily API is used to gather relevant web results

The LLM (Groq or OpenAI) synthesizes the final answer using memory and results

The response is streamed token by token to the UI

User sees visual feedback for each reasoning stage in real-time

🚀 Getting Started
Prerequisites:

Node.js v18+

Python v3.10+

API keys for OpenAI or Groq, and Tavily

Steps:

Install frontend dependencies (Next.js)

Install backend dependencies (FastAPI, LangGraph)

Add environment variables for API keys

Run backend (FastAPI) and frontend (Next.js) servers

Visit the app in your browser and start chatting

🧠 Use Case Scenarios
Ask real-time factual queries and get up-to-date web answers

Follow up on previous questions — the bot remembers context

See the "thought process" of the AI from search to response

🔗 Integrations
LangGraph – Conversation flow and memory

Tavily API – Live web search

Groq or OpenAI – Language generation engine

SSE – Real-time token streaming for chat interface

