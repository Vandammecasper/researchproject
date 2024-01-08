'use client'

import { useState } from "react"


export default  (title:any, years:any) => {
    const [isHovering, setIsHovering] = useState(true)
    console.log(title, years)

  const handleHover = () => {
    setIsHovering(!isHovering)
  }
    return(
        <div className="py-2">
            {isHovering ? 
            <div onMouseEnter={handleHover} className="px-5 py-2 border-4 border-solid border-sky-500 rounded-3xl h-12 text-white items-center mx-2 text-xl mt-4">
                {title.title}
            </div> : 
            <div onMouseLeave={(handleHover)} className="px-5 py-2 border-4 border-solid border-sky-500 rounded-3xl h-12 text-white items-center mx-2 text-xl mt-4">
                {title.years}
            </div> 
            }
        </div>
    )
}