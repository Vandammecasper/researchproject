'use client'
import Skill from '../components/Skill';
import {useAtom} from 'jotai'
import { moodAtom, recognitionAtom } from '../../../jodai'
import { useEffect, useState } from 'react';
 
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
        <main className="overflow-hidden">
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
            <div className="block xl:grid xl:grid-rows-2 xl:grid-flow-col pt-6 pb-20 lg:pb-0 lg:pt-24 xl:pt-32 gap-24 overflow-auto">
                <div className="xl:row-span-2 pl-2 xl:pl-12 xl:pb-20 xl:w-full">
                        <h1 className={`text-4xl font-medium primary-color-${mood} pl-8 pt-4 font-${mood} transition-all duration-2500`}>aboutMe()</h1>
                        <h2 className={`text-base xl:text-lg text-color-${mood} pl-8 pt-2 xl:pt-5 w-11/12 font-${mood} transition-all duration-2500`}>I am a 20 year old student who loves technology, websites and applications. The drive to be able to create this myself is the main reason why I wanted to learn how to code. In September 2021, my mct journey started at the Howest in Kortrijk (Belgium), mct also known as multimedia and creative technologies.</h2>
                        <h2 className={`text-base xl:text-lg text-color-${mood} pl-8 pt-2 xl:pt-5 w-11/12 pb-0 xl:pb-4 font-${mood} transition-all duration-2500`}>In the second year (semester 3) the students have to make a choice for a sub-direction. During the course of the first 3 semesters and the several projects, I learned that my preference lies in design and front-end development. The choice for the sub-direction 'Next web developer' was obvious. I am currently in my second year at mct and every day my knowledge grows as well as the enthusiasm to put this knowledge in practise.</h2>
                        <h1 className={`text-4xl font-medium primary-color-${mood} pl-8 xl:pt-0 pt-4 font-${mood} transition-all duration-2500`}>skills()</h1>
                        <div className="w-5/6 ml-4 grid col-auto">
                            <div className='flex flex-wrap'>
                                <Skill title="React" years="+1 Year" />
                                <Skill title="React native" years="+1 Year" />
                                <Skill title="Next js" years="<1 Year" />
                                <Skill title="Html & css" years="+2 Year" />
                                <Skill title="Javascript" years="+2 Year" />
                                <Skill title="python" years="+2 Year" />
                                <Skill title="Figma" years="+1 Year" />
                                <Skill title="Adobe xd" years="+2 Year" />
                                <Skill title="c#" years="+2 Year" />
                                <Skill title="sql" years="+2 Year" />
                                <Skill title="Prismic" years="<1 Year" />
                                <Skill title="Github" years="+2 Year" />
                                <Skill title="Vue js" years="<1 Year" />
                            </div>
                            
                        </div>
                </div>
                <div className="hidden xl:grid row-span-2 pr-36">
                    <div className="grid grid-rows-3 grid-flow-col gap-14">
                        <div className="row-span-3 w-56 pt-20">
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-2 font-${mood} transition-all duration-2500`}>June 2021</h3>
                            <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Finishing high shool with a degree for human sciences</h4>
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-48 font-${mood} transition-all duration-2500`}>June 2022</h3>
                            <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Finishing my first project: Cash Car</h4>
                        </div>
                        <img className="row-span-3 transition-all duration-2500" src={`/pictures/timeline-${mood}.png`} alt="Timeline"/>
                        <div className="row-span-3 pt-52 w-56">
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-3 font-${mood} transition-all duration-2500`}>September 2021</h3>
                            <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Starting in mct at Howest</h4>
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-56 font-${mood} transition-all duration-2500`}>February 2023</h3>
                            <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Finishing my first teamproject: Dokemaca</h4>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block xl:hidden pb-16">
                    <h1 className={`text-4xl font-medium primary-color-${mood} pl-10 xl:hidden block pb-6 font-${mood} transition-all duration-2500`}>history()</h1>
                        <div className="grid grid-rows-2 grid-flow-col w-1/2 pl-32 gap-32">
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood} font-${mood} transition-all duration-2500`}>June 2021</h3>
                                <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Finishing high shool with a degree for human sciences</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood} font-${mood} transition-all duration-2500`}>June 2022</h3>
                                <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Finishing my first project: Cash Car</h4>
                            </div>                            
                        </div>
                        <img className="pl-10 transition-all duration-2500" src={`/pictures/timeline_flat-${mood}.png`} alt="Timeline"/>
                        <div className="grid grid-rows-2 grid-flow-col pl-64 pt-10 w-7/12 gap-40">
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood} font-${mood} transition-all duration-2500`}>September 2021</h3>
                            <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Starting in mct at Howest</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood} font-${mood} transition-all duration-2500`}>February 2023</h3>
                            <h4 className={`xl:text-lg text-color-${mood} font-${mood} transition-all duration-2500`}>Finishing my first teamproject: Dokemaca</h4>
                            </div>                            
                        </div>
                </div>
            </div>
        </main>
    )
}