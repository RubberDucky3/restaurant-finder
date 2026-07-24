 import React, { useState } from 'react';
import GoogleMapReact from 'google-maps-react';
 
 const RegistrationForm = () => {
   const [name, setName] = useState('');
@@ -10,6 +12,18 @@ const RegistrationForm = () => {
     setEmail(e.target.value);
   };
 
  const handleMapChange = (map, maps) => {
    // Handle map change
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChange={handleMapChange}
      >
      </GoogleMapReact>
    </div>
  );
 };
 
 export default RegistrationForm;
