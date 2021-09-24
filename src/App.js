import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import TipsToggle from './components/LableTips';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBar />
            <TipsToggle />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
