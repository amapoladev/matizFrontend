import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import Card from '../../atoms/card/Card';
import Alegria from '../../../assets/images/emotions/Alegria.svg'
import Amor from '../../../assets/images/emotions/Amor.svg'
import Aburrimiento from '../../../assets/images/emotions/Aburrimiento.svg'
import Calma from '../../../assets/images/emotions/Calma.svg'
import Enojo from '../../../assets/images/emotions/Enojo.svg'
import Tristeza from '../../../assets/images/emotions/Tristeza.svg'
import Miedo from '../../../assets/images/emotions/Miedo.svg'
import Cuentos from '../../../assets/Categorias/Cuentos.svg'
import Emocionario from '../../../assets/Categorias/Emocionario.svg'
import Canciones from '../../../assets/Categorias/Canciones.svg'

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-red-500 font-bold aligne-center ml-8 mt-4'>Hola!<br></br> ¿Cómo te sientes hoy?</h1>

      <div className='mt-[20] mx-8 flex flex-wrap justify-around'>
        <Card
          icon={Emocionario}
          iconName="EmocionarioIconoADiario"
          category="Emocionario"
          textColor="text-green"
          cardColor="bg-blueLight" />

        <Card
          icon={Canciones}
          iconName="CancionesIconoACantando"
          category="Canciones"
          textColor="text-green"
          cardColor="bg-blueLight" />

        <Card
          icon={Cuentos}
          iconName="CuentosIconoLeyendo"
          category="Cuentos"
          textColor="text-green"
          cardColor="bg-blueLight" />

        <Card
          icon={Alegria}
          iconName="JuegosIconoAlegria"
          category="Juegos"
          textColor="text-green"
          cardColor="bg-blueLight" />

      </div>




      <Footer />
    </>
  );
}

export default Home;
