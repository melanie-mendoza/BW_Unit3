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

    // define a handleSubmit function that takes an event & where axios call will be made.
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post('https://water-my-plants2020.herokuapp.com/api/plants', newPlant) // sends a post request to the server and sends data to the signin endpoint
        .then(result => {
            console.log(result.data)
            localStorage.setItem('token', result.data.token) // store token from API call in localStorage
        })
        .catch(err => {
            setError(err.response.data)
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
                Add New Plant
            </p>
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