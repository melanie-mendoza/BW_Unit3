import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function Login(props) {
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

    // handleSubmit function  & where post request will be made.
    const handleSubmit = (event) => {
        event.preventDefault()

        axiosWithAuth()
        .post('/users/login', data) // sends a post request to the server and send data to the login endpoint
        .then(result => {
            console.log(result.data)
            localStorage.setItem('token', result.data.token) // store token from API call in localStorage
            props.history.push('/users') // redirects the user to Profile page once logged in.
        })
        .catch(err => {
            console.log(console.error)
        })
    }

    return (
        <div>
            <nav className='nav'>
                <Link to={'/'} className='signup'>Home</Link>
                <Link to={'/signup'} className='signup'>Sign Up</Link>
                <Link to={'/users'} className='profile'>Users</Link>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/plants'} className='plantsList'>My Plants</Link>
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
            </nav>
            <h1 className='login-p'>
                Login To Your Account
            </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='User Name' value={data.username} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
                <Link to={'/users'} className='login'>
                    <button type='submit'>LOGIN</button>
                </Link>
            </form>   
        </div>
    )
};

export default Login;