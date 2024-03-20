import React from 'react';
import { useSpring, animated } from 'react-spring'

const Card = ({ icon, iconName, category, textColor, cardColor }) => {
    const [props, set] = useSpring(() => ({ scale: 1, opacity: 1 }))

    return (
        <animated.div
            className={`card w-52 glass ${cardColor} sm:flex`}
            style={props}
            onMouseEnter={() => set({ scale: 1.1, opacity: 0.9 })}
            onMouseLeave={() => set({ scale: 1, opacity: 1 })}
        >
            <figure><img className="h-32 mt-8" src={icon} alt={iconName} /></figure>
            <div className="card-body flex items-center">
                <a href=""><h2 className={`card-title ${textColor}`}>{category}</h2></a>
            </div>
        </animated.div>
    );
}

export default Card;
