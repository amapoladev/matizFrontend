import React from 'react';
import Amor from '../../../assets/images/emotions/Amor.svg'
import Aburrimiento from '../../../assets/images/emotions/Aburrimiento.svg'
import Calma from '../../../assets/images/emotions/Calma.svg'
import Enojo from '../../../assets/images/emotions/Enojo.svg'
import Tristeza from '../../../assets/images/emotions/Tristeza.svg'
import Miedo from '../../../assets/images/emotions/Miedo.svg'
import Alegria from '../../../assets/images/emotions/Alegria.svg'
import ButtonEmotion from '../../atoms/buttons/buttonEmotion/ButtonEmotion';

const Emotions = () => {

  return (

    <>

      <div className='flex flex-wrap justify-around'>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Alegria}
            buttonEmotionName="Alegria"
            // EmotionButtom="Alegría"
            textColorButtom="text-yellow-700"
            buttonColor="bg-blueLight" />
        </div>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Amor}
            buttonEmotionName="Amor"
            // EmotionButtom="Amor"
            textColorButtom="text-red-600"
            buttonColor="bg-blueLight" />
        </div>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Aburrimiento}
            buttonEmotionName="Aburrimiento"
            // EmotionButtom="Soso"
            textColorButtom="text-purple-600"
            buttonColor="bg-blueLight" />
        </div>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Calma}
            buttonEmotionName="Calma"
            // EmotionButtom="Calma"
            textColorButtom="text-teal-500"
            buttonColor="bg-blueLight" />
        </div>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Enojo}
            buttonEmotionName="Enojo"
            // EmotionButtom="Enojo"
            textColorButtom="text-red-800"
            buttonColor="bg-blueLight" />
        </div>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Tristeza}
            buttonEmotionName="Tristeza"
            // EmotionButtom="Tristeza"
            textColorButtom="text-teal-600"
            buttonColor="bg-blueLight" />
        </div>
        <div className='p-4 sm:p-2 lg:p-4'>
          <ButtonEmotion
            emotionIcon={Miedo}
            buttonEmotionName="Miedo"
            // EmotionButtom="Miedo"
            textColorButtom="text-orange-500"
            buttonColor="bg-blueLight" />
        </div>

      </div>

    </>
  );
}

export default Emotions;
