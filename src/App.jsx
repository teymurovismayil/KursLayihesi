import { useState } from 'react'
import './App.css'
import './App.scss'
import Layout from './Componentss/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Outwear from './Pages/Outwear'
import ProductsSale from './Pages/ProductsSale'
import Register from './Pages/Auth/SignUp/Register'
import Profile from './Pages/Profile'
import TrendingProductSale from './Pages/TrendingProductSale'
import Signin from './Pages/Auth/SignIn/Signin'
import Basket from './Pages/Basket'
import Privacy from './Pages/Privacy'
import Exchanges from './Pages/Exchanges'
import Shipping from './Pages/Shipping'
import Conditions from './Pages/Conditions'
import Wishlist from './Pages/Wishlist'
import Dress from './Pages/Dress'
import Jacket from './Pages/Jacket'
import Edit from './Pages/AdminPanel/Edit'
import AdminPanel from './Pages/AdminPanel/AdminPanel'
import Users from './Pages/AdminPanel/Users'
import Trousers from './Pages/Trousers'
import Admin_products from './Pages/AdminPanel/Admin_products'
import Dashboard from './Pages/AdminPanel/Dashboard'
import Add from './Pages/AdminPanel/Add'
import All from './Pages/All'
import Buy from './Pages/Buy'



function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route  element={<Outwear />} path='/outwear' />
          <Route  element={<ProductsSale />} path='/productsSale/:id' />
          <Route  element={<TrendingProductSale />} path='/trendingProductSale/:id' />
          <Route  element={<Register />} path='/register' />
          <Route  element={<Profile />} path='/profile/' />
          <Route  element={<Signin />} path='/signin' />
          <Route  element={<Basket />} path='/basket' />
          <Route  element={<Privacy />} path='/privacy' />
          <Route  element={<Exchanges />} path='/Exchanges' />
          <Route  element={<Shipping />} path='/Shipping' />
          <Route  element={<Conditions />} path='/Conditions' />
          <Route  element={<Wishlist />} path='/Wishlist' />
          <Route  element={<Dress />} path='/dress' />
          <Route  element={<Jacket />} path='/jacket' />
          <Route  element={<Trousers />} path='/trousers' />
          <Route  element={<All />} path='/all' />
          <Route  element={<Buy />} path='/buy' />
        </Route>
        <Route element={<AdminPanel/>} path='/moderator'></Route>
        <Route  element={<Users />} path='/users' />
        <Route  element={<Edit />} path='/edit/:id' />
        <Route  element={<Admin_products />} path='/admin_products'/>
        <Route  element={<Dashboard />} path='/dashboard'/>
        <Route  element={<Add />} path='/add'/>  
      </Routes>

    </>
  )
}

export default App
