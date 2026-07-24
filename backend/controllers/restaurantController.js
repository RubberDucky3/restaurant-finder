const Restaurant = require('../models/restaurant');

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
diff --git a/backend/controllers/userController.js b/backend/controllers/userController.js
new file mode 100644
index 0000000..e4b9c3d
++ b/backend/controllers/userController.js
@@ -0,0 +1,27 @@
const User = require('../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
diff --git a/backend/routes/restaurantRoutes.js b/backend/routes/restaurantRoutes.js
new file mode 100644
index 0000000..e4b9c3d
++ b/backend/routes/restaurantRoutes.js
@@ -0,0 +1,27 @@
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getRestaurants);
router.get('/:id', restaurantController.getRestaurantById);

module.exports = router;
diff --git a/backend/routes/userRoutes.js b/backend/routes/userRoutes.js
new file mode 100644
index 0000000..e4b9c3d
++ b/backend/routes/userRoutes.js
@@ -0,0 +1,27 @@
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
diff --git a/backend/server.js b/backend/server.js
index 0000000..e4b9c3d
++ b/backend/server.js
@@ -0,0 +1,27 @@
const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(express.json());
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
diff --git a/backend/package.json b/backend/package.json
index 0000000..e4b9c3d
++ b/backend/package.json
@@ -0,0 +1,27 @@
{
  "name": "restaurant-finder-backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.12.3"
  }
}
