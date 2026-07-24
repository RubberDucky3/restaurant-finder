 const express = require('express');
 const router = express.Router();
 const userController = require('../controllers/userController');
const { check } = require('express-validator');
 
 // Create a new user
 router.post('/', [
@@ -9,6 +11,10 @@ router.post('/', [
     userController.createUser
 ]);
 
// Update an existing user
router.put('/:id', [
    check('phoneNumber').isString(),
    check('coordinates.lat').isNumeric(),
    check('coordinates.lng').isNumeric(),
     userController.updateUser
 ]);
 
@@ -16,6 +22,8 @@ router.get('/:id', userController.getUser);
 
 module.exports = router;
