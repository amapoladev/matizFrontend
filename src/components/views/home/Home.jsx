import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import Card from '../../atoms/card/Card';



const Home = () => {
  return (
   <>
   <Navbar />
   <h1 className='text-red-500 aligne-center'>Hola soy home</h1>
   <div className='my-16 mx-8'>
    <Card />
   </div>
   <Footer />
   </>
  );
}

export default Home;
