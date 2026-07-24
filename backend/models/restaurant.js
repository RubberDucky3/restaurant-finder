@@ -10,6 +10,9 @@ const restaurantSchema = new mongoose.Schema({
   address: {
     type: String,
     required: true
  },
  phoneNumber: {
    type: String,
     validate: {
       validator: function(v) {
         return /\d{3}-\d{3}-\d{4}/.test(v);
@@ -20,6 +23,9 @@ const restaurantSchema = new mongoose.Schema({
   },
   coordinates: {
     type: [Number],
    validate: {
      validator: function(v) {
        return v.length === 2 && typeof v[0] === 'number' && typeof v[1] === 'number';
      },
       message: 'Coordinates must be an array of two numbers'
     }
   }
diff --git a/backend/models/user.js b/backend/models/user.js
index 9a8b7c6..f5e4d32 100644
++ b/backend/models/user.js
@@ -10,6 +10,9 @@ const userSchema = new mongoose.Schema({
   email: {
     type: String,
     required: true,
  },
  phoneNumber: {
    type: String,
     validate: {
       validator: function(v) {
         return /\d{3}-\d{3}-\d{4}/.test(v);
@@ -20,6 +23,9 @@ const userSchema = new mongoose.Schema({
   },
   coordinates: {
     type: [Number],
    validate: {
      validator: function(v) {
        return v.length === 2 && typeof v[0] === 'number' && typeof v[1] === 'number';
      },
       message: 'Coordinates must be an array of two numbers'
     }
   }
