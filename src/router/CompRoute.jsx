import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'
import Header from '../component/Header'
import HeaderNav from '../component/Header.nav'
import Footer from '../component/Footer'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import CartDetails from '../pages/cart/CartDetails'
import Checkout from '../pages/cart/Checkout'
import Auth from '../pages/admin/Auth'
import Profile from '../pages/admin/Profile'
import Product from '../pages/admin/Product/Product'
import AddOrEdit from '../pages/admin/Product/AddOrEdit'
import AdminCategory from '../pages/admin/category/Category'
import AddOrUpdate from '../pages/admin/category/AddOrEdit'
import Order from '../pages/admin/orders/Order'
import ViewOrder from '../pages/admin/orders/ViewOrder'
import User from '../pages/admin/users/User'
import AddUpdate from '../pages/admin/users/AddOrUpdate'
import Sidebar from '../pages/admin/sidebar/Sidebar'



const CompRoute = () => {
  return (
    <>
      <Header />
      <HeaderNav />
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/category' element={<Category />} />
        <Route path='/details' element={<Details />} />
        <Route path='/' element={<Home />} />

        <Route path='/admin' element={<Auth />}>
          <Route index={true} element={<Profile />} />
          <Route path='sidebar' element={<Sidebar />} />

          <Route path='product' element={<Product />} />
          <Route path='product/add' element={<AddOrEdit />} />
          <Route path='product/edit/:id' element={<AddOrEdit />} />
          
          <Route path='category' element={<AdminCategory />} />
          <Route path='category/add' element={< AddOrUpdate/>} />
          <Route path='product/edit/:id' element={<AddOrUpdate />} />
        
          <Route path='orders' element={<Order />} />
          <Route path='orders/:id' element={< ViewOrder/>} />

          <Route path='users' element={<User />} />
          <Route path='users/add' element={< AddUpdate/>} />
          <Route path='users/edit/:id' element={<AddUpdate />} />
        </Route>

      </Routes>
      <Footer />
    </>
  )
}

export default CompRoute


