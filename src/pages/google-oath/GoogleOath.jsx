import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import MyComponent from '../axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/navbar';

function GoogleOath() {
    const [myObject, setMyObject] = useState(null);
  const [credentialResponseDecoded, setCredentialResponseDecoded] = useState(null);

  useEffect(() => {
    // You need to replace fetchData with the actual function that fetches data
    // fetchData()
    //   .then(data => setMyObject(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
       <>
 
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log(decoded);
          setCredentialResponseDecoded(decoded);
         
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />


      {credentialResponseDecoded && (
        <>
         <div  > <p>Hello! <h3> {credentialResponseDecoded.name} </h3></p>
          <p>Email: {credentialResponseDecoded.email}</p>
          <p>Name: {credentialResponseDecoded.family_name}</p>
          </div>
        
          {/* Display other information from the decoded token */}
        </>
      )}
    </>
    </div>
  )
}

export default GoogleOath
