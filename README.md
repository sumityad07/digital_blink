
 # Digital Blink

A modern full-stack signup application inspired by Google's design — with a personal twist. It collects detailed user information and stores it securely using MongoDB.

## 🚀 Features

- Clean and modern UI (like Google's signup page)
- Form with validation for:
  - Name, Email, Phone
  - Residence Type
  - Monthly Income
  - Previous Loan
  - Marital Status
  - Number of Dependencies
  - City, State
- Data stored in MongoDB via a Node.js/Express backend
- Tailwind CSS for styling
- Fully responsive

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## 📦 Installation & Setup Guide

### 1. Clone the Repository

bash
git clone https://github.com/sumityad07/digital_blink.git
cd digital_blink

2. Backend Setup
Go to the backend folder:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend folder with these contents:

ini
Copy
Edit
PORT=1303
MONGO_URL=mongodb://localhost:27017/digital_blink
Replace MONGO_URL with your MongoDB connection string if using a cloud database like MongoDB Atlas.

Start the backend server:

3. Frontend Setup
Open a new terminal window/tab and go to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend development server:

bash
Copy
Edit
npm run dev
By default, the frontend will run on http://localhost:5174.


