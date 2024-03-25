// src/components/Register.js

import React, { useState } from 'react';

const RegisterForm = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
