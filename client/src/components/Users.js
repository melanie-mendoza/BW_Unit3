import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://water-my-plants2020.herokuapp.com/api/users')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
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
        {users.map(user => {
          return (
            <UserCard
              id={user.id}
              username={user.username}
              phoneNumber={user.phoneNumber}
            />
          );
        })}
      </div> 
      
    </div>
  );
  
}