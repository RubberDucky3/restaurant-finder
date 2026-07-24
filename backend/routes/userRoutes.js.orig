const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Retrieve all users
router.get('/', userController.getAllUsers);

// Retrieve a single user by ID
router.get('/:id', userController.getUserById);

// Update a user with specified ID
router.put('/:id', userController.updateUser);

// Delete a user with specified ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
diff --git a/backend/controllers/userController.js b/backend/controllers/userController.js
@@ -1,6 +1,7 @@
 const express = require('express');
 const User = require('../models/user');
const bcrypt = require('bcryptjs');

 // Create and Save a new User
 exports.createUser = (req, res) => {
@@ -20,6 +21,34 @@ exports.getAllUsers = (req, res) => {
     });
 };

// Retrieve a single user by ID
exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.id
            });
        });
};

 // Update a user identified by the userId in the request
 exports.updateUser = (req, res) => {
     User.findByIdAndUpdate(req.params.id, req.body, { new: true })
@@ -31,6 +58,24 @@ exports.deleteUser = (req, res) => {
         .catch(err => {
             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                 return res.status(404).send({
                    message: "User not found with id " + req.params.id
                 });
             }
             return res.status(500).send({
                message: "Error updating user with id " + req.params.id
             });
         });
     };
diff --git a/backend/models/user.js b/backend/models/user.js
@@ -1,6 +1,7 @@
 const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     name: String,
     email: {
         type: String,
@@ -14,3 +15,4 @@ const UserSchema = new mongoose.Schema({
     password: String
 });

module.exports = mongoose.model('User', UserSchema);
