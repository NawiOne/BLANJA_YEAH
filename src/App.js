import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth';
import ConfirmationPassword from './pages/ConfirmationPassword';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* <Route path='/' component={Home} /> */}
      {/* <Route path='/' component={Auth} /> */}
      <Route path='/Confirmation-password' component={ConfirmationPassword} />
    </Router>
  );
}

export default App;
