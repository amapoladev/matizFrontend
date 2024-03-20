import React from 'react';
import { useSpring, animated } from 'react-spring';
import useFetch from '../../../../service/UseFetch'; 

const ButtonEmotion = ({ buttonEmotionName, emotionIcon, EmotionButtom, textColorButtom, buttonColor }) => {
    const [props, set] = useSpring(() => ({ scale: 1, opacity: 1 }));
    
    const handleClick = async () => {
        console.log("Solicitud de API enviada");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emotion: buttonEmotionName }),
        };

        const { data, loading, error } = useFetch('http://127.0.0.1:8000/api/emotions', requestOptions);

        if (loading) {
            console.log('Cargando...');
            return;
        }

        if (error) {
            console.error('Error:', error);
            return;
        }

        console.log('Emoción guardada con éxito:', data);
    };

    return (
        <animated.div
            className={`card m-2 rounded-full w-24 h-24 glass ${buttonColor} sm:flex`}
            style={props}
            onMouseEnter={() => set({ scale: 1.1, opacity: 0.9 })}
            onMouseLeave={() => set({ scale: 1, opacity: 1 })}
            onClick={handleClick}
        >
            <figure><img className="h-16 pt-2" src={emotionIcon} alt={buttonEmotionName} /></figure>
            <div className="card-body py-0 flex justify-center">
                <a href=""><h4 className={`card-title text-xs pb-2  ${textColorButtom}`}>{EmotionButtom}</h4></a>
            </div>
        </animated.div>
    );
};

export default ButtonEmotion;
