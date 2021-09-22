import { Component } from 'react';
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Aboutpage } from './About';

<div className="MainHeader">

  <nav className="navBar">
    <div id="logo">Logo</div>

    <header className="Header">EcoWatch</header>

    <div className="nav_links">

    <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

    <Route path="/about" component={Aboutpage} />
    </main>
</Router>




    {/* <Router>
      <a href="">Home</a>
      {/* <Link to="/About"> About </Link> */}
      {/* <a href="#About">About</a> */}
      {/* <a href="">Help</a>
      <a href="">Tips</a>
      <a href="">Contact</a>
      </Router> */} 
    </div>

  </nav>
</div>