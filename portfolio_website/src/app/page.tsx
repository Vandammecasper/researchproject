'use client'
import React, { useEffect, useState } from 'react'
import Logo from './components/logo'
import './globals.css'
import {useAtom} from 'jotai'
import { cameraPreferencesAtom, moodAtom, recognitionAtom, showMessageAtom } from '../../jodai'
import CameraCapture from './components/cameraCapture'

export default function Page () {
  const [cameraPreferences, SetCameraPreferences] = useAtom(cameraPreferencesAtom)
  const [showMessage, setShowMessage] = useAtom(showMessageAtom);
  const [fadeIn, setFadeIn] = React.useState(false);
  const [mood, setMood] = useAtom(moodAtom)
  const [recognition, setRecognition] = useAtom(recognitionAtom)
  const [isBoxVisible, setBoxVisible] = useState(false);

  const handleToggle = () => {
    setRecognition(!recognition);
    if(recognition == false){
      console.log('recognition is true')
      setBoxVisible(false)
    }
  };

  const handleCircleClick = () => {
    setBoxVisible(!isBoxVisible);
  };

  const handleMoodChange = (wantedMood: string) => () => {
    if (recognition == false) {
      setMood(wantedMood)
      setBoxVisible(false)
      document.body.classList.add('body-transition');
      setTimeout(() => {
        document.body.classList.remove('body-transition');
      }, 2500);
    }
  }

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
          setRecognition(true);
        } else if (permissionStatus.state === 'denied') {
          SetCameraPreferences('denied');
          setShowMessage(false);
          setRecognition(false);
        } else {
          SetCameraPreferences('not-decided');
          setRecognition(false);
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
          <div className={`background-${mood} w-28 h-20 absolute top-0 left-0 z-50 lg:hidden`}></div>
            {recognition && (
              <CameraCapture/>
            )}
            {showMessage && (
              <div>
                <div className={`fixed z-50 opacity-0 p-8 border-t-8 border-color-neutral bg-white rounded-lg shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${fadeIn ? 'fade-in' : ''}`}>
                  <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-3xl primary-color-neutral font-bold">Welcome to my portfolio!</h1>
                    <h2 className="text-center mt-4">Explore my portfolio, where I've integrated the <span className='font-bold'>SkyBiometry face detection API</span> to analyze your <span className='font-bold'>emotions</span> in real-time through the device camera. Your privacy is a top priority, and rest assured, the <span className='font-bold'>data collected won't be stored</span>; it's solely used for understanding and interpreting your emotions. By <span className='font-bold'>granting camera permissions</span>, you <span className='font-bold'>consent</span> to exclusive use for emotion analysis, enhancing your personalized and engaging experience.</h2>
                    <p className='mt-4 italic text-center text-xs'>Feel free to <span className='font-bold'>customize</span> your emotion recognition experience by simply clicking the <span className='font-bold'>emoji</span> located in the <span className='font-bold'>top right corner</span>. I've made it easy for you to adjust settings and tailor the system to your preferences. Your emotional journey, your way.</p>
                    <button className="mt-4 primary-background-color-neutral hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowMessage(false)}>Continue</button>
                  </div>
                </div>
                <div className="fixed z-40 w-screen h-screen bg-black opacity-50"></div>
              </div>
            )}
            <div className='w-screen h-90%'>
              <button
                className={`flex fixed lg:hidden top-8 right-6 z-50 justify-center items-center w-14 h-14 rounded-full primary-background-color-${mood} transition-all duration-2500`}
                onClick={handleCircleClick}
              >
                <img className="h-10 transition-all duration-2500" src={`/icons/mood-${mood}.png`} alt="mood icon" />
              </button>
              <div
                className={`fixed right-6 lg:right-20 mt-24 z-50 lg:mt-2 grid grid-cols-2 border-radius-${mood} gap-12 w-40 p-2 bg-white transition-all duration-300 ${
                  isBoxVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } transition-all duration-2500`}
                style={{
                  transform: isBoxVisible ? 'translateY(4%)' : 'translateY(0)',
                }}
              >
                <div>
                  <div>Recognition</div>
                  <button onClick={handleMoodChange('happy')} className={`${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Happy</button>
                  <button onClick={handleMoodChange('neutral')} className={`${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Neutral</button>
                  <button onClick={handleMoodChange('sad')} className={`${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Sad</button>
                  <button onClick={handleMoodChange('angry')} className={`${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Angry</button>
                </div>
                <div>
                  <label className={`toggle-container ${recognition ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={recognition}
                      onChange={handleToggle}
                      className="hidden-input"
                    />
                    <div className="slider" />
                  </label>
                  <img onClick={handleMoodChange('happy')} className={`h-5 pl-3 ${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`} src="/icons/smiley-happy.png" alt="" />
                  <img onClick={handleMoodChange('neutral')} className={`h-5 pl-3 mt-1 ${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`} src="/icons/smiley-neutral.png" alt="" />
                  <img onClick={handleMoodChange('sad')} className={`h-5 pl-3 mt-1 ${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`} src="/icons/smiley-sad.png" alt="" />
                  <img onClick={handleMoodChange('angry')} className={`h-5 pl-3 mt-1 ${recognition ? 'opacity-50' : 'opacity-100'} ${recognition ? 'cursor-not-allowed' : 'cursor-pointer'}`} src="/icons/smiley-angry.png" alt="" />
                </div>
              </div>
            <div className="grid lg:grid-rows-2 lg:grid-flow-col lg:gap-80 justify-items-center lg:pt-52">
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
            </div>
        </main>
    )
}