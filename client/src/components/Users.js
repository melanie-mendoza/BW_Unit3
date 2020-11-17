import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then(result => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='profile'>
      <nav className='nav'>
        <Link to={'/'} className='home-nav'>Home</Link>
        <Link to={'/plants'} className='plantsList'>My Plants</Link>
        <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
        <Link to={'/logout'} className='logout'>Logout</Link>
      </nav>
      <h1> Users </h1>
      <div>
        {users.map(user => (
          <div key={user.id} className='profile-card'>
            <div className='delete'>Delete</div>
            <div>Username: {user.username}</div>
            <div>Phone Number: {user.phoneNumber}</div>
            <Link className='update-user' to={`/users/${user.id}`}>Edit</Link> 
          </div>
        ))}
      </div>  
    </div>
  );
}