import React from 'react'
import images from '../../../assets';
const TopCourses = ({rank, courseImage, 
  courseName,coursePrice}) => { 
  return (
    <div
    className='min-w-190 minlg:min-w-240
    dark:bg-gray-500 bg-white border dark:border-gray-300 border-dimOrange rounded-3xl 
    flex flex-col p-4 m-4'>
        <div className='w-8 h-8 minlg:w-10 minlg:h-10
        bg-primary flexCenter rounded-full'>

            <p className='font-poppins text-white first-letter:font-semibold
            test-base minlg:text-lg'>{rank}
            </p>
        </div>
<div className='my-2 flex justify-center'>
    <div className='relative w-20 h-20 minlg:w-28
    minlg:h-28'>
        <img
        src={courseImage}
        layout= 'fill'
        objectFit= 'cover'
        alt= 'creatorName'
        className='rounded-full'
        />
<div className='absolute w-4 h-4 minlg:w-7 minlg:h-7
bottom-2 -right-0 bg-purple-400'>
    <img
    src={images.tick}
    layout= 'fill'
    objectFit='contain'
    alt= 'tick'/>
</div>
</div>
</div>

<div className='mt-3 minlg:mt-7 text-center flexCenter
flex-col'> 
    <p className='font-poppins dark:text-white
    text-black font-semibold text-base'>
     {courseName}
        </p> 

        <p className='mt-1 font-poppins dark:text-white
         text-black font-semibold text-base'>
    {coursePrice.toFixed(2)} <span className= 'font-normal'>
    Sl.Sh </span>
    </p>
  

</div>
        </div> 
  )
}

export default TopCourses






  {/* <p className= 'mt-1 font-poppins dark:text-white
    text-black font-semibold text-base '>
    {createEths.toFixed(2)} <span className= 'font-normal'>
    Eth </span>
    </p> */}