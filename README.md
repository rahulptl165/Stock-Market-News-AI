# 📈 Stock Market News AI

An AI-powered full-stack web application that curates Indian stock market news, allows users to link their stock portfolio, and uses OpenAI to analyze how each news item might impact their holdings.

Live Demo 👉 [Click here](https://your-frontend.vercel.app)

---

## 🚀 Features

- 📰 **Live News Feed**  
  Scrapes latest stock market headlines from Indian sources like Moneycontrol, Economic Times, etc.

- 🧾 **Portfolio Management**  
  Users can input and store stock symbols in their portfolio locally (supports comma-separated input and removal of individual items).

- 🧠 **AI-Based Sentiment Analysis**  
  News headlines related to user’s portfolio are analyzed using OpenAI GPT-4o for impact:
  - Impact: Positive / Neutral / Negative
  - Reason: Short explanation

- 💾 **Local Persistence**  
  User portfolio and preferences are stored using `localStorage`.

---


## 🛠️ Tech Stack

### 🧑‍💻 Frontend:
- React (Vite)
- Tailwind CSS
- Axios
- Browser Notification API
- Deployed on **Vercel**

### 🧠 Backend:
- Express.js
- Cheerio (for web scraping)
- OpenAI API (GPT-4o)
- CORS, dotenv, nodemon
- Deployed on **Vercel**

  ## ⚙️ Setup Instructions
  ### Backend
```bash
cd backend
npm install
# Set your OpenAI API key in .env
npm run dev
```
### 🖥️ Frontend
replace vercel backend url with http://localhost:5000/ in frontend.
```bash
git clone https://github.com/your-username/stock-news-ai.git
cd frontend
npm install
npm run dev
```
