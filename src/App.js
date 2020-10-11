import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      {/* <Route path='/' component={Home} /> */}
      <Profile/>
    </Router>
  );
}

export default App;
