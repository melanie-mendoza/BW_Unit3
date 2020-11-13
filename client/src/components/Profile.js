import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function Profile(props) {
  const [user, setUser] = useState({
    username: '',
    phoneNumber: '',
  });

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then((result) => {
        setUser({
          username: result.data.username,
          phoneNumber: result.data.phoneNumber,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <div className="profile">
      <nav className='nav'>
        <Link to={'/'} className='signup'>Home</Link>
        <Link to={'/signup'} className='signup'>Sign Up</Link>
        <Link to={'/profile'} className='profile'>Profile</Link>
        <Link to={'/login'} className='login'>Login</Link>
        <Link to={'/plantsList'} className='plantsList'>My Plants</Link>
        <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
      </nav>
      <h1>My Profile</h1>
      <div>
        <h3 className='profile-row'>Username: {user.name}</h3>
        <h3 className='profile-row'>Phone Number: {user.phoneNumber}</h3>
      </div>
      <Link to={'/updateProfile'} className='updateProfile'>Update Profile</Link>
    </div>
  );

}