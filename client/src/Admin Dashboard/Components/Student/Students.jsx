import React from 'react'
import images from '../../../assets';
import {Link} from 'react-router-dom';
 
const Students = ({course}) => {
  
    return (
        <div> 
     <Link to ='/DetailedStudent'>
        <div className='flex-1 min-w-215 max-w-max
        xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256
        minlg:min-w-327 dark:bg-gray-400 blue-pink-orange-gradient rounded-2xl p-4 m-4
        minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md'>
    
    
        <img src= {course.image 
            || 
            images[`student${course.i}`]} 
            layout='fill'
            alt={`course${course.i}`} 
            objectFit='cover'
            className={`relative w-full h-52 sm:h-36
            xs:h-56 mind:h-60 minlg:h-300
            rounded-2xl overflow-hidden `}/>
    
    
    <div className='mt-3 flex flex-col '>
    
    <p className='font-poppins dark:text-white text-black font-semibold
    text-sm minlg:text-xl'>{course.name}</p>
    
    <div className='flexBetween mt-1 minlg:mt-3 flex-row
    xs:flex-col xs:items-start xs:mt-3'>
    
    <p className='font-poppins dark:text-white text-black font-semibold
    text-xs minlg:text-lg'>
        {course.price} 
    <span className='normal'> S.Sh </span>
    </p>
    <p className='font-poppins dark:text-white text-black font-semibold
    text-xs minlg:text-lg'>{course.seller}</p>
    </div>
    </div>
    
    
        </div>
    </Link>
    
    
        </div>
      )
}

export default Students;