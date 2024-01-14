'use client'
import { useState } from "react";
import {useAtom} from 'jotai'
import { moodAtom } from '../../../jodai'

interface SkillProps {
  title: string;
  years: string;
}

const Skill: React.FC<SkillProps> = ({ title, years }) => {
  const [isHovering, setIsHovering] = useState(true);

  const [mood, setMood] = useAtom(moodAtom)

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div className="relative flex flex-wrap">
      {isHovering ? (
        <div
          onMouseEnter={handleHover}
          className={`px-3.5 md:px-5 py-2 md:py-2.5 border-4 border-solid border-color-${mood} border-radius-skills-${mood} h-12 md:h-14 text-color-${mood} items-center mx-2 md:text-2xl mt-4 font-${mood}`}
        >
          {title}
        </div>
      ) : (
        <div
          onMouseLeave={handleHover}
          className={`px-3.5 md:px-5 py-2 md:py-2.5 border-4 border-solid border-color-${mood} border-radius-skills-${mood} h-12 md:h-14 text-color-${mood} items-center mx-2 md:text-2xl mt-4 font-${mood}`}
        >
          {years}
        </div>
      )}
    </div>
  );
};

export default Skill;
