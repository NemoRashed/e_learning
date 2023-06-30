import React from 'react'
import images from '../../../assets';
import {AiFillStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
const TopCourses = ({rank, courseImage, 
  courseName,coursePrice}) => { 
  return (
    <>
 <div className="">
                {/* Remove py-8 */}
                <div className="mx-auto container ">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8 ">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44 rounded-md" />
                            </div>
                            <div className="rounded-md border border-1-black">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-black">4 Modules</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Course X</h2>
                                        <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, omnis.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Money back grantee </p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Started</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className='flex justify-start text-2xl text-yellow-300 md:text-xl 
                                        sm:lg xs:sm '>
                                        <p><AiFillStar/></p>  
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><BsStarHalf/></p>
                                        </div>
                                        
                                        <div className='bg-indigo-200 rounded-lg px-1'>
                                          <h3 className="text-black text-xl font-semibold">$350</h3></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}
                        {/* Card 2 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8 ">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44 rounded-md" />
                            </div>
                            <div className="rounded-md border border-1-black">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-black">6 Modules</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Course YY</h2>
                                        <p className="text-xs text-gray-600 pl-5">2 days ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, omnis.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Money back grantee </p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Starting Soon</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className='flex justify-start text-2xl text-yellow-300 md:text-xl 
                                        sm:lg xs:sm '>
                                        <p><AiFillStar/></p>  
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><BsStarHalf/></p>
                                        </div>
                                        
                                        <div className='bg-indigo-200 rounded-lg px-1'>
                                          <h3 className="text-black text-xl font-semibold">$430</h3></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 Ends */}
                        {/* Card 3  */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8 ">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44 rounded-md" />
                            </div>
                            <div className="rounded-md border border-1-black">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-black">11 Modules</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Course YY-Y</h2>
                                        <p className="text-xs text-gray-600 pl-5">1 Month ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, omnis.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Money back grantee </p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Started</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className='flex justify-start text-2xl text-yellow-300 md:text-xl 
                                        sm:lg xs:sm '>
                                        <p><AiFillStar/></p>  
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><BsStarHalf/></p>
                                        </div>
                                        
                                        <div className='bg-indigo-200 rounded-lg px-1'>
                                          <h3 className="text-black text-xl font-semibold">$1,500</h3></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 Ends */}
                        {/* Card 4  */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8 ">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44 rounded-md" />
                            </div>
                            <div className="rounded-md border border-1-black">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-black">12 Modules</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Course XX-X</h2>
                                        <p className="text-xs text-gray-600 pl-5">4 Months ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, omnis.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Money back grantee </p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Started</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className='flex justify-start text-2xl text-yellow-300 md:text-xl 
                                        sm:lg xs:sm '>
                                        <p><AiFillStar/></p>  
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><AiFillStar/></p>
                                          <p><BsStarHalf/></p>
                                        </div>
                                        
                                        <div className='bg-indigo-200 rounded-lg px-1'>
                                          <h3 className="text-black text-xl font-semibold">$1,370</h3></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 Ends */}
                    </div>
                   
                </div>
            </div>





</>


  )
}

export default TopCourses






  {/* <p className= 'mt-1 font-poppins dark:text-white
    text-black font-semibold text-base '>
    {createEths.toFixed(2)} <span className= 'font-normal'>
    Eth </span>
    </p> */}



















        {/* <div
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
</div> */}