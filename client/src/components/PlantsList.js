// implement a plantslist component that displays a list of plants, 
// makes a get request to the endpoint & adds a link to the navigation.
// It will loop over the plants, instead of display an individual one.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/plants')
      .then((result) => {
        setPlants(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault()

    setPlants(plants.filter(plant => plant.id !== id)) // user will get immediate feedback that plant was deleted, don't have to wait for API endpoint to resolve (OPTIMISTIC UPDATE)

    axiosWithAuth()
      .delete(`/plants/${id}`)
      .then(result => {
        console.log('Plant was deleted.')
        
      })
      .catch(error => {
        console.log(error)
      })
  }

  
  return (
    <div className='plants'>
        <nav className='nav'>
                <Link to={'/'} className='signup'>Home</Link>
                <Link to={'/signup'} className='signup'>Sign Up</Link>
                <Link to={'/profile'} className='profile'>Profile</Link>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/plantsList'} className='plantsList'>My Plants</Link>
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
        </nav>
        <div>
            <h1> My Plants </h1>

            {plants.map((plant) => {
                <div key={plant.id} className='plants'>
                  <Link className='plant-update' to={`/plants/${plant.id}`}>Edit</Link>
                  <div className='plant-delete' onClick={(e) => handleDelete(e, plant.id)}>Delete</div>

                  <div className='plants-row'>Nickname: {plant.nickName}</div>
                  <div className='plants-row'>Species: {plant.species}</div>
                  <div className='plants-row'>Water Frequency: {plant.waterFrequency}</div>
                </div>
            })}
        </div>
        
    </div>
  );

}