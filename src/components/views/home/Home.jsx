import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import Card from '../../atoms/card/Card';
import Alegria from '../../../assets/images/emotions/Alegria.svg'
import Cuentos from '../../../assets/Categorias/Cuentos.svg'
import Emocionario from '../../../assets/Categorias/Emocionario.svg'
import Canciones from '../../../assets/Categorias/Canciones.svg'
import Emotions from '../../molecules/emotions/Emotions';

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
      <h1 className='mt-28 mb-8 text-red-500 font-bold aligne-center ml-8 mt-4'>Hola!<br></br> ¿Cómo te sientes hoy?</h1>
      </div>
<div>
  <Emotions />
</div>

      <div className='mt-8 mx-8 flex flex-wrap justify-around'>
        <div className='p-4 sm:p-2 lg:p-4'>
          <Card
            icon={Emocionario}
            iconName="EmocionarioIconoADiario"
            category="Emocionario"
            textColor="text-green"
            cardColor="bg-blueLight" />
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




      <Footer />
    </>
  );
}

export default Home;
