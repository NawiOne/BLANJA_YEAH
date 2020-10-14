import React from 'react';
import {useSelector } from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import ConfirmationPassword from './pages/ConfirmationPassword';

import Home from './pages/Home';
import Profile from './pages/Profile';
import PageProduct from './pages/page-product/pageProduct';
import CategoryPage from './pages/category-page/categoryPage';
import Checkout from './pages/checkout/checkout';
import Chat from './pages/chatting/chatting';
import MyBag from './pages/my-bag/myBag';




function App() {
   const isLogin = useSelector((state)=>state.auth.isLogin)
  return (
    <Router>
      {isLogin ?
        <>
          <Route path='/' exact component={Home} />
          <Route path='/product' exact component={PageProduct} />
          <Route path='/category' exact component={CategoryPage} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/chat' exact component={Chat} />
          <Route path='/mybag' exact component={MyBag} />
          <Route path='/profile' exact component={Profile} />
        </>
        :
        <>
          <Route path='/' exact component={Auth} />
          <Route path='/confirmation-password' component={ConfirmationPassword} />
        </>
      }
    </Router>
  );
}

export default App;
