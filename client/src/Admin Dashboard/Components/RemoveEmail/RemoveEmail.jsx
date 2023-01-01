import { useRef } from 'react';
import images from '../../../assets';

const RemoveEmail = ({handleClose, mainbody, footer,header}) => {
    const RemoveEmailRef = useRef(null);

    const handleClickOutside= (e) => {
        if (RemoveEmailRef.current && !RemoveEmailRef.current.contains
            (e.target)) { 
        handleClose();
       }
    };

  return ( 
    <>
    <div className='flexCenter fixed inset-0 z-10
     backdrop-brightness-50 bg-white/5 animated fadeIn '
       onClick={handleClickOutside}>
<div ref={RemoveEmailRef}
className='w-2/5 md:w-11/12 minlg:w-2/4 dark:bg-slate-600 bg-white
flex flex-col rounded-lg'>
<div 
className='flex justify-end mt-4 mr-4 minlg:mt-6 minlg:mr-6'
>
<div className=''
onClick={handleClose}>
<img src={images.cross} 
className='bg-primary rounded-md p-1 relative 
w-7 h-7 minlg:w-6 minlg:h-6 cursor-pointer mb-1'
 layout= 'fill' 
 alt="" />
 </div>
 </div>
<div className='flexCenter w-full text-center p-4'>
<h2 className='font-poppins dark:text-white 
text-black font-normal text-xl'>{header}</h2></div>
<div className='p-10 sm:px-4 border-t border-b dark:border-white'>
   
{mainbody}
     
     </div>
<div className='flexCenter p-4'>{footer}</div>
 </div>
   </div>
        </>
  )
}

export default RemoveEmail