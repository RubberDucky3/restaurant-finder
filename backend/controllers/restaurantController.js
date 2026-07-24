 const Restaurant = require('../models/restaurant');
 const User = require('../models/user');
const rateLimit = require('express-rate-limit');
 
 // Create and Save a new Restaurant
 exports.createRestaurant = async (req, res) => {
diff --git a/backend/middleware/rateLimit.js b/backend/middleware/rateLimit.js
new file mode 100644
++ b/backend/middleware/rateLimit.js
@@ -0,0 +1,12 @@
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

module.exports = {
  limiter
};
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
++ b/backend/routes/restaurantRoutes.js
@@ -1,6 +1,7 @@
 const express = require('express');
 const router = express.Router();
 const restaurantController = require('../controllers/restaurantController');
const rateLimitMiddleware = require('../middleware/rateLimit').limiter;
 
 // Create a new Restaurant
 router.post('/', restaurantController.createRestaurant);
diff --git a/backend/package.json b/backend/package.json
++ b/backend/package.json
@@ -10,6 +10,7 @@
   "dependencies": {
     "express": "^4.17.1",
     "mongoose": "^5.12.3"
    "express-rate-limit": "^6.0.0"
   },
   "devDependencies": {}
 }
diff --git a/frontend/css/dark-mode.css b/frontend/css/dark-mode.css
new file mode 100644
++ b/frontend/css/dark-mode.css
@@ -0,0 +1,12 @@
body {
  background-color: #333;
  color: #fff;
}

h1, h2, h3, h4, h5, h6 {
  color: #ddd;
}

a {
  color: #007bff;
}
diff --git a/frontend/src/App.css b/frontend/src/App.css
++ b/frontend/src/App.css
@@ -1,3 +1,4 @@
 body {
   font-family: Arial, sans-serif;
 }

 @import './dark-mode.css';
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
++ b/frontend/src/components/RegistrationForm.js
@@ -1,6 +1,7 @@
 import React from 'react';
 import { Formik, Form, Field } from 'formik';
import { useTheme } from '@mui/material/styles';
 
 const RegistrationForm = ({ onSubmit }) => {
   return (
diff --git a/index.html b/index.html
++ b/index.html
@@ -10,6 +10,7 @@
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Restaurant Finder</title>
     <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/dark-mode.css">
   </head>
   <body>
     <div id="root"></div>
