# 🎓 Kanbas – Full Stack Learning Management System

Kanbas is a full-featured Learning Management System (LMS) inspired by Canvas. It allows instructors to manage courses, assignments, and modules while enabling students to view and interact with their coursework. The platform includes secure user authentication and role-based access controls.

---

## ✨ Features

### 👩‍🏫 Instructor Features
- Create and manage courses
- Add modules and assignments
- View enrolled students
- Role-based dashboard access

### 🧑‍🎓 Student Features
- Enroll in courses
- View assignments and modules
- Submit work (future extension-ready)

### 🔐 User Authentication
- Login/Signup with role differentiation (Instructor / Student)
- Protected routes based on access level

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux, Bootstrap, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **API**: RESTful design for all major resources  

---

## 🧪 Tools & Concepts Demonstrated

- **React**: Built dynamic UI with reusable components
- **Redux**: Managed global state for seamless user experience
- **Express & MongoDB**: Designed a REST API with persistent NoSQL data storage
- **Authentication**: Implemented secure, role-based access control
- **Responsive Design**: Ensured the app works across screen sizes

---

## Project Structure

kanbas/  
├── client/              # React frontend  
│   ├── components/  
│   ├── redux/  
│   └── pages/  
├── server/              # Node.js backend  
│   ├── models/  
│   ├── routes/  
│   └── controllers/  
└── README.md

## Getting Started

1. Clone the Repository  

2. Install Dependencies  

Client:  
cd client  
npm install

Server:  
cd ../server  
npm install

3. Run the App  

Client:  
npm start

Server:  
npm run dev

Make sure MongoDB is running locally or configure your MONGO_URI in a `.env` file.
