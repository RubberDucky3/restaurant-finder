@@ -10,6 +10,10 @@ import { useState } from 'react';
 
 const RegistrationForm = () => {
   const [formData, setFormData] = useState({
    phoneNumber: '',
    latitude: '',
    longitude: ''
  });
 
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
@@ -25,6 +29,14 @@ const RegistrationForm = () => {
       <input
         type="text"
         name="name"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="number"
        name="latitude"
        value={formData.latitude}
        onChange={handleChange}
        placeholder="Latitude"
       />
       <input
         type="number"
@@ -35,6 +47,14 @@ const RegistrationForm = () => {
       <input
         type="number"
         name="longitude"
        value={formData.longitude}
        onChange={handleChange}
        placeholder="Longitude"
       />
       <button type="submit">Submit</button>
     </form>
diff --git a/backend/controllers/restaurantController.js b/backend/controllers/restaurantController.js
index 9a8b7c6..5d4e3f2 100644
++ b/backend/controllers/restaurantController.js
@@ -10,6 +10,10 @@ const Restaurant = require('../models/restaurant');
 
 exports.createRestaurant = async (req, res) => {
   try {
    req.body.phoneNumber = req.body.phoneNumber || '';
    req.body.latitude = parseFloat(req.body.latitude) || 0;
    req.body.longitude = parseFloat(req.body.longitude) || 0;

     const restaurant = new Restaurant(req.body);
     await restaurant.save();
     res.status(201).json(restaurant);
diff --git a/backend/controllers/userController.js b/backend/controllers/userController.js
index 5a4b3c2..8d7e6f5 100644
++ b/backend/controllers/userController.js
@@ -10,6 +10,10 @@ const User = require('../models/user');
 
 exports.createUser = async (req, res) => {
   try {
    req.body.phoneNumber = req.body.phoneNumber || '';
    req.body.latitude = parseFloat(req.body.latitude) || 0;
    req.body.longitude = parseFloat(req.body.longitude) || 0;

     const user = new User(req.body);
     await user.save();
     res.status(201).json(user);
diff --git a/backend/models/restaurant.js b/backend/models/restaurant.js
index 6a5b4c3..9d8e7f6 100644
++ b/backend/models/restaurant.js
@@ -10,6 +10,10 @@ const mongoose = require('mongoose');
 
 const restaurantSchema = new mongoose.Schema({
   name: String,
  phoneNumber: {
    type: String,
    default: ''
  },
   address: String,
   latitude: {
     type: Number,
@@ -20,6 +24,10 @@ const restaurantSchema = new mongoose.Schema({
   longitude: {
     type: Number,
     required: true
  },
  phoneNumber: {
    type: String,
    default: ''
   }
 });
 
diff --git a/backend/models/user.js b/backend/models/user.js
index 7a6b5c4..0d9e8f7 100644
++ b/backend/models/user.js
@@ -10,6 +10,10 @@ const mongoose = require('mongoose');
 
 const userSchema = new mongoose.Schema({
   name: String,
  phoneNumber: {
    type: String,
    default: ''
  },
   email: {
     type: String,
     required: true
@@ -20,6 +24,10 @@ const userSchema = new mongoose.Schema({
   latitude: {
     type: Number,
     required: true
  },
  phoneNumber: {
    type: String,
    default: ''
   }
 });
 
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
index 8a7b6c5..1d2e3f4 100644
++ b/backend/routes/restaurantRoutes.js
@@ -10,6 +10,10 @@ const express = require('express');
 const router = express.Router();
 const restaurantController = require('../controllers/restaurantController');
 
router.post('/', restaurantController.createRestaurant);

 module.exports = router;
diff --git a/backend/routes/userRoutes.js b/backend/routes/userRoutes.js
index 9a8b7c6..5d4e3f2 100644
++ b/backend/routes/userRoutes.js
@@ -10,6 +10,10 @@ const express = require('express');
 const router = express.Router();
 const userController = require('../controllers/userController');
 
router.post('/', userController.createUser);

 module.exports = router;
