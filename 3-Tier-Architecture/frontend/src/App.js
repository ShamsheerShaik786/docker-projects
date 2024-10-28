import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://backend:5000/api/message')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <h1>Frontend - React</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
