'use client'
import Skill from '../components/Skill';
import {useAtom} from 'jotai'
import { moodAtom } from '../../../jodai'
import { useEffect } from 'react';
 
export default function Page () {

  const [mood, setMood] = useAtom(moodAtom)

  useEffect(() => {
  if (typeof window !== 'undefined') {
    document.body.classList.remove('neutral', 'happy', 'sad', 'angry');
    document.body.classList.add(mood);
  }
}, [mood]);

    return(
        <main className="overflow-hidden">
            <div className="block xl:grid xl:grid-rows-2 xl:grid-flow-col pt-6 pb-20 lg:pb-0 xl:pt-16 gap-24 overflow-auto">
                <div className="xl:row-span-2 pl-2 xl:pl-12 xl:pb-20 xl:w-full">
                        <h1 className={`text-4xl font-medium primary-color-${mood} pl-8 pt-4`}>aboutMe()</h1>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5 w-11/12">I am a 20 year old student who loves technology, websites and applications. The drive to be able to create this myself is the main reason why I wanted to learn how to code. In September 2021, my mct journey started at the Howest in Kortrijk (Belgium), mct also known as multimedia and creative technologies.</h2>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5 w-11/12 pb-0 xl:pb-4">In the second year (semester 3) the students have to make a choice for a sub-direction. During the course of the first 3 semesters and the several projects, I learned that my preference lies in design and front-end development. The choice for the sub-direction 'Next web developer' was obvious. I am currently in my second year at mct and every day my knowledge grows as well as the enthusiasm to put this knowledge in practise.</h2>
                        <h1 className={`text-4xl font-medium primary-color-${mood} pl-8 xl:pt-0 pt-4`}>skills()</h1>
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
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-2`}>June 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-48`}>June 2022</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                        </div>
                        <img className="row-span-3" src={`/pictures/timeline-${mood}.png`} alt="Timeline"/>
                        <div className="row-span-3 pt-52 w-56">
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-3`}>September 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Starting in mct at Howest</h4>
                            <h3 className={`xl:text-3xl primary-color-${mood} pt-56`}>February 2023</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block xl:hidden pb-16">
                    <h1 className={`text-4xl font-medium primary-color-${mood} pl-10 xl:hidden block pb-6`}>history()</h1>
                        <div className="grid grid-rows-2 grid-flow-col w-1/2 pl-32 gap-32">
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood}`}>June 2021</h3>
                                <h4 className="xl:text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood}`}>June 2022</h3>
                                <h4 className="xl:text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                            </div>                            
                        </div>
                        <img className="pl-10" src={`/pictures/timeline_flat-${mood}.png`} alt="Timeline"/>
                        <div className="grid grid-rows-2 grid-flow-col pl-64 pt-10 w-7/12 gap-40">
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood}`}>September 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Starting in mct at Howest</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className={`xl:text-3xl primary-color-${mood}`}>February 2023</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                            </div>                            
                        </div>
                </div>
            </div>
        </main>
    )
}