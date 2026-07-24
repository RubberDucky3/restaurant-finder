 import React, { useState } from 'react';
 
 const RegistrationForm = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
 
   const handleSubmit = (event) => {
     event.preventDefault();
@@ -20,6 +21,14 @@ const RegistrationForm = () => {
       // Handle form submission
     });
   };

  const fetchRestaurantDetails = async (restaurantId) => {
    try {
      const response = await fetch(`/api/restaurants/${restaurantId}`);
      const data = await response.json();
      setRestaurantDetails(data);
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  };
 
   return (
     <form onSubmit={handleSubmit}>
@@ -30,6 +49,12 @@ const RegistrationForm = () => {
       <button type="submit">Submit</button>
     </form>
   );

  if (restaurantDetails) {
    return (
      <div>
        <h1>{restaurantDetails.name}</h1>
        <p>{restaurantDetails.description}</p>
      </div>
    );
  }
 };
 
 export default RegistrationForm;
