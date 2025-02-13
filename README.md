
# **User Management Backend System**

A simple Node.js backend application built with **Express.js**, **MongoDB**, and **JWT** for user registration, login, and searching user information.

---

## **Features**  
- 📦 **User Registration**: Register a new user with a unique username and email.  
- 🔐 **User Login**: Authenticate the user and generate a JWT token.  
- 🔎 **Search User**: Search for a user by username or email (JWT-protected route).  
- 🛡 **Input Validation**: Ensures data integrity using `joi`.  
- 🧑‍💻 **Password Security**: Passwords are hashed using `bcrypt` for added security.

---

## **Technologies Used**  
- **Node.js** — JavaScript runtime for server-side development  
- **Express.js** — Web framework for building APIs  
- **MongoDB** — NoSQL database for storing user data  
- **JWT** — Authentication using JSON Web Tokens  
- **Joi** — Schema-based input validation  
- **Bcrypt** — Password hashing for secure storage  

---

## **Installation and Setup**  

### **1. Clone the repository:**  
```bash
git clone https://github.com/your-username/your-repo-name.git
```

### **2. Install dependencies:**  
```bash
npm install
```

### **3. Configure environment variables:**  
Create a `.env` file in the root directory with the following variables:  
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### **4. Start the server:**  
```bash
npm start
```

The server will run on `http://localhost:5000`.

---

## **API Endpoints**  

### **1. Register User**  
- **Method**: `POST /api/users/register`  
- **Body**:  
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "fullName": "John Doe",
  "gender": "Male",
  "dateOfBirth": "1995-10-15",
  "country": "India"
}
```

### **2. Login User**  
- **Method**: `POST /api/users/login`  
- **Body**:  
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### **3. Search User (Protected)**  
- **Method**: `GET /api/users/search`  
- **Headers**:  
```
Authorization: Bearer <your-jwt-token>
```
- **Query Parameters**:  
  - By username: `username=john_doe`  
  - Or by email: `email=john@example.com`  

---

## **Demo Video & Postman Collection**  
- **Demo Video**: [Link to your video walkthrough]  
- **Postman Collection**: [Link to the Postman collection file](https://github.com/your-username/your-repo-name/postman-collection.json)  

---

## **Folder Structure**  
```
project-root/
│
├── controllers/         # API controllers
├── middleware/          # Middleware (e.g., auth)
├── models/              # Mongoose models
├── routes/              # API routes
├── .env                 # Environment variables
└── server.js            # Main entry point
```

---

## **License**  
This project is licensed under the MIT License.  
