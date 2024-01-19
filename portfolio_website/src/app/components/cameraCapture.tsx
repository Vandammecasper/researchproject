import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useAtom } from 'jotai';
import { cameraPreferencesAtom, moodAtom, recognitionAtom, showMessageAtom } from '../../../jodai';
import {REACT_APP_AZURE_FACE_API_ENDPOINT} from '../../../envFile';
import {REACT_APP_AZURE_FACE_API_KEY} from '../../../envFile';


const CameraCapture = () => {
  const [binaryImageData, setBinaryImageData] = useState('');
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [mood, setMood] = useAtom(moodAtom)
  const [cameraPreferences, SetCameraPreferences] = useAtom(cameraPreferencesAtom)
  const [showMessage, setShowMessage] = useAtom(showMessageAtom);
  const [recognition, setRecognition] = useAtom(recognitionAtom);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('Image captured:', imageSrc);
    setImgSrc(imageSrc);
  };

  useEffect(() => {
    setTimeout(() => {
      capture();
    }, 1000);

    const fetchData = async () => {
      console.log('capturing...');
      capture();
    };

    fetchData();
  }, [!showMessage]);

  useEffect(() => {
    if (imgSrc != null) {
      setIsCameraOpen(false);
      console.log('camera closed')
      setBinaryImageData(convertImageToBinary(imgSrc));
      analyzeEmotion();
    }
  }, [imgSrc]);

  const convertImageToBinary = (imageSrc:string) => {
    console.log('Converting image to binary...')
    const base64String = imageSrc.split(',')[1];
    console.log('Base64 String:', base64String)
    return atob(base64String);
  };

  const analyzeEmotion = async () => {
    try {
      const endpoint = REACT_APP_AZURE_FACE_API_ENDPOINT;
      const subscriptionKey = REACT_APP_AZURE_FACE_API_KEY;

      console.log('Endpoint:', endpoint);
      console.log('Key:', subscriptionKey);

      const response = await axios.post(
        `${endpoint}face/v1.0/detect?returnFaceAttributes=emotion`,
        binaryImageData,
        {
          headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey,
          },
        }
      );

      // Extract emotion data from the response
      const emotions = response.data[0]?.faceAttributes?.emotion;
      console.log('Emotion Data:', emotions);
    } catch (error) {
      console.error('Error analyzing emotion:', error);
    }
  };

  return (
    <div className='fixed transition-all duration-2500'>
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
