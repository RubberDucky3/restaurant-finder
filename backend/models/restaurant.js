const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  globalAccess: {
    type: Boolean,
    default: false
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
diff --git a/backend/controllers/restaurantController.js b/backend/controllers/restaurantController.js
++ b/backend/controllers/restaurantController.js
@@ -0,0 +1,25 @@
const Restaurant = require('../models/restaurant');

exports.addRestaurantToFavorites = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    req.user.favorites.push(restaurant._id);
    await req.user.save();
    res.json({ message: 'Restaurant added to favorites' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGlobalRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ globalAccess: true });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
diff --git a/backend/controllers/userController.js b/backend/controllers/userController.js
++ b/backend/controllers/userController.js
@@ -1,6 +1,7 @@
 const User = require('../models/user');
 const bcrypt = require('bcryptjs');
const Restaurant = require('../models/restaurant');
 
 exports.registerUser = async (req, res) => {
   try {
@@ -29,3 +30,14 @@ exports.loginUser = async (req, res) => {
     res.json({ message: 'Invalid credentials' });
   }
 };

exports.addRestaurantToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await Restaurant.findByIdAndUpdate(req.params.restaurantId, { $addToSet: { users: req.user._id } });
    res.json({ message: 'Restaurant added to favorites' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 };
