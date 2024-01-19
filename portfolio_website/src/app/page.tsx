'use client'
import React, { useEffect } from 'react'
import Logo from './components/logo'
import './globals.css'
import {useAtom} from 'jotai'
import { cameraPreferencesAtom, moodAtom, recognitionAtom, showMessageAtom } from '../../jodai'
import CameraCapture from './components/cameraCapture'

export default function Page () {

  const [mood, setMood] = useAtom(moodAtom)
  const [cameraPreferences, SetCameraPreferences] = useAtom(cameraPreferencesAtom)
  const [showMessage, setShowMessage] = useAtom(showMessageAtom);
  const [fadeIn, setFadeIn] = React.useState(false);
  const [recognition, setRecognition] = useAtom(recognitionAtom);

  useEffect(() => {
  if (typeof window !== 'undefined') {
    document.body.classList.remove('neutral', 'happy', 'sad', 'angry');
    document.body.classList.add(mood);
  }
}, [mood]);

useEffect(() => {
    const checkCameraPermission = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'camera' });

        if (permissionStatus.state === 'granted') {
          SetCameraPreferences('granted');
          setShowMessage(false);
        } else if (permissionStatus.state === 'denied') {
          SetCameraPreferences('denied');
          setShowMessage(false);
        } else {
          SetCameraPreferences('not-decided');
          setShowMessage(true);
          setTimeout(() => {
            setFadeIn(true);
          }, 500);
          
        }
      } catch (error) {
        console.error('Error checking camera permission:', error);
      }
    };

    checkCameraPermission();
  }, []);

  console.log(cameraPreferences)

    return(
        <main>
            {recognition && (
              <CameraCapture/>
            )}
            {showMessage && (
              <div>
                <div className={`fixed z-50 opacity-0 p-8 border-t-8 border-color-neutral bg-white rounded-lg shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${fadeIn ? 'fade-in' : ''}`}>
                  <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-3xl primary-color-neutral font-bold">Welcome to my portfolio!</h1>
                    <h2 className="text-center mt-4">Welcome to my portfolio, where I've seamlessly integrated the Azure Face API to enhance your experience. This powerful API allows me to analyze your emotions through the device camera. Rest assured, the data collected for this analysis will not be stored; it will be used solely for the purpose of understanding and interpreting your emotions in real-time. Your privacy is of utmost importance to me, and I want to ensure transparency in my approach. By choosing to continue and granting permission to use your camera, you provide consent to leverage this information exclusively for emotion analysis. I highly recommend allowing camera permissions for the optimal experience, as my website dynamically adapts itself to reflect and respond to your emotions. Thank you for choosing to explore my portfolio, where technology and emotion seamlessly converge for a personalized and engaging journey.</h2>
                    <p className='mt-4 italic text-center text-xs'>Feel free to customize your emotion recognition experience by simply clicking the emoji located in the top right corner. I've made it easy for you to adjust settings and tailor the system to your preferences. Your emotional journey, your way.</p>
                    <button className="mt-4 primary-background-color-neutral hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowMessage(false)}>Continue</button>
                  </div>
                </div>
                <div className="fixed z-40 w-screen h-screen bg-black opacity-50"></div>
              </div>
            )}
            <div className="w-screen h-90% grid lg:grid-rows-2 lg:grid-flow-col lg:gap-80 justify-items-center lg:pt-52">
                <div className="block md:hidden w-80 pt-6">
                <Logo/>
                </div>
                <div className="hidden md:block lg:hidden w-80 pt-6">
                  <Logo/>
                </div>
                <div className="row-span-2 lg:mt-12 3xl:mt-24">
                    <h2 className={`text-3xl md:text-4xl 3xl:text-5xl font-medium text-color-${mood} pl-10 pt-2 lg:pl-20 lg:pt-8 3xl:pl-0 font-${mood} transition-all duration-2500`}>Hello, I am</h2>
                    <h1 className={`text-5xl md:text-6xl 3xl:text-8xl font-bold primary-color-${mood} pt-3 pl-10 lg:pl-20 3xl:pl-0 font-${mood} transition-all duration-2500`}>Casper</h1>
                    <h1 className={`text-5xl md:text-6xl 3xl:text-8xl font-bold primary-color-${mood} pl-10 lg:pl-20 3xl:pl-0 pt-1 font-${mood} transition-all duration-2500`}>Van Damme</h1>
                    <h4 className={`text-2xl md:text-3xl 3xl:text-4xl font-medium text-color-${mood} pt-3 pl-10 lg:pl-20 3xl:pl-0 font-${mood} transition-all duration-2500`}>
                      Student next web development at Howest
                    </h4>
                </div>
                <div className="hidden lg:block lg:row-span-2 lg:w-96 3xl:hidden">
                  <Logo/>
                </div>
                <div className="hidden 3xl:block lg:row-span-2 lg:w-96">
                  <Logo/>
                </div>
            </div>
        </main>
    )
}