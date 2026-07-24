 import React, { useState } from 'react';
 
 const RegistrationForm = () => {
   const [formData, setFormData] = useState({
     username: '',
     email: '',
     password: ''
   });
 
  const [restaurants, setRestaurants] = useState([]);
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurants');
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleFilterChange = (event) => {
    setCuisineFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

   const handleChange = (event) => {
     setFormData({
       ...formData,
       [event.target.name]: event.target.value
     });
   };
 
   const handleSubmit = async (event) => {
     event.preventDefault();
     try {
       const response = await fetch('/api/users', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
       });
       if (response.ok) {
         alert('Registration successful!');
       } else {
         alert('Registration failed.');
       }
     } catch (error) {
       console.error('Error registering user:', error);
     }
   };
 
  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase()) &&
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

   return (
     <div>
       <h2>Registration Form</h2>
       <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username:</label>
         <input
           type="text"
           id="username"
           name="username"
           value={formData.username}
           onChange={handleChange}
         />
         <br />
         <label htmlFor="email">Email:</label>
         <input
           type="email"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
         />
         <br />
         <label htmlFor="password">Password:</label>
         <input
           type="password"
           id="password"
           name="password"
           value={formData.password}
           onChange={handleChange}
         />
         <br />
         <button type="submit">Register</button>
       </form>
      <h2>Restaurant List</h2>
      <div>
        <input
          type="text"
          placeholder="Filter by cuisine"
          value={cuisineFilter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Search restaurants"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.cuisine}
          </li>
        ))}
      </ul>
     </div>
   );
 };
 
 export default RegistrationForm;
