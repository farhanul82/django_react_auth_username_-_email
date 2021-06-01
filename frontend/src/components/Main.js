import Axios from 'axios'
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CartPage from './components/CartPage'
import CategoriProduct from './components/CategoriProduct'
import HomePage from './components/HomePage'
import Layout from "../hocs/Layout";
import Login from './components/Login'
import NavBar from './components/NavBar'
import Oldorders from './components/Oldorders'
import OldordersDetails from './components/OldordersDetails'
import Order from './components/Order'
import ProductDetails from './components/ProductDetails'
import Profile from './components/Profile'
import Register from './components/Register'
import { domain } from './env'
import { useGlobalState } from './state/provider'
import { useSelector, useDispatch } from "react-redux";
import {  load_user } from "../Redux/Action/auth";

const Main = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {

      dispatch(load_user());
    }, []);

  return (
    <BrowserRouter>
     <Layout>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/product/:id' component={ProductDetails} />
        <Route exact path='/categori/:id' component={CategoriProduct} />

              <Route exact path='/profile' component={Profile} />
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/order' component={Order} />
              <Route exact path='/oldorders' component={Oldorders} />
              <Route exact path='/oldorders/:id' component={OldordersDetails} />

                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />


        <Route exact component={HomePage} />
      </Switch>
      </Layout>
    </BrowserRouter>

  )
}


export default Main