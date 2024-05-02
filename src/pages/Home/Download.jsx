import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reactnavbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Download() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakerapi.it/api/v1/images?_width=380`);
      setResponseData(response.data.data);
      setError(null);
    } catch (error) {
      setResponseData([]);
      setError('Error fetching data');
    }
  };

  const handleDownloadVcard = () => {
    window.location.href = "https://bucket-egxu.onrender.com/api/v1/download";
  };

  return (
    <>
    
      <div>
        <div className="container">
          <button className="btn btn-primary" onClick={handleDownloadVcard}>
            Download Vcard
          </button>
          <div>
            <button className=' btn bg-primary' onClick={fetchData}>Fetch Data</button>
            {responseData.length > 0 && (
              <div>
                <h2>Response Data:</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.status}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Download;