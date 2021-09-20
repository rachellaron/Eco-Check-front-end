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

                <button className="lets_recycle_btn">Let's Recycle</button>
                <button className="learn_more">Learn More</button>

                <div className="sharewaste">
                    <h3>ShareWaste | Give your waste a second chance!</h3>
                </div>




            </div>

        </div>
    )
}

export default Header
