import React from 'react';
import { useSpring, animated } from 'react-spring'

const ButtonEmotion = ({ buttonEmotionName, emotionIcon, EmotionButtom, textColorButtom,buttonColor }) => {
    const [props, set] = useSpring(() => ({ scale: 1, opacity: 1 }))

    return (
        <animated.div
            className={`card m-2 rounded-full w-24 h-24 glass ${buttonColor} sm:flex`}
            style={props}
            onMouseEnter={() => set({ scale: 1.1, opacity: 0.9 })}
            onMouseLeave={() => set({ scale: 1, opacity: 1 })}
        >
            <figure><img className="h-16 pt-2" src={emotionIcon} alt={buttonEmotionName} /></figure>
            <div className="card-body py-0 flex justify-center">
                <a href=""><h4 className={`card-title text-xs pb-2  ${textColorButtom}`}>{EmotionButtom}</h4></a>
            </div>
        </animated.div>
    );
}


export default ButtonEmotion;
