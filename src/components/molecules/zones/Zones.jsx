import React from 'react';
import Card from '../../atoms/card/Card';
import Alegria from '../../../assets/images/emotions/Alegria.svg'
import Cuentos from '../../../assets/Categorias/Cuentos.svg'
import Emocionario from '../../../assets/Categorias/Emocionario.svg'
import Canciones from '../../../assets/Categorias/Canciones.svg'

const Zones = () => {
    return (
        <>
            <div className='mt-8 mx-8 flex flex-wrap justify-around'>
                <div className='p-4 sm:p-2 lg:p-4'>
                    <Card
                        icon={Emocionario}
                        iconName="EmocionarioIconoADiario"
                        category="Emocionario"
                        textColor="text-green"
                        cardColor="bg-blueLight" 
                        linkTo="/emotionary"/>
                </div>

                <div className='p-4 sm:p-2 lg:p-4'>
                    <Card
                        icon={Canciones}
                        iconName="CancionesIconoACantando"
                        category="Canciones"
                        textColor="text-green"
                        cardColor="bg-blueLight" />
                </div>

                <div className='p-4 sm:p-2 lg:p-4'>
                    <Card
                        icon={Cuentos}
                        iconName="CuentosIconoLeyendo"
                        category="Cuentos"
                        textColor="text-green"
                        cardColor="bg-blueLight" />
                </div>

                <div className='p-4 sm:p-2 lg:p-4'>
                    <Card
                        icon={Alegria}
                        iconName="JuegosIconoAlegria"
                        category="Juegos"
                        textColor="text-green"
                        cardColor="bg-blueLight" />
                </div>
            </div>

        </>
    );
}

export default Zones;
