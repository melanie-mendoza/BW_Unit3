import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function SignUp(props) {
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

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post('https://water-my-plants2020.herokuapp.com/api/users/register', data) 
        .then(result => {
            console.log(result.data)
        })
        .catch(err => {
            console.log(err)
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
            <h1 className='h-signup'>
                Great! Let's Get You Started!
            </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='User Name' value={data.username} onChange={handleChange} />
                <input type='phoneNumber' name='phoneNumber' placeholder='Phone Number' value={data.phoneNumber} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
                <Link to={'/users'} className='signup'>
                    <button type='submit'>Sign Up</button>
                </Link>
                
            </form> 
        </div>
    )
};

export default SignUp;