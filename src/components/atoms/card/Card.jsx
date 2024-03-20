import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';

const Card = ({ icon, iconName, category, textColor, cardColor, linkTo }) => {
    const [props, set] = useSpring(() => ({ scale: 1, opacity: 1 }))

    return (
        <animated.div
            className={`card w-52 glass ${cardColor} sm:flex`}
            style={props}
            onMouseEnter={() => set({ scale: 1.1, opacity: 0.9 })}
            onMouseLeave={() => set({ scale: 1, opacity: 1 })}
        >
             <Link to={linkTo}>
                <figure><img className="h-32 mt-8" src={icon} alt={iconName} /></figure>
                <div className="card-body flex items-center">
                    <h2 className={`card-title ${textColor}`}>{category}</h2>
                </div>
            </Link>
        </animated.div>
    );
}

export default Card;
