'use client'
import Lottie from "lottie-react"
import React from 'react'
import avatar from '../../../public/avatars/avatar_loop.json'


export default ()=> {
    return(
    <div>
          <Lottie animationData={avatar} loop={true}/>
    </div>
    )
}