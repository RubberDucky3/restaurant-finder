 const Restaurant = require('../models/restaurant');
 
 const getHeroData = async (req, res) => {
  try {
     const stats = await Restaurant.aggregate([
       // Add aggregation pipeline to fetch live stats
       { $group: { _id: null, totalRestaurants: { $sum: 1 }, averageRating: { $avg: '$rating' } } }
@@ -9,6 +10,8 @@
     res.json(stats);
   } catch (error) {
     res.status(500).json({ error: 'Failed to fetch hero data' });
  }
 };
 
 module.exports = {
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
index 4a5b6c7..8d9e0f1 100644
++ b/backend/routes/restaurantRoutes.js
@@ -2,6 +2,7 @@
 const express = require('express');
 const router = express.Router();
 const restaurantController = require('../controllers/restaurantController');
 
 router.get('/hero-data', restaurantController.getHeroData);
 
 module.exports = router;
diff --git a/frontend/src/App.css b/frontend/src/App.css
index 1a2b3c4..5d6e7f8 100644
++ b/frontend/src/App.css
@@ -1,6 +1,7 @@
 .App {
   text-align: center;
 }
 
.HeroSection {
   background-color: #f8f9fa;
   padding: 2rem;
 }
diff --git a/frontend/src/components/HeroSection.js b/frontend/src/components/HeroSection.js
new file mode 100644
index 0000000..a1b2c3d
++ b/frontend/src/components/HeroSection.js
@@ -0,0 +1,25 @@
import React from 'react';

const HeroSection = ({ stats }) => {
  if (!stats) return <div>Loading...</div>;

  return (
    <section className="HeroSection">
      <h1>Welcome to GourmetPulse</h1>
      <p>Total Restaurants: {stats.totalRestaurants}</p>
      <p>Average Rating: {stats.averageRating.toFixed(2)}</p>
    </section>
  );
};

export default HeroSection;
diff --git a/frontend/src/App.js b/frontend/src/App.js
index 1a2b3c4..5d6e7f8 100644
++ b/frontend/src/App.js
@@ -1,6 +1,7 @@
 import React, { useState, useEffect } from 'react';
 import './App.css';
import HeroSection from './components/HeroSection';
 
 function App() {
   const [stats, setStats] = useState(null);
@@ -8,6 +9,10 @@ function App() {
     fetch('/api/hero-data')
       .then(response => response.json())
       .then(data => setStats(data))
      .catch(error => console.error('Error fetching hero data:', error));
   }, []);
 
   return (
@@ -15,6 +20,8 @@
       <header className="App-header">
         <h1>GourmetPulse</h1>
       </header>
      {stats && <HeroSection stats={stats} />}
     </div>
   );
 }
