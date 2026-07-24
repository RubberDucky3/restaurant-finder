const Restaurant = require('../models/restaurant');

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const Restaurant = require('../models/restaurant');
 
const searchRestaurants = async (req, res) => {
  const { query, cuisine } = req.query;
   try {
     // Fetch all restaurants from the database
     const restaurants = await Restaurant.find();
@@ -8,6 +10,24 @@ const getAllRestaurants = async (req, res) => {
     return res.status(200).json(restaurants);
   } catch (error) {
     return res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};
const dotenv = require('dotenv');

dotenv.config();
const searchRestaurants = async (req, res) => {
  const { query, cuisine } = req.query;
  try {
    // Fetch all restaurants from the database
    let restaurants = await Restaurant.find();

    // Filter by cuisine if provided
    if (cuisine) {
      restaurants = restaurants.filter(restaurant =>
        restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      );
    }

    // Filter by query if provided
    if (query) {
      restaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    return res.status(200).json(restaurants);
   } catch (error) {
     return res.status(500).json({ error: 'Failed to fetch restaurants' });
   }
@@ -14,6 +38,7 @@ module.exports = {
   getAllRestaurants,
  searchRestaurants
 };
