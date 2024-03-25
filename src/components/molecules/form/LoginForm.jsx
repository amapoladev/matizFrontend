import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
    <div className='sm:mt-24'>
      <h1 className='font-bold text-blue-700 text-2xl'>Inicia sesión</h1>
      <div className='bg-white shadow-md rounded-md mt-4 px-5 py-4 text-xs'>
        <form action="">
          <div className='mb-4' >
            <label
              className='text-blue-700 font-bold rounded'
              htmlFor="email">
              Email:</label>
            <input
              type="email"
              id='email'
              className='mt-2 w-full p-3 bg-gray-50 rounded'
              name='email'
              placeholder='Escribe tu e-mail'
            />
          </div>
          <div className='mb-4' >
            <label
              className='text-blue-700 font-bold'
              htmlFor="password">
              Password:</label>
            <input
              type="password"
              id='password'
              className='mt-2 w-full p-3 bg-gray-50 rounded'
              name='password'
              placeholder='Escribe tu password'
            />
          </div>
          <Link to="/home">
          <input
            type="submit"
            value="Iniciar sesión"
            className="bg-blue hover:bg-indigo-800 text-white w-full p-2 rounded uppercase font-bold cursor-pointer"
          />
          </Link>
        </form>
      </div>
      <div className="mt-2 mb-8">
      <Link to="/" className="sm:pb-8 text-blue-500 text-xs">
        ¿No tienes cuenta? Crea una.
      </Link>
      </div>
      </div>
    </>
  );
}

export default LoginForm;
