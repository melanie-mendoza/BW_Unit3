import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function AddNewPlant(props) {
    // state for error handling
    const [error, setError] = useState()

    // state for data
    const [newPlant, setNewPlant] = useState({
        nickName: '',
        species: '',
        waterFrequency: '',
    })

    // handleChange function to control inputs
    const handleChange = (event) => {
        setNewPlant({
            ...newPlant,
            [event.target.name]: event.target.value,
        })
    }

    // handleSubmit function that takes an event & where post request will be made.
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post('https://water-my-plants2020.herokuapp.com/api/plants', newPlant) 
        .then(result => {
            console.log(result.data)
            localStorage.setItem('token', result.data.token) 
        })
        .catch(err => {
            setError(err.response.data)
        })
    }

    return (
        <div>
            <nav className='nav'>
                <Link to={'/'} className='signup'>Home</Link>
                <Link to={'/profile'} className='profile'>Profile</Link>
                <Link to={'/plantsList'} className='plantsList'>My Plants</Link>
                <Link to={'/logout'} className='logout'>Logout</Link>
            </nav>
            <h1 className='h-add-plant'>
                Add New Plant
            </h1>
            <form onSubmit={handleSubmit}>
                {error && <div className='error'>{error}</div>}  
                <input type='text' name='nickName' placeholder='Nickname' value={newPlant.nickName} onChange={handleChange} />
                <input type='text' name='species' placeholder='Species' value={newPlant.species} onChange={handleChange} />
                <input type='text' name='waterFrequency' placeholder='Water Frequency' value={newPlant.waterFrequency} onChange={handleChange} />
            </form>
            <button type='submit'>Add New Plant</button>
        </div>
    )
};

export default AddNewPlant;