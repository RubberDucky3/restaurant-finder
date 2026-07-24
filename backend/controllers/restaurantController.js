const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint to fetch restaurant data from a public API
router.get('/restaurants', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/restaurants');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant data' });
  }
});

// Endpoint to fetch a specific restaurant by ID
router.get('/restaurants/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://api.example.com/restaurants/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant data' });
  }
});

module.exports = router;
diff --git a/backend/routes/index.js b/backend/routes/index.js
index 3f4b2c1..e6d8a9b 100644
++ b/backend/routes/index.js
@@ -1,5 +1,7 @@
 const express = require('express');
 const router = express.Router();
const restaurantRoutes = require('../controllers/restaurantController');
 
 // Include routes for users
 router.use('/users', require('./userRoutes'));
@@ -8,3 +10,5 @@ router.use('/users', require('./userRoutes'));
 
 // Include routes for restaurants
router.use('/restaurants', restaurantRoutes);
 
 module.exports = router;
diff --git a/backend/package.json b/backend/package.json
index 6f7b9c2..e4d8a9b 100644
++ b/backend/package.json
@@ -30,6 +30,7 @@
   "dependencies": {
     "bcryptjs": "^2.4.3",
     "cors": "^2.8.5",
    "axios": "^0.21.1",
     "dotenv": "^10.0.0",
     "express": "^4.17.1",
     "mongoose": "^5.12.6"
