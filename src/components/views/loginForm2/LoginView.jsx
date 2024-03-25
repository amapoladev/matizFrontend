import React from 'react';
import LoginForm from '../../molecules/form/LoginForm';
import LoginImage from '../../../assets/images/matizLogo.svg'


const LoginView = () => {
  return (
    <div className='max-w-5xl m-auto mt-2 md:mt-4 flex flex-col md:flex-row items-center'>
    <img className='sm:ml-20 md:ml-42 h-72' src={LoginImage} alt="LogoMatiz" /> 
    <div className='md:pl-0 pr-4 sm:px-8 py-2 block'> 
     <LoginForm />
    </div>
  </div>
  );
}

export default LoginView;
