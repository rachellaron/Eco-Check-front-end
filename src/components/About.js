import React from 'react';
import './About.css';
import './NavBar.css';

const About = () => {
    return (
        <div>
            <div className="about">
                <h1>About US</h1>
                <p className='info'>
                    <h3>Recycling is <b>hard</b> and it <b> shouldn't be</b>.</h3>
                    <p><b>EcoCheck</b> is a application where an user can find products easily and how to dispose of them without a hassel of a sign up or sign in.</p>
                    <p> All you have to do is search by Product Name or Recycle Key and our in-depth database will tell you how to dispose of your chosen product</p>
                    <br></br>
                    <p><i>Need some more help?</i></p>
                    <p><b><a href="https://www.sustainability.vic.gov.au/" target="_blank">Click Here</a></b> to learn more about Sustaibility in Victoria.</p></p>
            </div>
        </div>
    );
}

export default About;