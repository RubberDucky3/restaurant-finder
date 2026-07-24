const Restaurant = require('../models/restaurant');

exports.getGlobalRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        if (!restaurants || restaurants.length === 0) {
            return res.status(404).json({ message: 'No global restaurants found' });
        }
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addGlobalRestaurant = async (req, res) => {
    const { name, location, cuisine } = req.body;
    if (!name || !location || !cuisine) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const restaurant = new Restaurant({
        name,
        location,
        cuisine
    });

    try {
        const newRestaurant = await restaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
diff --git a/backend/models/restaurant.js b/backend/models/restaurant.js
new file mode 100644
++ b/backend/models/restaurant.js
@@ -0,0 +1,23 @@
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
new file mode 100644
++ b/backend/routes/restaurantRoutes.js
@@ -0,0 +1,23 @@
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/global', restaurantController.getGlobalRestaurants);
router.post('/', restaurantController.addGlobalRestaurant);

module.exports = router;
diff --git a/backend/server.js b/backend/server.js
index 0a1b2c3..4d5e6f7 100644
++ b/backend/server.js
@@ -1,5 +1,6 @@
 const express = require('express');
const restaurantRoutes = require('./routes/restaurantRoutes');
 const app = express();
 const port = process.env.PORT || 3000;
 
@@ -8,4 +9,5 @@ app.use(express.json());
 
 // Define routes
 app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/restaurants', restaurantRoutes);
 
 app.listen(port, () => console.log(`Server running on port ${port}`));
