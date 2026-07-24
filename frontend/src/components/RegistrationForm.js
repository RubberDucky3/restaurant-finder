 import React, { useState } from 'react';
 import axios from 'axios';
import jwtDecode from 'jwt-decode';

 const RegistrationForm = () => {
   const [email, setEmail] = useState('');
@@ -20,6 +21,14 @@ const RegistrationForm = () => {
     .then(response => {
       console.log('User registered successfully:', response.data);
      // Handle successful registration
      localStorage.setItem('token', response.data.token);
      const decodedToken = jwtDecode(response.data.token);
      if (decodedToken.exp < Date.now() / 1000) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
      } else {
        // Redirect to protected route
        window.location.href = '/protected';
      }
     })
     .catch(error => {
       console.error('Error registering user:', error);
