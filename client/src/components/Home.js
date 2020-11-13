import React from 'react';
import { Link } from 'react-router-dom';

import { getToken } from '../utils/axiosWithAuth';

import HomePlants from '../homePlants.jpg';

function Home() {
    const loggedIn = getToken()

    return(
        <div className='home'>
            <nav className='nav'>
                <Link to={'/'} className='home-nav'>Home</Link>
                <Link to={'/signup'} className='signup'>Sign Up</Link>
                {loggedIn && <Link to={'/profile'} className='profile'>Profile</Link>}
                {!loggedIn && <Link to={'/login'} className='login'>Login</Link>}
                {loggedIn && <Link to={'/logout'} className='logout'>Logout</Link>}
                {loggedIn && <Link to={'/plantsList'} className='plantsList'>My Plants</Link>}
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
            </nav>
            <div className='header'>
                <h1>Water My Plants</h1>
                <img src={HomePlants} alt='A home plant' /> 
                <p>Ensuring that all your plants are consistently watered is actually pretty difficult. <br></br> Water My Plants is an app that helps to solve those problems
                with an easy to use <br></br>interface for creating a plant watering schedule tailored to each individual plant.</p>
                
            </div>    
        </div>
    )
}

export default Home;