import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import getScreenshot from 'react-webcam';

const CameraCapture = () => {
  const [binaryImageData, setBinaryImageData] = useState('');
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  useEffect(() => {
    setTimeout(() => {
      capture();
    }, 1000);

    const fetchData = async () => {
      capture();
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (imgSrc != null) {
      setIsCameraOpen(false);
      setBinaryImageData(convertImageToBinary(imgSrc));
    }
  }, [imgSrc]);

  const convertImageToBinary = (imageSrc:string) => {
    const base64String = imageSrc.split(',')[1];
    return atob(base64String);
  };

  return (
    <div className='fixed'>
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
