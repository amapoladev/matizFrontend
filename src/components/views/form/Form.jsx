import React from 'react';
import FormJournal from '../../molecules/form/FormJournal'




const Form = () => {
  return (
    <>
    <div className='flex flex-col items-center min-h-screen'>
    <h1 className='mt-16 font-bold font-xl text-blue pb-8'>Hola! <br></br> Aquí puedes agregar tus nuevas emociones: </h1>
    <FormJournal />
    </div>
    
    </>
  );
}

export default Form;
