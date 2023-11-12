// Importing required modules
const router = require("express").Router();
const db = require("../model/db");
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Initialize Passport and restore authentication state, if any, from the session.
router.use(passport.initialize());
router.use(passport.session());

// Importing Passport configuration
require("../passportConfig")(passport, db);

// Login route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err); // If error, go to next middleware
    }
    if (!user) {
      return res.send({ success: false, message: info.message }); // If user not found, send error message
    }
    req.login(user, (err) => {
      if (err) {
        return next(err); // If error, go to next middleware
      }
      return res.send({ success: true, message: "authentication succeeded" }); // If success, send success message
    });
  })(req, res, next);
});

// Register route
router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if user already exists
  db.query(
    "SELECT * FROM localauth_users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      }

      if (result.length > 0) {
        // User already exists
        res.send("User already exists");
      } else {
        // User does not exist, proceed with registration
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            console.log(err);
          }

          db.query(
            "INSERT INTO localauth_users (username, name, email, password) VALUES (?,?,?,?)",
            [username, username, username, hash],
            (err, result) => {
              if (err) {
                console.log(err);
              }
              res.send("User registered"); // Send success message
            }
          );
        });
      }
    }
  );
});

// Logout route
router.post("/logout", (req, res, next) => {
  //generic logout method in passport
  req.logout((err) => {
    if (err) {
      return next(err); // If error, go to next middleware
    }
  });
  res.send({ success: true, message: "logout succeeded" }); // If success, send success message
});

// Get user data route
router.get("/user", (req, res) => {
  res.send(req.user); // Send user data
});

// Exporting router to be used in other parts of the application
module.exports = router;
