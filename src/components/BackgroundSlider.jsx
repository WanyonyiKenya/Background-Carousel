import React, { useState, useEffect } from 'react'
import  './backgroundslider.css'
import Images from '../data'

const BackgroundSlider = () => {
    const [imageNo, setImageNo] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            imageNo===2 ? setImageNo(0) : setImageNo(imageNo+1)
        }, 5000);
        return () => clearTimeout(timer)
    }, [imageNo]);
    const bgImageStyles = {
        backgroundImage: `url(${Images[imageNo].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const gotoNext = () => {
        setImageNo(imageNo)
    }
  return (
    <div className=' container'>
        <div style={bgImageStyles}></div>
        <div className='shade'></div>
        <div className='description'>
            <div>
                <h1>
                    {Images[imageNo].title}
                </h1>
                <p>
                    {Images[imageNo].body}
                </p>
            </div>
            <div className='carousel'>
                {
                    Images.map((Images, imageNo)=> (
                        <span key={imageNo} onClick = {()=>gotoNext(imageNo)}></span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BackgroundSlider