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
