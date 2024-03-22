import React from 'react'
import Lottie from "lottie-react";
import animationData from '../../assets/animations/Loader.json';
import './Loader.scss'
export default function Loader() {
  return (
    <div className='loader'>
    <Lottie animationData={animationData}/>

    </div>
  )
}
