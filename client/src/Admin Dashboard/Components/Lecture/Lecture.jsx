import { useState } from 'react';
import {BsCircleFill, BsCircleHalf} from 'react-icons/bs';
import {MdOndemandVideo} from 'react-icons/md';
import {ImSad2} from 'react-icons/im';
import Button from '../Button';
import RemoveEmail from '../RemoveEmail/RemoveEmail';
import {VscDebugDisconnect} from 'react-icons/vsc';

const Lecture = () => {
  const [deleteVideo, setDeleteVideo] = useState(false);
  const [ChangeMe, setChangeMe] = useState(true);
  return (

    <> 
    <div
        className="relative flex justify-center
  md:flex-col min-h-screen"> 
        <div className="relative flex-1 flex-center sm:px-4
    p-12 border-r md:border-r-0 md:border-b dark:border-white
    border-white">

        <div className='flex flex-row items-center '>
   <h1 className='font-poppins px-6 sm:px-3 p-2
   w-2/3 bg-orange-200 rounded-xl sm:w-full text-lg'>
    <span className='font-extrabold'> Add </span>  
    Another Module +</h1> 
  </div>


 <div className="rounded-md shadow-lg
     relative w-2/3 sm:w-full sm:h-300 h-300
      bg-white overflow-y-auto ">



<div className='flex flex-col '>
    <div className='flex  cursor-pointer
     bg-green-100 w-full p-4 mb-3'>

     <div className='flex '>
  <BsCircleFill
 className='text-2xl mr-2'/>
</div>
            <div className='ml-3 flex flex-row items-center'>
            <MdOndemandVideo
          className='text-2xl mr-2'/>
                <p className='font-poppins text-xl sm:lg'>Module (One)</p>
                </div>
</div>


          <div className='flex  cursor-pointer
     bg-green-100 w-full p-4 mb-3'>
        
     <div className='flex '>
  <BsCircleFill
 className='text-2xl mr-2'/>
</div>
            <div className='ml-3 flex flex-row items-center'>
            <MdOndemandVideo
          className='text-2xl mr-2'/>
                <p className='font-poppins text-xl sm:lg'>Module (Two)</p>
                </div>
</div>

<div className='flex  cursor-pointer
     bg-green-100 w-full p-4 mb-3'>
        
     <div className='flex '>
  <BsCircleHalf
 className='text-2xl mr-2'/>
</div>
            <div className='ml-3 flex flex-row items-center'>
            <MdOndemandVideo
          className='text-2xl mr-2'/>
                <p className='font-poppins text-xl sm:lg'>Module (Three)</p>
                </div>
</div>

<div className='flex  cursor-pointer
     bg-green-100 w-full p-4 mb-3'>
        
     <div className='flex '>
  <BsCircleHalf
 className='text-2xl mr-2'/>
</div>
            <div className='ml-3 flex flex-row items-center'>
            <MdOndemandVideo
          className='text-2xl mr-2'/>
                <p className='font-poppins text-xl sm:lg'>Module (Four)</p>
                </div>
</div>
         
<div className='flex  cursor-pointer
     bg-green-100 w-full p-4 mb-3'>
        
     <div className='flex '>
  <BsCircleHalf
 className='text-2xl mr-2'/>
</div>
            <div className='ml-3 flex flex-row items-center'>
            <MdOndemandVideo
          className='text-2xl mr-2'/>
                <p className='font-poppins text-xl sm:lg'>Module (Five)</p>
                </div>
</div>

<div className='flex  cursor-pointer
     bg-green-100 w-full p-4 mb-3'>
        
     <div className='flex '>
  <BsCircleHalf
 className='text-2xl mr-2'/>
</div>
            <div className='ml-3 flex flex-row items-center'>
            <MdOndemandVideo
          className='text-2xl mr-2'/>
                <p className='font-poppins text-xl sm:lg'>Module (Six)</p>
                </div>
</div>
</div>





        </div>
    </div>

    <div className="flex-1 justify-start sm:px-4 p-12 sm:pb-4 w-full">
          <div className="flex flex-row sm:flex-col ">
            <h2
              className="font-poppins dark:text-white text-black
font-semibold text-2xl minlg:text-3xl"
            >
         Module (One)
            </h2>
            </div>
{ChangeMe ? (
<div className='rounded-md shadow-lg
     relative w-full sm:w-full sm:h-300 h-300
      bg-white mt-5'>
<video width="750" height="500" controls >
      <source src="https://youtu.be/1t9REjcBEIY" type="video/mp4"/>
     </video>
</div>
) : (
  <div className='rounded-md shadow-lg
     relative w-full sm:w-full sm:h-300 h-300
       mt-5 bg-slate-200'>
      <div className="px-12 sm:px-4  items-center flex justify-center flex-col-reverse lg:flex-row md:gap-2 gap-3">
   <div className=" w-full relative pb-6 lg:pb-4">
   <div className="relative">
   <div className="absolute">
   <div className>
   <h1 className=" text-gray-800 font-bold text-2xl">
 Looks like you've found the
 doorway to the great nothing
</h1>
 <p className=" text-gray-800 font-poppins">Sorry about that! We are willing to see you enjoying to see 
   how it will look like after we Connect it to the
   <span className='text-xl bg-yellow-300 rounded-lg'>
  backEnd.
 </span></p>
</div>
  </div>
                        <div className='bg-orange-300 rounded-md p-1'>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>
                    </div>
                </div>
                <div className='bg-orange-300 rounded-md p-1 '>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div>
            </div>

  </div>
)}


<div
className="w-full border-b dark:border-white border-primary
flex flex-row mt-10">
          
            </div>
<p className='font-poppins text-lg'>Details</p>

<div className='flex flex-row sm:flex-col justify-between
mt-5 '>
<Button
  btnName='Change It'
  classStyles=' mr-5 sm:mr-0 rounded-br-3xl rounded-tl-3xl sm:mb-5'
handleClick={() => setChangeMe ((prev) => !prev)}
// <option onClick={()=> SetFindme ((prev) => !prev)}> 
/>


<Button
  btnName='Delete It'
  classStyles='mr-5 sm:mr-0 rounded-br-3xl rounded-tl-3xl'
  handleClick={() => setDeleteVideo (true)}
  
  />
</div>
{deleteVideo && (

<RemoveEmail
 header= {<ImSad2
 className='w-10 h-10 sm:w-6 sm:h-6 text-yellow-400 rounded-full bg-black'/>}
 mainbody={(
   <div className=''>
    <p className="font-poppins"> Are you sure to Remove This
     <span 
     className="bg-primary m-1 px-1
     rounded-tl-xl rounded-br-xl text-white underline cursor-pointer
     hover:text-black ">
        Module</span> ?</p>
     </div>
 )}
 footer={(
  <div className="flex flex-row sm:flex-col">
<Button 
btnName= 'Delete' 
classStyles='mr-5 sm:mb-5 sm:mr-0 rounded-xl'
// handleClick={() => setEditCourse(true)} 
/>
<Button 
btnName= 'Cancel'
classStyles='mr-5 sm:mr-0 rounded-xl'
handleClick={() => setDeleteVideo(false)}
/>
</div>
  )}
  handleClose={()=>setDeleteVideo(false) }
/>
)}


            </div>



            </div>
    </>
  )
}

export default Lecture