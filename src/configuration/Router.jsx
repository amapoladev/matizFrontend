import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/views/home/Home';
import Form from '../components/views/form/Form'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/form' element={<Form/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default Router