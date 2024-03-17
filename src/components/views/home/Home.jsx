import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';



const Home = () => {
  return (
   <>
   <Navbar />
   <h1 className='text-red-500'>Hola soy home</h1>
   <Footer />
   </>
  );
}

export default Home;
