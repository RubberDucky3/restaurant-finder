 const express = require('express');
 const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
 
 // GET all restaurants
 router.get('/', (req, res) => {
@@ -10,6 +11,23 @@ router.get('/', (req, res) => {
 });
 
 // POST a new restaurant
router.post('/', restaurantController.createRestaurant);

// GET a single restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// PUT update an existing restaurant
router.put('/:id', restaurantController.updateRestaurant);

// DELETE a restaurant
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;
diff --git a/backend/controllers/restaurantController.js b/backend/controllers/restaurantController.js
index 9a8b7c6..d5e4f32 100644
++ b/backend/controllers/restaurantController.js
@@ -1,4 +1,5 @@
 const Restaurant = require('../models/restaurant');
const { body, validationResult } = require('express-validator/check');
 
 // Create and Save a new Restaurant
 exports.createRestaurant = (req, res) => {
@@ -20,6 +21,7 @@ exports.createRestaurant = (req, res) => {
     });
 };
 
// Retrieve all Restaurants from the database.
 exports.findAll = (req, res) => {
     Restaurant.find()
         .then(restaurants => res.send(restaurants))
         .catch(err => res.status(500).send({
             message: err.message || "Some error occurred while retrieving restaurants."
         }));
 };
 
// Find a single Restaurant with an id
 exports.findOne = (req, res) => {
     const id = req.params.id;
 
     Restaurant.findById(id)
         .then(restaurant => {
             if (!restaurant) {
                 return res.status(404).send({
                     message: "Restaurant not found with id " + id
                 });
             }
             res.send(restaurant);
         })
         .catch(err => {
             if (err.kind === 'ObjectId') {
                 return res.status(404).send({
                     message: "Restaurant not found with id " + id
                 });
             }
             return res.status(500).send({
                 message: "Error retrieving restaurant with id " + id
             });
         });
 };
 
// Update a Restaurant identified by the id in the request
 exports.update = (req, res) => {
     const id = req.params.id;
 
     Restaurant.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
         .then(restaurant => {
             if (!restaurant) {
                 return res.status(404).send({
                     message: "Restaurant not found with id " + id
                 });
             }
             res.send({ message: "Restaurant was updated successfully." });
         })
         .catch(err => {
             if (err.kind === 'ObjectId') {
                 return res.status(404).send({
                     message: "Restaurant not found with id " + id
                 });
             }
             return res.status(500).send({
                 message: "Error updating restaurant with id " + id
             });
         });
 };
 
// Delete a Restaurant with the specified id in the request
 exports.delete = (req, res) => {
     const id = req.params.id;
 
     Restaurant.findByIdAndRemove(id)
         .then(restaurant => {
             if (!restaurant) {
                 return res.status(404).send({
                     message: "Restaurant not found with id " + id
                 });
             }
             res.send({ message: "Restaurant was deleted successfully." });
         })
         .catch(err => {
             return res.status(500).send({
                 message: "Could not delete restaurant with id " + id
             });
         });
 };
