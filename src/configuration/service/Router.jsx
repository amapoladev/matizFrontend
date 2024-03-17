import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../components/views/home/Home';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default Router