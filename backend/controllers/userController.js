 const User = require('../models/user');
const Restaurant = require('../models/restaurant');
 
 exports.registerUser = async (req, res) => {
   try {
@@ -20,4 +21,18 @@ exports.loginUser = async (req, res) => {
     return res.status(401).json({ message: 'Invalid credentials' });
   }
 };

exports.getGlobalRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching global restaurants' });
  }
};

exports.addRestaurantToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.favorites.push(req.body.restaurantId);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error adding restaurant to favorites' });
  }
 };
