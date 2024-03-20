import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import Emotions from '../../molecules/emotions/Emotions';
import Zones from '../../molecules/zones/Zones';

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='sm:mt-32 mt-32 mb-4 text-red-500 font-bold aligne-center ml-8 mt-4'>Hola!<br></br> ¿Cómo te sientes hoy?</h1>
      </div>
      <Emotions />
      <Zones />
      <Footer />
    </>
  );
}

export default Home;
