import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ButtonEmotion = ({ buttonEmotionName, emotionIcon, textColorButtom, buttonColor }) => {
    const [pressed, setPressed] = useState(false); // Estado para el botón presionado

    const handleClick = async () => {
        console.log("Botón presionado:", buttonEmotionName);

        // Cambiar el estado de presionado
        setPressed(!pressed);

        // Aquí puedes enviar la información a tu API
        try {
            // Realiza la solicitud a tu API para guardar la información
            // Por ejemplo:
            const response = await fetch('http://tu-api.com/users_emotions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emotion: buttonEmotionName, pressed: !pressed }), // Pasa el estado de presionado
            });
            if (response.ok) {
                console.log('Emoción guardada con éxito en la base de datos');
            } else {
                console.error('Error al guardar la emoción en la base de datos');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud a la API:', error);
        }
    };

    const [props, set] = useSpring(() => ({ scale: 1, opacity: 1 }));

    return (
        <animated.div
            className={`card m-2 rounded-full w-24 h-24 glass ${pressed ? 'bg-blue' : buttonColor} sm:flex`}
            style={{ ...props, cursor: 'pointer' }} // Combina los estilos con el cursor de botón
            onMouseEnter={() => set({ scale: 1.1, opacity: 0.9 })}
            onMouseLeave={() => set({ scale: 1, opacity: 1 })}
            onClick={handleClick} // Maneja el clic del botón
        >
            <figure><img className="h-20 pt-4" src={emotionIcon} alt={buttonEmotionName} /></figure>
            <div className="card-body py-0 flex justify-center">
                <a href=""><h4 className={`card-title text-xs pb-2  ${textColorButtom}`}></h4></a>
            </div>
        </animated.div>
    );
};

export default ButtonEmotion;
