import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PlantsList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get('https://water-my-plants2020.herokuapp.com/api/plants')
      .then(response => {
        console.log(response.data);
        setPlants(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='plants-list'>
      <nav className='nav'>
        <Link to={'/'} className='signup'>Home</Link>
        <Link to={'/users'} className='profile'>Profile</Link>
        <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
        <Link to={'/logout'} className='logout'>Logout</Link>
      </nav>
      <h1> My Plants </h1>
      <div>
        {plants.map(plant => (
          <div key={plant.id} className='plant-card'>
          <div className='delete'>Delete</div>
          <div>Username: {plant.nickname}</div>
          <div>Phone Number: {plant.species}</div>
          <Link className='update-user' to={`/users/${plant.id}`}>Edit</Link> 
        </div>
        ))}
      </div>
    </div>
  );

}