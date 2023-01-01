import React from 'react'
import images from '../../assets';
const Loader = () => {


  return (
    <div>
<div className=''>
    <img 
    src={images.myloader} 
    width={100}
    objectFit='contain'
    className='flexCenter w-full my-4'
    alt="loader" />
   

</div>



    </div>
  )
}

export default Loader