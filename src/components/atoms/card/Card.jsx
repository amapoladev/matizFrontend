import React from 'react';
import Felicidad from '../../../assets/images/FelicidadAmarillo.svg'

const Card = () => {
    return (
        <>
            <a href="">
                <div className="card w-52 glass bg-blueLight text-green">
                    <figure><img className="h-32 mt-8" src={Felicidad} alt="juegos" /></figure>
                    <div className="card-body flex items-center">
                        <a href=""><h2 className="card-title">Juegos</h2></a>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Card;
