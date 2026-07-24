@@ -2,6 +2,8 @@ const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
     email: {
        type: String,
        required: true,
         unique: true
     },
     password: {
@@ -9,4 +11,7 @@ const userSchema = new mongoose.Schema({
     role: {
         type: String,
         enum: ['user', 'admin'],
        default: 'user',
        required: true
     }
 });

 module.exports = mongoose.model('User', userSchema);
