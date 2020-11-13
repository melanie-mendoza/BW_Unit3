import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

// make get request to fetch data from api and render to page
// have a button to update profile

function Login(props) {
    // state for error handling
    const [error, setError] = useState()

    // state for data
    const [data, setData] = useState({
        username: '',
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
        .post('/login', data) // sends a post request to the server and send data to the login endpoint
        .then(result => {
            console.log(result.data)
            localStorage.setItem('token', result.data.token) // store token from API call in localStorage
            props.history.push('/profile') // redirects the user to Profile page once logged in.
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
            <p className='login-p'>
                Login To Your Account
            </p>
            <form onSubmit={handleSubmit}>
                {error && <div className='error'>{error}</div>}  
                <input type='text' name='username' placeholder='User Name' value={data.username} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
            </form>
            <button type='submit'>Login</button>
        </div>
    )
};

export default Login;