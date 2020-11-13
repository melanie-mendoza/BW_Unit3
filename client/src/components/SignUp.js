import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


function SignUp(props) {
    // state for error handling
    const [error, setError] = useState()

    // state for data
    const [data, setData] = useState({
        username: '',
        phoneNumber: '',
        password: '',
    })

    // handleChange function to control inputs
    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    // define a handleSubmit function that takes an event & where axios call will be made.
    const handleSubmit = (event) => {
        event.preventDefault()
        axiosWithAuth()
        .post('/signup', data) // sends a post request to the server and sends data to the signin endpoint
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
                Sign Up
            </p>
            <form onSubmit={handleSubmit}>
                {error && <div className='error'>{error}</div>}  
                <input type='text' name='username' placeholder='User Name' value={data.username} onChange={handleChange} />
                <input type='phoneNumber' name='phoneNumber' placeholder='Phone Number' value={data.phoneNumber} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
            </form>
            <button type='submit'>Sign Up</button>
        </div>
    )
};

export default SignUp;