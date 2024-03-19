import React from 'react';

const ButtonEmotion = (imageEmotion, emotion) => {
    return (
        <>
            <a href="">
                <div className="card w-24 h-24 glass bg-blueLight text-green">
                    <figure><img
                        className="cardFlagImg"
                        src={imageEmotion}
                        alt={`Emoción ${emotion}`}
                    /></figure>
            <div className="card-body flex items-center">
                <a href=""><h2 className="card-title">Juegos</h2></a>
            </div>
        </div >
            </a >
        </>
  );
}

export default ButtonEmotion;
