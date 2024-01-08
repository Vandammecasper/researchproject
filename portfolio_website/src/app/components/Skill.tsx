// Skill.js
import { useState } from "react";

interface SkillProps {
  title: string;
  years: string;
}

const Skill: React.FC<SkillProps> = ({ title, years }) => {
  const [isHovering, setIsHovering] = useState(true);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div className="relative flex flex-wrap">
      {isHovering ? (
        <div
          onMouseEnter={handleHover}
          className="px-3.5 md:px-5 py-2 md:py-2.5 border-4 border-solid border-sky-500 rounded-3xl h-12 md:h-14 text-white items-center mx-2 md:text-2xl mt-4"
        >
          {title}
        </div>
      ) : (
        <div
          onMouseLeave={handleHover}
          className="px-3.5 md:px-5 py-2 md:py-2.5 border-4 border-solid border-sky-500 rounded-3xl h-12 md:h-14 text-white items-center mx-2 md:text-2xl mt-4"
        >
          {years}
        </div>
      )}
    </div>
  );
};

export default Skill;
