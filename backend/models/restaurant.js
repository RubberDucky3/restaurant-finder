@@ -10,6 +10,8 @@ const restaurantSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
    },
    phoneNumber: {
        type: String,
        required: true
     },
     address: {
         type: String,
@@ -20,6 +24,8 @@ const restaurantSchema = new mongoose.Schema({
     city: {
         type: String,
         required: true
    },
    coordinates: {
        type: [Number],
        required: true,
        validate: {
            validator: (v) => v.length === 2 && typeof v[0] === 'number' && typeof v[1] === 'number',
            message: 'Coordinates must be an array of two numbers'
        }
     },
     cuisine: {
         type: String,
