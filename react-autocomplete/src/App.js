import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data)
    }
    loadUsers();
  }, [])
  return (
    <div className="App">
      <input type="text" />
    </div>
  );
}

export default App;
