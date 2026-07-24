@@ -31,7 +31,25 @@ exports.createRestaurant = async (req, res) => {
     try {
         const restaurant = new Restaurant(req.body);
         await restaurant.save();
        res.status(201).json({ message: 'Restaurant created successfully', restaurant });
     } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Validation failed', errors: error.errors });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
     }
 };

@@ -52,7 +60,13 @@ exports.getRestaurantById = async (req, res) => {
         const restaurant = await Restaurant.findById(req.params.id);
         if (!restaurant) {
            res.status(404).json({ message: 'Restaurant not found with id ' + req.params.id });
         } else {
            res.json({ message: 'Restaurant retrieved successfully', restaurant });
         }
     } catch (error) {
        if (error.kind === 'ObjectId') {
            res.status(404).json({ message: 'Invalid Restaurant ID' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
     }
 };
