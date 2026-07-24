 const Restaurant = require('../models/restaurant');
 
const geolib = require('geolib');

 // Create a new restaurant
 exports.createRestaurant = async (req, res) => {
     try {
@@ -20,6 +22,8 @@ exports.createRestaurant = async (req, res) => {
         const { name, address, cuisine, phoneNumber, coordinates } = req.body;
 
         const newRestaurant = new Restaurant({
            phoneNumber,
            coordinates: geolib.parseCoordinates(coordinates),
             name,
             address,
             cuisine
@@ -40,6 +44,8 @@ exports.updateRestaurant = async (req, res) => {
     try {
         const { id } = req.params;
         const { name, address, cuisine, phoneNumber, coordinates } = req.body;
        const parsedCoordinates = geolib.parseCoordinates(coordinates);
 
         const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, {
             name,
@@ -50,6 +56,7 @@ exports.updateRestaurant = async (req, res) => {
             cuisine,
             phoneNumber,
             coordinates: parsedCoordinates
        }, { new: true });
 
         if (!updatedRestaurant) {
             return res.status(404).json({ message: 'Restaurant not found' });
@@ -65,6 +72,8 @@ exports.getRestaurantById = async (req, res) => {
     try {
         const { id } = req.params;
 
        const restaurant = await Restaurant.findById(id);

         if (!restaurant) {
             return res.status(404).json({ message: 'Restaurant not found' });
         }
@@ -80,6 +89,7 @@ exports.getAllRestaurants = async (req, res) => {
     try {
         const restaurants = await Restaurant.find();
 
        const parsedRestaurants = restaurants.map(restaurant => ({
             ...restaurant.toObject(),
            coordinates: geolib.formatCoordinates(restaurant.coordinates),
            phoneNumber: restaurant.phoneNumber
         }));
 
         res.json(parsedRestaurants);
