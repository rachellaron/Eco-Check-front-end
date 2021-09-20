import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {

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
                            <Link to='/' className='nav-links'>
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

        </div>
    )
}

export default NavBar
