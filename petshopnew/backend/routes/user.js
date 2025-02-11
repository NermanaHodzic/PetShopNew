const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// POST /api/users/signup - User registration
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if user already exists
  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
      }

      // Create new user
      const newUser = new User({
        username,
        email,
        password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              // Create JWT payload
              const payload = {
                id: user.id,
                username: user.username,
                email: user.email
              };

              // Sign token
              jwt.sign(
                payload,
                'YOUR_SECRET_KEY',
                { expiresIn: 3600 }, // Expires in 1 hour
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    });
});

// POST /api/users/login - User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Find user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // Create JWT payload
            const payload = {
              id: user.id,
              username: user.username,
              email: user.email
            };

            // Sign token
            jwt.sign(
              payload,
              'YOUR_SECRET_KEY',
              { expiresIn: 3600 }, // Expires in 1 hour
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              }
            );
          } else {
            return res.status(400).json({ msg: 'Incorrect password' });
          }
        });
    });
    
    router.post('/login', (req, res) => {
        const { email, password } = req.body;
      
        // Check if user exists
        User.findOne({ email })
          .then(user => {
            if (!user) {
              return res.status(404).json({ msg: 'User not found' });
            }
      
            // Check password
            bcrypt.compare(password, user.password)
              .then(isMatch => {
                if (isMatch) {
                  // Create JWT payload
                  const payload = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                  };
      
                  // Sign token
                  jwt.sign(
                    payload,
                    'YOUR_SECRET_KEY',
                    { expiresIn: 3600 }, // Expires in 1 hour
                    (err, token) => {
                      res.json({
                        success: true,
                        token: 'Bearer ' + token
                      });
                    }
                  );
                } else {
                  return res.status(400).json({ msg: 'Incorrect password' });
                }
              });
          })
          .catch(err => console.log(err));
      });
});

module.exports = router;
