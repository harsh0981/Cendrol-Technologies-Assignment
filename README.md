# Cendrol-Technologies-Assignment

# Node.js User Information API

This project is a Node.js-based REST API for managing user information. It supports CRUD operations with authentication and utilizes MongoDB as the database. The API includes endpoints to create, read, update, and delete users, and restricts access to authorized users only.

# Features

CRUD Operations: Create, Read (single/all), Update, and Delete users.

Authentication: JWT-based authentication for route protection.

Profile Picture Support: Upload and manage profile pictures.

Proper Folder Structure: Modular code organization for scalability.

# Technologies Used

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JSON Web Tokens (JWT)

File Uploads: Multer

# Folder Structure

![image](https://github.com/user-attachments/assets/4a9f222b-73c3-4b2b-abe0-65ff9599f671)

# Dependencies

express: Web framework for Node.js

mongoose: MongoDB object modeling for Node.js

bcryptjs: Password hashing

dotenv: Environment variable management

jsonwebtoken: Token-based authentication

multer: File upload handling

# Assumptions

Passwords are securely hashed before saving to the database.

Profile picture uploads are stored in the uploads/ directory.

MongoDB instance is correctly configured in the .env file.
