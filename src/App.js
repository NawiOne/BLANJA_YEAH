import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
// import Profile from './pages/Profile';
import PageProduct from './pages/page-product/pageProduct';

function App() {
  return (
    <Router>
//       <Profile/>
      <Route path='/' exact component={Home} />
      <Route path='/product' component={PageProduct} />
    </Router>
  );
}

export default App;
