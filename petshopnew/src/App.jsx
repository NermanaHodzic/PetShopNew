import { useState } from 'react'
import Home from './Home';
import React from 'react'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Header from './Header';
import Cart from './Pages/Cart'
import RegisterForm from './RegisterForm';
import ShopCategory from './Pages/ShopCategory';
import naslovna1 from './assets/macka_naslovna1.png';
import naslovna2 from './assets/pas_naslovna1.png';
import Psi from './Psi'
import Product from './Pages/Product'



function App() {
    return(
  <>
  <BrowserRouter>
  <Header></Header>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/registerform' element={<RegisterForm/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/psi' element={<ShopCategory banner={naslovna2} category="psi"/>}/>
  <Route path='/macke' element={<ShopCategory banner={naslovna1} category="macke"/>}/>
  <Route path="/psi" element={<Psi/>}/>
  <Route path="/product" element={<Product/>}>
  <Route path=":productId" element={<Product/>}/>
  
  </Route>
  
  
  </Routes>
 
  </BrowserRouter>
  </>
    )
  }
  export default App