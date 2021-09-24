import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import { Switch, Route, Link } from 'react-router-dom';
import About from './About';

function NavBar() {

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">

                    <i className="fas fa-recycle"></i>
                    <Link to='/' className="eco-name" ><h2 className="eco-name">Eco</h2></Link>
                    <Link to='/' className="check-name" ><h2 className="check-name">Check</h2></Link>

                    <ul className='nav-menu active'>
                        <li className="nav-item">
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links'>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.sustainability.vic.gov.au/" target="_blank" className='nav-links'>More Info</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
