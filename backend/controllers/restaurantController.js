 const express = require('express');
const { validationResult } = require('express-validator');
 const router = express.Router();
 
 const Restaurant = require('../models/restaurant');
@@ -25,6 +26,14 @@ exports.createRestaurant = async (req, res) => {
     try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, address, cuisine } = req.body;

        // Validate input data
        if (!name || !address || !cuisine) {
            return res.status(400).json({ message: 'All fields are required' });
         }
 
         const restaurant = new Restaurant({
@@ -52,6 +61,14 @@ exports.getRestaurantById = async (req, res) => {
     try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        // Validate input data
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
         }
 
         const restaurant = await Restaurant.findById(req.params.id);
diff --git a/backend/controllers/userController.js b/backend/controllers/userController.js
index 3f4b5c6..e7d8a9b 100644
++ b/backend/controllers/userController.js
@@ -1,6 +1,7 @@
 const express = require('express');
const { validationResult } = require('express-validator');
 const router = express.Router();
 
 const User = require('../models/user');
@@ -25,6 +26,14 @@ exports.createUser = async (req, res) => {
     try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        // Validate input data
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
         }
 
         let user = await User.findOne({ email });
@@ -52,6 +61,14 @@ exports.getUserById = async (req, res) => {
     try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        // Validate input data
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
         }
 
         const user = await User.findById(req.params.id);
