 const Restaurant = require('../models/restaurant');
 
const getHeroData = async (req, res) => {
  try {
    const stats = await Restaurant.aggregate([
      // Add aggregation pipeline to fetch live stats
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hero data' });
  }
};
 
 module.exports = {
  getHeroData,
 };
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
index 4a5b6c7..8d9e0f1 100644
++ b/backend/routes/restaurantRoutes.js
@@ -1,6 +1,7 @@
 const express = require('express');
 const router = express.Router();
 const restaurantController = require('../controllers/restaurantController');
 
router.get('/hero-data', restaurantController.getHeroData);
 
 module.exports = router;
diff --git a/frontend/src/App.css b/frontend/src/App.css
index 2a3b4c5..6d7e8f9 100644
++ b/frontend/src/App.css
@@ -1,6 +1,12 @@
 .App {
   text-align: center;
 }
 
.HeroSection {
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
}

 .RestaurantList {
   display: flex;
   flex-wrap: wrap;
diff --git a/frontend/src/App.js b/frontend/src/App.js
index 3a4b5c6..7d8e9f0 100644
++ b/frontend/src/App.js
@@ -1,6 +1,7 @@
 import React, { useEffect, useState } from 'react';
 import './App.css';
import axios from 'axios';
 
 function App() {
   const [restaurants, setRestaurants] = useState([]);
@@ -8,6 +9,20 @@ function App() {
     fetch('/api/restaurants')
       .then(response => response.json())
       .then(data => setRestaurants(data));
  }, []);

  useEffect(() => {
    axios.get('/api/hero-data')
      .then(response => {
        console.log('Hero Data:', response.data);
        // Handle hero data
      })
      .catch(error => {
        console.error('Error fetching hero data:', error);
      });
  }, []);
 
   return (
     <div className="App">
@@ -16,6 +31,7 @@
       <h1>Restaurant Finder</h1>
       <ul>
         {restaurants.map(restaurant => (
           <li key={restaurant._id}>{restaurant.name}</li>
         ))}
        {/* Render Hero Section */}
       </ul>
     </div>
   );
 }
 
 export default App;
