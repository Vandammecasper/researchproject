'use client'
import Link from "next/link";
import {useAtom} from 'jotai'
import { moodAtom } from '../../../jodai'

export default () => {

  const [mood, setMood] = useAtom(moodAtom)

  return (
    <header className={`hidden w-100% h-24 lg:grid grid-rows-2 grid-flow-col header-background-${mood}`}>
      <div className='row-span-2 w-5/6 flex'>
        <Link href={'/'}>
          <div className=''>
            <h1 className={`header-text-color-${mood} text-2xl pt-8 pl-20 font-bold font-${mood}`}>Casper Van Damme</h1>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
          <img className="pt-9 pl-4" src={`/icons/linkedin-${mood}.png`} alt="linkedin icon"/>
        </Link>
      </div>
        <div className='row-span-2 justify-self-end pt-2'>
          <div className='grid grid-rows-4 grid-flow-col justify-items-end pr-20 gap-16'>
            <Link className={`row-span-4 header-text-color-${mood} text-xl pt-6 font-semibold h-20 font-${mood}`} href={'/about'}>About</Link>
            <Link className={`row-span-4 header-text-color-${mood} text-xl pt-6 font-semibold h-20 font-${mood}`} href={'/projects'}>Projects</Link>
            <div className={`border-color-${mood} border-4 mt-4 p-2 border-radius-${mood}`}>
              <Link className={`row-span-4 header-text-color-${mood} text-xl font-semibold pt-6 font-${mood}`} href={'/contactme'}>Contact Me</Link>
            </div>
            <div className={`row-span-4 flex justify-center items-center w-14 h-14 rounded-full mt-3 primary-background-color-${mood}`}>
              <img className="h-10" src={`/icons/mood-${mood}.png`} alt="mood icon" />
            </div>
          </div>
        </div>
    </header>
  );
};

