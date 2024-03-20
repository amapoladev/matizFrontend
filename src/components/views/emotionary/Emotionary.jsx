import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Emotions from '../../molecules/emotions/Emotions';
import Footer from '../../molecules/footer/Footer';

const Emotionary = () => {
  return (
    <>
      <Navbar />
      <h1 className='mt-32 ml-8 text-blue font-bold aligne-center'>¿Cómo te sientes hoy?</h1>
      <Emotions />
      <h2 className='mt-2 ml-8 text-blue font-bold aligne-center'>Este mes</h2>
      

      <Footer />
    </>
  );
}

export default Emotionary;
