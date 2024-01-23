'use client'
import Link from "next/link";
import {useAtom} from 'jotai'
import { moodAtom, recognitionAtom } from '../../../jodai'
import { useState } from "react";

export default () => {

  const [mood, setMood] = useAtom(moodAtom)
  const [recognition, setRecognition] = useAtom(recognitionAtom)
  const [isBoxVisible, setBoxVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const handleToggle = () => {
    setRecognition(!recognition);
    if(recognition == false){
      console.log('recognition is true')
      setBoxVisible(false)
    }
  };

  const handleCircleClick = () => {
    setBoxVisible(!isBoxVisible);
    setHover(false)
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

  return (
    <header className={`z-20 hidden w-full h-24 fixed lg:grid grid-rows-2 grid-flow-col transition-all duration-2500 header-background-${mood}`}>
      <div className='row-span-2 w-5/6 flex'>
        <Link href={'/'}>
          <div className=''>
            <h1 className={`header-text-color-${mood} text-2xl pt-8 pl-10 xl:pl-20 font-bold font-${mood} transition-all duration-2500`}>Casper Van Damme</h1>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
          <img className="pt-9 pl-4" src={`/icons/linkedin.png`} alt="linkedin icon"/>
        </Link>
      </div>
        <div className='row-span-2 justify-self-end pt-2'>
          <div className='grid grid-rows-4 grid-flow-col justify-items-end pr-20 gap-16'>
            <Link className={`row-span-4 header-text-color-${mood} text-xl pt-6 font-semibold h-20 font-${mood} transition-all duration-2500`} href={'/about'}>About</Link>
            <Link className={`row-span-4 header-text-color-${mood} text-xl pt-6 font-semibold h-20 font-${mood} transition-all duration-2500`} href={'/projects'}>Projects</Link>
            <div className={`border-color-${mood} border-4 mt-4 p-2 border-radius-${mood} transition-all duration-2500`}>
              <Link className={`row-span-4 header-text-color-${mood} text-xl font-semibold pt-6 font-${mood} transition-all duration-2500`} href={'/contactme'}>Contact Me</Link>
            </div>
            <div className="row-span-4 relative">
              <button
                className={`flex justify-center items-center w-14 h-14 rounded-full mt-3 primary-background-color-${mood} transition-all duration-2500`}
                onClick={handleCircleClick}
                onMouseEnter={() => {if(recognition == false && isBoxVisible == false){setHover(true)}}}
                onMouseLeave={() => setHover(false)}
              >
                <img className="h-10 transition-all duration-2500" src={`/icons/mood-${mood}.png`} alt="mood icon" />
              </button>
              {hover && (<div className={`bg-white text-black p-2 text-right fixed right-12 top-20 w-48 font-semibold border-radius-${mood}`}>Click to change recognition settings!</div>)}
              <div
                className={`fixed right-20 mt-2 grid grid-cols-2 border-radius-${mood} gap-12 w-40 p-2 bg-white transition-all duration-300 ${
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
            </div>
          </div>
        </div>
    </header>
  );
};

