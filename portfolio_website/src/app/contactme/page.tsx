'use client'
import Logo from "../components/logo";
import Email from "../components/email";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { moodAtom, recognitionAtom } from "../../../jodai";

export default function Page () {
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

    return(
        <main className="mb-24 lg:mb-0">
            <button
                className={`flex fixed lg:hidden top-4 sm:top-8 right-4 sm:right-6 z-50 justify-center items-center w-14 h-14 rounded-full primary-background-color-${mood} transition-all duration-2500`}
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
            <div className="w-screen h-100% grid lg:grid-rows-2 lg:grid-flow-col xl:gap-24 maxlg:justify-items-center lg:pt-52 overflow-auto">
                <div className="block md:hidden lg:hidden w-80">
                    <Logo/>
                </div>
                <div className="hidden md:block lg:hidden w-80">
                    <Logo/>
                </div>
                <div className="row-span-2 xl:mt-10 lg:w-7/12 sm:p-10 xl:p-0">
                    <div className="flex">
                        <h1 className={`xl:text-5xl text-3xl 3xl:text-6xl font-semibold primary-color-${mood} 3xl:pt-10 pl-6 lg:pl-20 xl:pt-0 lg:pt-8 font-${mood} transition-all duration-2500`}>Let's work together!</h1>
                        <a href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
                            <img className="block lg:hidden pr-6 pt-1 h-9" src={`/icons/linkedin.png`} alt="linkedin"/>
                        </a>
                    </div>
                    <h2 className={`xl:text-xl font-medium secondary-color-${mood} pt-0 3xl:text-2xl xl:pt-3 pl-6 lg:pl-20 font-${mood} transition-all duration-2500`}>Web/app development & design</h2>
                    <h3 className={`text-color-${mood} pt-3 pl-6 lg:pl-20 pr-5 3xl:text-xl font-${mood} transition-all duration-2500`}>I love working on the front-end of websites and apps. besides development I also like working on the design!</h3>
                    <h3 className={`text-color-${mood} pt-2 pl-6 lg:pl-20 pr-5 3xl:text-xl font-${mood} transition-all duration-2500`}>Do you wish to get in touch with me? Feel free to send me an email!</h3>
                    <Email/>
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