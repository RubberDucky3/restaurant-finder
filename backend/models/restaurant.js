const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  cuisine: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
diff --git a/backend/models/user.js b/backend/models/user.js
new file mode 100644
++ b/backend/models/user.js
@@ -0,0 +1,25 @@
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
