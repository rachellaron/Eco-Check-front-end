import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './NavBar.css';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';

function NavBar() {

    const About = () => <h2>About</h2>;

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">

                    <i className="fas fa-recycle"></i>
                    <h2 className="eco-name">Eco</h2>
                    <h2 className="check-name">Check</h2>

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
                            <Link to='/' className='nav-links'>
                                Help
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route path="/about" component={About} />

            {/* // Switch, Route, Link */}

        </div>
    )
}

export default NavBar
