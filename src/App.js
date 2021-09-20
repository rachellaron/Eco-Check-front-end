import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import EcoInfo from './components/EcoInfo';
import NavBar from './components/NavBar';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import TipsToggle from './components/LableTips';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <NavBar />
          <Header/>
          <SearchBar />
          <TipsToggle/>
          {/* <EcoInfo /> */}
          
        </Router>
      </div>
    </div>
  );
}

export default App;
