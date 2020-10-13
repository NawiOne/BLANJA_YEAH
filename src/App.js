import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth';
import ConfirmationPassword from './pages/ConfirmationPassword';

import Home from './pages/Home';
// import Profile from './pages/Profile';
import PageProduct from './pages/page-product/pageProduct';

function App() {
  return (
    <Router>
      <Route path='/Confirmation-password' component={ConfirmationPassword} />

      <Profile/>
      <Route path='/' exact component={Home} />
      <Route path='/product' component={PageProduct} />
    </Router>
  );
}

export default App;
