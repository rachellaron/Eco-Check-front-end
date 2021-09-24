import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EcoInfo from './components/EcoInfo';
import NavBar from './components/NavBar';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import TipsToggle from './components/LableTips';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header />
        <SearchBar />
        <TipsToggle />
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
