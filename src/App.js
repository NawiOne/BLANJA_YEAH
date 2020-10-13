import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import PageProduct from './pages/page-product/pageProduct';
import CategoryPage from './pages/category-page/categoryPage';
import Checkout from './pages/checkout/checkout';
import Chat from './pages/chatting/chatting';



function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/product' exact component={PageProduct} />
      <Route path='/category' exact component={CategoryPage} />
      <Route path='/checkout' exact component={Checkout} />
      <Route path='/chat' exact component={Chat} />
    </Router>
  );
}

export default App;
