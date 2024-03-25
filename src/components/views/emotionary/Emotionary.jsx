import React, { useState } from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import Footer from '../../molecules/footer/Footer';
import ButtonEmotion from '../../atoms/buttons/buttonEmotion/ButtonEmotion';
import useFetch from '../../../service/UseFetch';
import FormJournal from '../../molecules/form/FormJournal';

const Emotionary = () => {
  const { data } = useFetch('http://127.0.0.1:8000/api/emotions');
  const [selectedEmotion, setSelectedEmotion] = useState("");

  if (!data || !data.emotions) {
    return <>Loading</>;
  }

  const emotions = data.emotions;

  const handleEmotionChange = (emotionId) => {
    setSelectedEmotion(emotionId);
  };

  return (
    <>
      <Navbar />
      <h1 className='mt-32 ml-8 text-blue font-bold align-center'>¿Cómo te sientes hoy?</h1>
      <div className='container mx-auto flex flex-wrap justify-center gap-8 mt-10 p-4'>
        {emotions.map((emotion) => (
          <ButtonEmotion
            key={emotion.id}
            emotionIcon={emotion.emotion_url}
            buttonEmotionName={emotion.emotion}
            buttonColor="bg-blueLight"
            className="my-2"
          />
        ))}
      </div>
      <div>
        <FormJournal onSelectEmotion={handleEmotionChange} />
      </div>
      <Footer />
    </>
  );
}

export default Emotionary;
