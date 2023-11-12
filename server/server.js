// Importing required modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

// Importing routes
const authRoute = require("./routes/auth");

// Creating an express app
const app = express();

// Middlewares

// To handle JSON payloads
app.use(express.json());

// To parse URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enabling CORS
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Session management
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

// Cookie parser
app.use(cookieParser("secretcode"));

// Routes
app.use("/auth", authRoute); // Authentication Route

// Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
