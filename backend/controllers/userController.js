 const User = require('../models/user');
 
const geolib = require('geolib');

 // Create a new user
 exports.createUser = async (req, res) => {
     try {
@@ -20,6 +22,8 @@ exports.createUser = async (req, res) => {
         });
     } catch (error) {
         return res.status(500).json({ message: error.message });
    }
};
 
 // Update an existing user
 exports.updateUser = async (req, res) => {
@@ -34,6 +38,12 @@ exports.updateUser = async (req, res) => {
         return res.status(404).json({ message: 'User not found' });
     }
 
    if (req.body.phoneNumber && req.body.latitude && req.body.longitude) {
        user.phoneNumber = req.body.phoneNumber;
        user.location = geolib.getPointFromCoordinates(req.body.latitude, req.body.longitude);
    }

     await user.save();
     res.json(user);
 };
@@ -45,6 +55,12 @@ exports.getUserById = async (req, res) => {
         return res.status(404).json({ message: 'User not found' });
     }
 
    if (user.location) {
        const { latitude, longitude } = user.location;
        user.latitude = latitude;
        user.longitude = longitude;
    }

     res.json(user);
 };
