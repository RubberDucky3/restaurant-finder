@@ -10,6 +10,8 @@ const userSchema = new mongoose.Schema({
   email: {
     type: String,
     required: true,
    unique: true,
     validate: {
       validator: (value) => isEmail(value),
       message: 'Invalid email format',
@@
