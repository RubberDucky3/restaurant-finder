 const express = require('express');
const router = express.Router();

// Import the Restaurant model
const Restaurant = require('../models/restaurant');
const dotenv = require('dotenv');

// Create a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

 module.exports = router;
diff --git a/backend/models/restaurant.js b/backend/models/restaurant.js
index 1a2b3c4..5d6e7f8 100644
++ b/backend/models/restaurant.js
@@ -1,6 +1,23 @@
 const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  }
});

 const Restaurant = mongoose.model('Restaurant', restaurantSchema);

 module.exports = Restaurant;
