import React from 'react';
import FormEmotion from '../../molecules/form/FormEmotion'
import Calma from '../../../assets/images/emotions/Calma.svg'


const Form = () => {
  return (
    <>
    <div className='flex flex-col items-center min-h-screen'>
    <h1 className='mt-16 font-bold font-xl text-blue pb-8'>Hola! <br></br> Aquí puedes agregar tus nuevas emociones: </h1>
    <FormEmotion />
    </div>
    
    </>
  );
}

export default Form;
