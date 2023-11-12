# Login Authentication App with Passport.js

## Overview

This project is a simple authentication app using Passport.js with a local strategy. It consists of a client and a server, each with its own functionality.

## Table of Contents

1. [Client](#client)
    - [Setup](#setup)
    - [Running the Client](#running-the-client)
2. [Server](#server)
    - [Setup](#setup-1)
    - [Database Configuration](#database-configuration)
    - [Database Setup](#database-setup)
    - [Running the Server](#running-the-server)
3. [Usage](#usage)
    - [Authentication Endpoints](#authentication-endpoints)
    - [User Data](#user-data)
4. [Client Routes](#client-routes)
5. [API Usage](#api-usage)
    - [Sign Up](#sign-up)
    - [Sign In](#sign-in)
    - [Sign Out](#sign-out)
    - [Get User Data](#get-user-data)
6. [Project Structure](#project-structure)
7. [Working](#working)
8. [Applications](#applications)
9. [Tech Used](#tech-used)
10. [Versions](#versions)

## Client

### Setup

1. Navigate to the `client` folder.
   ```bash
   cd client
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

### Running the Client

```bash
npm run dev
```

This will start the development server for the client.
(remember the port no. to be updated in server/server.js)

## Server

### Setup

1. Navigate to the `server` folder.
   ```bash
   cd server
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Update the Port address.
    ```
    in server/server.js

    ...
    
    // Enabling CORS
    app.use(cors({ origin: "http://localhost:5173",     credentials: true }));
    ...

    Update the port address here on which your frontend is running.
    ```

### Database Setup

Create a MySQL database table using the following query:

```sql
CREATE TABLE `yourdb`.`localauth_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `username`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE
);
```

This query creates a table named `localauth_users` with columns for user information. Make sure to update the database name and other configurations in the `db.js` file.

### Database Configuration

Update the `db.js` file in the `model` folder with your MySQL database configuration.

```
host: "yourhost",
port: 3600(your port),
user: "root(your user)",
password: "yourPassword",
database: "yourDbName",
```

### Running the Backend Server

```bash
npm start
```

This will start the server on [http://localhost:5000](http://localhost:5000).

## Usage

use any api too like ``fetch(),axios or swr`` to call on these endpoints.

### Authentication Endpoints

- **Sign Up:** `POST: /auth/register` - Register a new user.
- **Sign In:** `POST: /auth/login` - Log in with existing credentials.
- **Sign Out:** `POST: /auth/logout` - Log out the currently authenticated user.

### User Data

- **Get User Data:** `GET: /auth/user` - Get data of the currently authenticated user.

## Client Routes

- `/signup` - User registration form.
- `/signin` - User login form.
- `/signout` - Button to log out the user.
- `/user` - Display user information.

## API Usage

### Sign Up

```javascript
// Example using Axios
axios.post('http://localhost:5000/auth/register', {
  username: 'your_username',
  password: 'your_password',
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Sign In

```javascript
// Example using Axios
axios.post('http://localhost:5000/auth/login', {
  username: 'your_username',
  password: 'your_password',
}, { withCredentials: true })
  .then((res) => {
    console.log(res.data.message);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Sign Out

```javascript
// Example using Axios
axios.post('http://localhost:5000/auth/logout', { withCredentials: true })
  .then((res) => {
    console.log(res.data.message);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Get User Data

```javascript
// Example using Axios
axios.get('http://localhost:5000/auth/user', { withCredentials: true })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Project Structure

The project consists of a client and a server. The client is built with React and Vite, while the server uses Express, Passport.js, and MySQL for authentication.

## Working

This authentication app uses Passport.js with a local strategy for user authentication. It includes sign-up, sign-in, sign-out, and user data retrieval functionalities.

## Applications

The app can be used as a foundation for projects requiring user authentication. It provides a secure and scalable authentication system with a simple client-server architecture.

## Tech Used

- Frontend: React, Vite
- Backend: Express, Passport.js, MySQL
- Other: Axios, bcrypt

Keep Hacking 🚀.