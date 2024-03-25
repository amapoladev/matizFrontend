import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Verificar si la respuesta es exitosa
      if (response.ok) {
        const data = await response.json();
        // Guardar el token de autenticación en el almacenamiento local
        localStorage.setItem('authToken', data.token);
        // Redirigir al usuario al formulario FormJournal
        window.location.href = '/form';
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setError('Error al registrar el usuario');
    }
  };

  // Devuelve el JSX que contiene el formulario de registro
  return (
    <>
      <h1 className="font-bold text-blue-700 text-2xl">Crea tu cuenta</h1>
      <p>Completa el formulario</p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-white shadow-md rounded-md mt-4 px-5 py-4 text-xs">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-blue-700 font-bold" htmlFor="name">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50 rounded"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-700 font-bold " htmlFor="lastname">
              Apellido:
            </label>
            <input
              type="text"
              id="lastname"
              className="mt-2 w-full p-3 bg-gray-50 rounded"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Escribe tu apellido"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-700 font-bold " htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50 rounded"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Escribe tu e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-700 font-bold rounded" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50 rounded"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Escribe tu password"
              required
            />
          </div>
          <Link to="/login">
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-blue hover:bg-indigo-800 text-white w-full p-2 rounded uppercase font-bold cursor-pointer"
          />
          </Link>
        </form>
      </div>
      <Link to="/login" className="text-blue-500 text-xs">
        ¿Tienes cuenta? Inicia sesión.
      </Link>
    </>
  );
};

export default RegisterForm;
