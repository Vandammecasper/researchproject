'use client'
import React from 'react';
import Link from 'next/link';
import {useAtom} from 'jotai'
import { moodAtom } from '../../../jodai'

function BottomNav() {
  const [mood, setMood] = useAtom(moodAtom)
  return (
    <nav className={`header-background-${mood} fixed bottom-0 left-0 right-0 z-30 lg:hidden pl-2 pr-2 transition-all duration-2500`}>
      <div className="mx-auto px-4 py-2 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 pt-4">
            <Link href={'/'}>
                <img src="/icons/home.png" alt="home icon"/>
            </Link>
            <Link href={'/about'}>
                <img src="/icons/about.png" alt="about icon"/>
            </Link>
            <Link href={'/projects'}>
                <img src="/icons/projects.png" alt="projects icon"/>
            </Link>
            <Link href={'/contactme'}>
                <img src="/icons/contact.png" alt="contact icon"/>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;