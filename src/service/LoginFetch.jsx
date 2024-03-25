import { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000/api';

const LoginFetch = (credentials) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const login = async (credentials) => {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    login(credentials);

    return () => {

    };
  }, [credentials]);

  return { data };
}

export default LoginFetch;
