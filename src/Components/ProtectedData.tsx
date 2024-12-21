// src/components/ProtectedData.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ProtectedData() {
  const token = useSelector((state) => state.auth.token);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/protected_route', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error('Failed to fetch protected data');
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Protected Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default ProtectedData;
