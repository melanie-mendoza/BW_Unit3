import React from 'react';
import { Link } from 'react-router-dom';

import Water from '../water.png';

function Home() {

    return (
        <div className='home'>
            <nav className='nav'>
                <h1 className='header-logo'>WMP</h1>
                <Link to={'/'} className='home-nav'>Home</Link>
                <Link to={'/users'} className='profile'>Profile</Link>
                <Link to={'/plants'} className='plantsList'>My Plants</Link>
                <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
                <Link to={'/login'} className='login'>Login</Link> 
                <Link to={'/signup'} className='signup'>Sign Up</Link>      
            </nav>
            <div className='header'>
                <h1>Keep your plants alive.</h1>
                <h2>WATER MY PLANTS</h2>
                <Link to={'/signup'} className='signup'>
                  <img src={Water} alt='A water splash' className='home-signup' />  
                </Link>
            </div>  
            <footer>
                <div>Copyright Water My Plants 2020</div>
            </footer>
        </div>
    )
}

export default Home;