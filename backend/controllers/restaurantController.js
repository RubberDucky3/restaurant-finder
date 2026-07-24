const axios = require('axios');

exports.getRestaurants = async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/restaurants', {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

exports.rateLimitMiddleware = (req, res, next) => {
  // Implement rate limiting logic here
  // For example, using a library like express-rate-limit
  next();
};
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
new file mode 100644
++ b/backend/routes/restaurantRoutes.js
@@ -0,0 +1,7 @@
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.rateLimitMiddleware, restaurantController.getRestaurants);

module.exports = router;
diff --git a/backend/package.json b/backend/package.json
index 1234567..89abcde 100644
++ b/backend/package.json
@@ -10,6 +10,7 @@
   "dependencies": {
     "express": "^4.17.1",
    "axios": "^0.21.1"
   },
   "devDependencies": {}
 }
diff --git a/frontend/src/App.css b/frontend/src/App.css
index 1234567..89abcde 100644
++ b/frontend/src/App.css
@@ -1,3 +1,6 @@
 body {
   font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
 }
 
 .header {
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
index 1234567..89abcde 100644
++ b/frontend/src/components/RegistrationForm.js
@@ -1,3 +1,6 @@
 import React from 'react';
 
import './dark-mode.css';

 const RegistrationForm = () => {
   return (
     <div className="registration-form">
diff --git a/frontend/src/App.css b/frontend/src/dark-mode.css
new file mode 100644
++ b/frontend/src/dark-mode.css
@@ -0,0 +1,6 @@
body {
  background-color: #333;
  color: #fff;
}

.header {
  background-color: #555;
}
diff --git a/frontend/package.json b/frontend/package.json
index 1234567..89abcde 100644
++ b/frontend/package.json
@@ -10,6 +10,7 @@
   "dependencies": {
     "react": "^17.0.2",
    "react-google-maps": "^2.13.0"
   },
   "devDependencies": {}
 }
