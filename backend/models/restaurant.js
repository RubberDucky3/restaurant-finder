const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cuisineType: {
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Restaurant extends Model {}

Restaurant.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuisine: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'restaurant'
});

module.exports = Restaurant;
diff --git a/backend/models/user.js b/backend/models/user.js
new file mode 100644
index 0000000..e4b9c8d
++ b/backend/models/user.js
@@ -0,0 +1,23 @@
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user'
});

module.exports = User;
diff --git a/backend/config/database.js b/backend/config/database.js
new file mode 100644
index 0000000..e4b9c8d
++ b/backend/config/database.js
@@ -0,0 +1,12 @@
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
diff --git a/backend/index.js b/backend/index.js
new file mode 100644
index 0000000..e4b9c8d
++ b/backend/index.js
@@ -0,0 +1,7 @@
const express = require('express');
const sequelize = require('./config/database');

const app = express();

sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch((error) => {
  console.error('Error creating database & tables:', error);
});
diff --git a/backend/package.json b/backend/package.json
index e6b9c8d..e4b9c8d 100644
++ b/backend/package.json
@@ -1,5 +1,7 @@
 {
   "name": "restaurant-finder",
   "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "sequelize": "^6.3.5"
  }
 }
