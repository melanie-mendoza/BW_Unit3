// Updates plant
// 1. create a route that takes into account an id from the url using a route parameter(in App.js)

import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function UpdatePlant(props) {
    // state for error handling
    const [error, setError] = useState()

    // state for data
    const [plant, setPlant] = useState({
        id: '',
        nickName: '',
        species: '',
        waterFrequency: '',
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`/plants/${props.match.params.id}`)
        .then(result => {
            setPlant(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [props.match.params.id])

    const handleChange = (event) => {
        setPlant({
            ...plant,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axiosWithAuth()
        .put(`/plants/${plant.id}`, plant)
        .then(result => {
            props.history.push('/plants')
        })
        .catch(error => {
            console.log(error)
        })
    }

  

   

    return (
        <div>
            <nav className='nav'>
                <Link to={'/'} className='signup'>Home</Link>
                <Link to={'/signup'} className='signup'>Sign Up</Link>
                <Link to={'/profile'} className='profile'>Profile</Link>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/plantsList'} className='plantsList'>My Plants</Link>
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
            </nav>
            <p>
                Update Plant
            </p>
            <form onSubmit={handleSubmit}> 
                {error && <div className='error'>{error}</div>}  
                <input type='text' name='nickName' placeholder='Nickname' value={plant.nickName} onChange={handleChange} />
                <input type='text' name='species' placeholder='Species' value={plant.species} onChange={handleChange}  />
                <input type='text' name='waterFrequency' placeholder='Water Frequency' value={plant.waterFrequency} onChange={handleChange} />
            </form>
            <button type='submit'>Save</button>
            
        </div>
    )
};

export default UpdatePlant;