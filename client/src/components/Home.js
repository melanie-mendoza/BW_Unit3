import React from 'react';
import { Link } from 'react-router-dom';

//import { getToken } from '../utils/axiosWithAuth';

import Water from '../water.png';

function Home() {
    //const loggedIn = getToken()

    return(
        <div className='home'>
            <nav className='nav'>
                <Link to={'/'} className='home-nav'>Home</Link>
                <Link to={'/users'} className='profile'>Profile</Link>
                <Link to={'/plants'} className='plantsList'>My Plants</Link>
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
                <Link to={'/login'} className='login'>Login</Link> 
                <Link to={'/signup'} className='signup'>Sign Up</Link>      
            </nav>
            <div className='header'>
                <h1>WATER MY PLANTS</h1>
                <p>Helping you keep your plants stay alive.</p>
                
                <Link to={'/signup'} className='signup'>
                  <img src={Water} alt='A water splash' className='home-signup' />  
                </Link>
            </div>  
         
        </div>
    )
}

export default Home;