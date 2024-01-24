import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useAtom } from 'jotai';
import { cameraPreferencesAtom, moodAtom, recognitionAtom, showMessageAtom } from '../../../jodai';
import {SKY_BIOMETRY_API_SECRET} from '../../../envFile';
import {SKY_BIOMETRY_API_KEY} from '../../../envFile';
import fs from 'fs';

const CameraCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [mood, setMood] = useAtom(moodAtom)
  const [cameraPreferences, SetCameraPreferences] = useAtom(cameraPreferencesAtom)
  const [showMessage, setShowMessage] = useAtom(showMessageAtom);
  const [recognition, setRecognition] = useAtom(recognitionAtom);
  const [imgUrl, setImgUrl] = useState('');
  const apiSecret = SKY_BIOMETRY_API_SECRET;
  const apiKey = SKY_BIOMETRY_API_KEY;

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('Image captured:', imageSrc);
    setImgSrc(imageSrc);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);

    const fetchData = async () => {
      console.log('capturing...');
      capture();
    };
  }, []);

  useEffect(() => {
    if (imgSrc != '') {
      setIsCameraOpen(false);
      console.log('camera closed')
      analyzeEmotion();
    }
  }, [imgSrc]);

  const analyzeEmotion = async () => {
  try {
    let data = new FormData();

    data.append('urls', imgSrc);

    data.append('api_key', apiKey);

    data.append('api_secret', apiSecret);

    data.append('attributes', 'mood')


    let config = {

      method: 'post',

      maxBodyLength: Infinity,

      url: 'https://api.skybiometry.com/fc/faces/detect.json',

      headers: {

        'content-type' : 'multipart/form-data'

      },

      data : data

    };

    let feeling


    axios.request(config)

    .then((response) => {
      console.log('response:', response)
      console.log('mood:', response.data.photos[0].tags[0].attributes.mood.value)
      feeling = response.data.photos[0].tags[0].attributes.mood.value
      if (feeling == 'happy' || feeling == 'neutral' || feeling == 'sad' || feeling == 'angry') {
        setMood(feeling)
      }
      else {
        setMood('neutral')
      }
})
  } catch (error) {
    console.error('Error analyzing emotion:', error);
  }

};


  return (
    <div className='fixed transition-all duration-2500 z-0'>
      {isCameraOpen && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={100}
          height={100}
          screenshotQuality={1}
        />
      )}
    </div>
  );
};

export default CameraCapture;
