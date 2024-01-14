'use client'
import React, { useEffect } from 'react'
import Logo from './components/logo'
import './globals.css'
import {useAtom} from 'jotai'
import { moodAtom } from '../../jodai'

export default function Page () {

  const [mood, setMood] = useAtom(moodAtom)

  useEffect(() => {
  if (typeof window !== 'undefined') {
    document.body.classList.remove('neutral', 'happy', 'sad', 'angry');
    document.body.classList.add(mood);
  }
}, [mood]);

    return(
        <main>
            <div className="w-screen h-90% grid lg:grid-rows-2 lg:grid-flow-col lg:gap-80 justify-items-center lg:pt-28">
                <div className="block md:hidden w-80 pt-6">
                <Logo/>
                </div>
                <div className="hidden md:block lg:hidden w-80 pt-6">
                  <Logo/>
                </div>
                <div className="row-span-2 lg:mt-12 3xl:mt-24">
                    <h2 className={`text-3xl md:text-4xl 3xl:text-5xl font-medium text-color-${mood} pl-10 pt-2 lg:pl-20 lg:pt-8 3xl:pl-0 font-${mood}`}>Hello, I am</h2>
                    <h1 className={`text-5xl md:text-6xl 3xl:text-8xl font-bold primary-color-${mood} pt-3 pl-10 lg:pl-20 3xl:pl-0 font-${mood}`}>Casper</h1>
                    <h1 className={`text-5xl md:text-6xl 3xl:text-8xl font-bold primary-color-${mood} pl-10 lg:pl-20 3xl:pl-0 font-${mood}`}>Van Damme</h1>
                    <h4 className={`text-2xl md:text-3xl 3xl:text-4xl font-medium text-color-${mood} pt-3 pl-10 lg:pl-20 3xl:pl-0 font-${mood}`}>
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