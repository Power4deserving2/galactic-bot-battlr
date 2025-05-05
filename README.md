# Galactic Bot Battlr 🤖🚀

Welcome to **Galactic Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army!

This React app allows users to browse through a galactic list of bots, view their details, and enlist them into their personal army. Built as part of a Phase 4 code challenge to practice state, props, events, data fetching, and component-based design in React.

---

## 🔧 Technologies Used

- React
- JSON Server (for backend API)
- JavaScript (ES6+)
- HTML5 & CSS3

---

## 🚀 Features

✅ View a collection of all available bots  
✅ Enlist a bot into your army (only once per bot)  
✅ Remove a bot from your army  
✅ Discharge (permanently delete) a bot from the database  
✅ Clean UI and modular components  
✅ Data persistence via JSON Server

---

## 📁 Project Structure

src/
├── components/
│   ├── BotCollection.js
│   ├── YourBotArmy.js
│   └── BotCard.js
├── App.js
├── index.js
└── App.css

---

## 📦 Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/galactic-bot-battlr.git
   cd galactic-bot-battlr

	2.	Install dependencies

npm install


	3.	Set up the backend
	•	Create a db.json file in the root directory
	•	Paste the provided bots data into it
	4.	Start the JSON Server

json-server --watch db.json --port 8001


	5.	Start the React App

npm start


	6.	Visit: http://localhost:3000

⸻

🧪 API Endpoints

GET all bots

GET http://localhost:8001/bots

DELETE a bot

DELETE http://localhost:8001/bots/:id



⸻

📌 Requirements Met
	•	Fetch data from a local JSON server
	•	Render all bots in a collection
	•	Enlist and remove bots from the army
	•	Discharge bots permanently
	•	Use of props, state, events, and data fetching

⸻

📚 Advanced Features (Optional)
	•	Show bot details in a BotSpecs view
	•	Filter bots by class
	•	Sort bots by health, damage, or armor
	•	Only one bot per class in the army

⸻

✍️ Author

Made with ⚔️ by Master Simba
