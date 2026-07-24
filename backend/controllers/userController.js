 const User = require('../models/user');
 const bcrypt = require('bcryptjs');

const saltRounds = 10;

 // Create and Save a new User
 exports.createUser = async (req, res) => {
     try {
@@ -24,7 +25,8 @@ exports.createUser = async (req, res) => {
         user.email = req.body.email;
         user.password = req.body.password; // Hash the password before saving it to the database

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
 
         res.status(201).json(savedUser);
     } catch (error) {
diff --git a/backend/models/user.js b/backend/models/user.js
index 7a8b9c0..d1e2f34 100644
++ b/backend/models/user.js
@@ -1,5 +1,6 @@
 const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

 const userSchema = new mongoose.Schema({
     name: {
         type: String,
@@ -20,7 +21,8 @@ const userSchema = new mongoose.Schema({
     email: {
         type: String,
         required: true,
        unique: true,
        select: false // Prevent the password from being returned in queries
     },
     password: {
         type: String,
@@ -30,6 +32,7 @@ const userSchema = new mongoose.Schema({
         minlength: 8,
         required: true
     }
 });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

 module.exports = mongoose.model('User', userSchema);
