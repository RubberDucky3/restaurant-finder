@@ -10,6 +10,8 @@ const Restaurant = require('../models/restaurant');
 
 exports.updateRestaurant = async (req, res) => {
     try {
        if (!req.body.phoneNumber || !req.body.coordinates) {
            return res.status(400).json({ message: 'Phone number and coordinates are required' });
         const restaurantId = req.params.id;
         const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, req.body, { new: true });
         if (!updatedRestaurant) {
diff --git a/backend/controllers/userController.js b/backend/controllers/userController.js
index 9a8b7c6..f5e4d32 100644
++ b/backend/controllers/userController.js
@@ -10,6 +10,8 @@ const User = require('../models/user');
 
 exports.updateUser = async (req, res) => {
     try {
        if (!req.body.phoneNumber || !req.body.coordinates) {
            return res.status(400).json({ message: 'Phone number and coordinates are required' });
         const userId = req.params.id;
         const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
         if (!updatedUser) {
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
index 1a2b3c4..5d6e7f8 100644
++ b/backend/routes/restaurantRoutes.js
@@ -10,6 +10,8 @@ const express = require('express');
 const router = express.Router();
 const restaurantController = require('../controllers/restaurantController');
 
router.put('/:id', restaurantController.updateRestaurant);

 module.exports = router;
diff --git a/backend/routes/userRoutes.js b/backend/routes/userRoutes.js
index 9a8b7c6..f5e4d32 100644
++ b/backend/routes/userRoutes.js
@@ -10,6 +10,8 @@ const express = require('express');
 const router = express.Router();
 const userController = require('../controllers/userController');
 
router.put('/:id', userController.updateUser);

 module.exports = router;
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
index 1a2b3c4..5d6e7f8 100644
++ b/frontend/src/components/RegistrationForm.js
@@ -10,6 +10,8 @@ import React, { useState } from 'react';
 const RegistrationForm = () => {
     const [formData, setFormData] = useState({
         phoneNumber: '',
        coordinates: ''
     });
 
     const handleChange = (e) => {
diff --git a/frontend/src/App.css b/frontend/src/App.css
index 1a2b3c4..5d6e7f8 100644
++ b/frontend/src/App.css
@@ -10,6 +10,8 @@ body {
     font-family: Arial, sans-serif;
 }
 
#phoneNumberInput, #coordinatesInput {
    margin-top: 10px;
}
diff --git a/frontend/src/components/RegistrationForm.js b/frontend/src/components/RegistrationForm.js
index 1a2b3c4..5d6e7f8 100644
++ b/frontend/src/components/RegistrationForm.js
@@ -10,6 +10,8 @@ import React, { useState } from 'react';
 const RegistrationForm = () => {
     const [formData, setFormData] = useState({
         phoneNumber: '',
        coordinates: ''
     });
 
     const handleChange = (e) => {
diff --git a/frontend/src/App.css b/frontend/src/App.css
index 1a2b3c4..5d6e7f8 100644
++ b/frontend/src/App.css
@@ -10,6 +10,8 @@ body {
     font-family: Arial, sans-serif;
 }
 
#phoneNumberInput, #coordinatesInput {
    margin-top: 10px;
}
