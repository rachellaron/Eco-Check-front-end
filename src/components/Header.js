import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {

    return (
        <div>
            <div className="header">
                <h1>Because
                    <h1 id="Color_Text">RECYCLING</h1>
                    should be
                    <h1 id="Color_Text">EASY</h1>
                </h1>

                <button className="lets_recycle_btn">
                    <a href="#search">Let's Recycle</a></button>
                <button className="learn_more"><a href="https://www.sustainability.vic.gov.au/recycling-and-reducing-waste/at-home" target="_blank">Learn More</a></button>

                <div className="sharewaste">
                    <a href="https://sharewaste.com/" target="_blank"><h3>ShareWaste | Give your waste a second chance!</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Header
