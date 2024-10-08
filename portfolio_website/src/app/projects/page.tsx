'use client'
import Image from 'next/image';
import ccpic from '../../../public/pictures/cashcar.png'
import dokemacapic from '../../../public/pictures/dokemaca.png'
import UsedSkills from '../components/usedSkills';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { moodAtom, recognitionAtom } from '../../../jodai';

export default function Page() {
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
        <main className="overflow-hidden px-8 lg:px-10 xl:px-20 pb-24 lg:pb-16">
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
                <h1 className={`lg:text-5xl text-3xl font-medium primary-color-${mood} pt-6 lg:pt-32 font-${mood} transition-all duration-2500`}>projects()</h1>
                <div className="grid lg:grid-rows-2 lg:grid-flow-col pt-8 lg:pt-16 gap-0 lg:gap-16">
                    <div className={`row-span-2 border-color-${mood} border-4 border-radius-${mood} mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={ccpic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl primary-color-${mood} pt-4 px-8 font-${mood} transition-all duration-2500`}>Cash Car</h2>
                        <h4 className={`text-base text-color-${mood} pt-4 px-8 font-${mood} transition-all duration-2500`}>Cash Car was my first ever project during the first year at mct. The objective of this project is to help a group of students of which only a limited number of students have a driver’s license. A group of friends were confronted with the issue that due to the limited number of drivers; it was always the same people who had to drive and were faced with the cost of each trip. The hassle to figure out who had to pay which amount was far from ideal.</h4>
                        <h4 className={`text-base text-color-${mood} pt-2 px-8 font-${mood} transition-all duration-2500`}>Here comes my project in the picture. Cash Car can calculate how much everyone has to pay the driver by tracking the distance per passenger, the daily fuel price and the total number of people in the car. Each person has their personal RFID tag to check-in at the beginning of the trip. The actual drive can be monitored on the website or on the display. Next to the actual drive you can also see the history per passenger.</h4>
                        <h3 className={`text-2xl primary-color-${mood} pt-4 px-8 font-${mood} transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="Html & css" years="+2 Year" />
                              <UsedSkills title="Javascript" years="+2 Year" />
                              <UsedSkills title="Github" years="+2 Year" />
                        </div>
                    </div>
                    <div className={`row-span-2 border-color-${mood} border-4 border-radius-${mood} mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={dokemacapic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl primary-color-${mood} pt-4 px-8 font-${mood} transition-all duration-2500`}>Dokemaca</h2>
                        <h4 className={`text-base text-color-${mood} pt-2 px-8 font-${mood} transition-all duration-2500`}>This project was my first team project. The project was made for another Howest campus in Bruges (Belgium). Dokemaca consists of 6 custom made interactive poles. Each pole consists of a button, lights, a raspberry pi and a router that runs on a custom Wi-Fi network and on top there is the accompanying website.</h4>
                        <h4 className={`text-base text-color-${mood} pt-2 px-8 font-${mood} transition-all duration-2500`}>Dokemaca is an interactive game with the objective to get people moving. The participants have to tap on the button of the pole which lights up. There are multiple game modes to choose from, such as “time attack”, “simon says” and “red and blue”. After completing a game, the participants can compare their performances with other players.</h4>
                        <h3 className={`text-2xl primary-color-${mood} pt-4 px-8 font-${mood} transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="Html & css" years="+2 Year" />
                              <UsedSkills title="Javascript" years="+2 Year" />
                              <UsedSkills title="Python" years="+2 Year" />
                              <UsedSkills title="Github" years="+2 Year" />
                        </div>
                    </div>
                </div>
        </main>
    )
}