import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/views/home/Home';
import Form from '../components/views/form/Form'
import Emotionary from '../components/views/emotionary/Emotionary';
import LoginView from '../components/views/loginForm2/LoginView';
import RegisterView from '../components/views/loginForm2/RegisterView';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<RegisterView />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/emotionary' element={<Emotionary />}></Route>
        <Route path='/login' element={<LoginView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router