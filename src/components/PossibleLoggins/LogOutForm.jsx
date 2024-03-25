// src/components/Logout.js

import React from 'react';

const LogOutForm = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                credentials: 'include',
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogOutForm;
