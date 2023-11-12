// Importing required modules
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

// Exporting a function that configures passport
module.exports = function (passport, db) {
  // Using local strategy for authentication
  passport.use(
    new localStrategy((username, password, done) => {
      // Querying the database to find the user
      db.query(
        "SELECT * FROM localauth_users WHERE username = ?",
        [username],
        (err, result) => {
          if (err) throw err;
          if (result.length > 0) {
            // User found
            const user = result[0];
            // Comparing the entered password with the stored password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                // Passwords match, authentication successful
                return done(null, user);
              } else {
                // Passwords do not match, authentication failed
                return done(null, false, { message: "Password incorrect" });
              }
            });
          } else {
            // User not found
            return done(null, false, {
              message: "Username not registered",
            });
          }
        }
      );
    })
  );

  // Serializing user to store in the session
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  // Deserializing user from the session
  passport.deserializeUser((id, cb) => {
    db.query(
      "SELECT username FROM localauth_users WHERE id = ?",
      [id],
      (err, result) => {
        if (err) throw err;
        cb(null, result[0]);
      }
    );
  });
};