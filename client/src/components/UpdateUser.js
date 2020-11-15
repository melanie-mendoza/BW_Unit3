
import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


function UpdateUser(props) {
    // state for error handling
    // const [error, setError] = useState()

    // state for user
    const [user, setUser] = useState({
        id: '',
        username: '',
        phoneNumber: '',
    })

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios
            .get(`https://water-my-plants2020.herokuapp.com/api/users/${id}`)
            .then(result => {
                setUser(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    // handleChange function to control inputs
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }

    // handleSubmit function that takes an event & where put request will be made.
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(user)
        axios
        .put(`https://water-my-plants2020.herokuapp.com/api/users/${id}`, user) // sends a post request to the server and sends data to the signin endpoint
        .then(result => {
              props.setUsers(result.data);
              push('/users')   
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
                <Link to={'/users'} className='profile'>Profile</Link>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/plants'} className='plantsList'>My Plants</Link>
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
            </nav>
            <h1 className='h-update-profile'>
                Update User
            </h1>
            <form onSubmit={handleSubmit}>
                {/* {error && <div className='error'>{error}</div>}   */}
                <input type='text' name='username' placeholder='User Name' value={user.username} onChange={handleChange} />
                <input type='text' name='phoneNumber' placeholder='Phone Number' value={user.phoneNumber} onChange={handleChange} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
};

export default UpdateUser;