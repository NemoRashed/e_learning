import React from 'react'
import images from '../../../assets';
import Button from '../Button';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (

  <footer className='bg-dimOrange flexCenter flex-col border-t dark:border-gray-50 
   border-gray-50 sm:py-8 py-16'>

<div className=' w-full minmd:w-4/5 flex flex-row md:flex-col 
sm:px-4 px-16 '>
<div className='flexStart flex-1 flex-col'>
<div className='flexCenter cursor-pointer '>
    <img src='https://www.bing.com/th?id=OIP.Ee9M6zesnrqGXt_i-hNSBwHaHa&w=150&h=151&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    objectFit= 'contain' width={32} height={32}  alt="logo" />
<Link to ='/'><p className='dark:text-white text-black
 font-semibold text-lg ml-1
 bg-orange-300  rounded-md p-2'>E-learning Platform</p></Link>
</div>
<p className= 'font-poppins dark:text-white text-black font-semibold text-base mt-6 '>Get the Latest Updates</p>
<div className='flex-between md:w-full minlg:w-557 w-357 mt-6 dark:bg-white bg-orange-100
 border border-black rounded-md text-black '>
<input type="email"
placeholder='Your Email...' 
className='h-full flex-1 w-full dark:bg-white bg-dimWhite  font-normal p-3
text-xs minlg:text-lg outline-none ' />

<div className='flex-initial'>
{/* <Button btnName= 'Email me'
classStyless= 'rounded-md'></Button> */}
</div>
</div>
</div>
</div>


<div className='flexCenter w-full mt-5 border-t dark:border-gray-400 border-gray-100
sm:px-4 px-16'>
  <div className='flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7'>
<p className='font-poppins dark:text-white text-gray-900 
 text-base'>E-Learning Platform, <span className='font-semibold underline'>SiraadDev</span>. All Rights Reserved</p>
 <div className='flex flex-row sm:mt-4'>


 {[images.instagram, images.twitter, images.telegram, images.discord].map
  ((image, index)=> (
    <div className='mx-1 cursor-pointer bg-primary rounded-md p-1'>
     <img src= {image} 
     objectFit='contain'
     width={24}
     height={24}
     alt="social" />
    </div>
  ))}

  </div>

  </div>
</div>



  </footer>
  )
}

export default Footer