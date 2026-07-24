const axios = require('axios');

exports.getRestaurants = async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/restaurants'); // Replace with actual API endpoint
    const restaurants = response.data;
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

exports.addRestaurant = async (req, res) => {
  try {
    const { name, address, cuisine } = req.body;
    // Add restaurant logic here
    res.status(201).json({ message: 'Restaurant added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add restaurant' });
  }
};
diff --git a/backend/models/restaurant.js b/backend/models/restaurant.js
new file mode 100644
++ b/backend/models/restaurant.js
@@ -0,0 +1,15 @@
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
new file mode 100644
++ b/backend/routes/restaurantRoutes.js
@@ -0,0 +1,12 @@
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/restaurants', restaurantController.getRestaurants);
router.post('/restaurants', restaurantController.addRestaurant);

module.exports = router;
diff --git a/backend/server.js b/backend/server.js
index 0a0b1c2..3d4e5f6 100644
++ b/backend/server.js
@@ -1,5 +1,6 @@
 const express = require('express');
const restaurantRoutes = require('./routes/restaurantRoutes');
 
 const app = express();
 const port = process.env.PORT || 3000;
@@ -8,4 +9,5 @@ app.use(express.json());
 
 app.get('/', (req, res) => {
   res.send('Hello World!');
 });

app.use('/api', restaurantRoutes);
 
 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
diff --git a/frontend/src/App.css b/frontend/src/App.css
index 0a1b2c3..4d5e6f7 100644
++ b/frontend/src/App.css
@@ -1,3 +1,8 @@
 body {
   font-family: Arial, sans-serif;
  background-color: #ffffff; /* Change to dark mode color */
  color: #000000; /* Change to dark mode color */
 }
 
 .App {
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
index 0a1b2c3..4d5e6f7 100644
++ b/frontend/src/components/RegistrationForm.js
@@ -1,3 +1,8 @@
 import React from 'react';
 
 const RegistrationForm = () => {
  // Add dark mode toggle functionality here

   return (
     <div>
       <h2>Register</h2>
diff --git a/package.json b/package.json
index 0a1b2c3..4d5e6f7 100644
++ b/package.json
@@ -1,9 +1,10 @@
 {
   "name": "restaurant-finder",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
  "scripts": {
    "start": "node server.js"
  },
   "keywords": [],
   "author": "",
   "license": "ISC",
@@ -12,6 +13,7 @@
     "express": "^4.17.1",
     "mongoose": "^5.10.13",
     "axios": "^0.21.1"
  },
   "devDependencies": {}
 }
