import React from 'react'

const Input = ({type, title, placeholder,
handleClick }) => {
  return (
<>
    <div className='mt-10 w-full '>
    <p className='font-poppins dark:text-white
 text-black font-semibold text-xl'>
{title}
</p>

{type === 'number' ? (
  <div className='dark:bg-gray-500 bg-pink-100 border
  dark:border-white border-pink-300 rounded-lg w-full outline-none
  font-poppins dark:text-white text-black text-base mt-4 px-4 py-3
  flexBetween flex-row'>
    <input
    type='number'
    className='flex w-full dark:bg-gray-400 bg-pink-100 
    outline-none'
    placeholder={placeholder}
   onChange= {handleClick}
/>
<p className='font-poppins dark:text-white
 text-black font-semibold text-xl'>S.Sh</p>
  </div>

) : type === 'textarea' ? (
  <textarea
  rows={10}
  className='dark:bg-gray-500 bg-orange-100 border
 dark:border-white border-orange-200 rounded-lg w-full outline-none
 font-poppins dark:text-white text-black text-base mt-4 px-4 py-3
 '
 placeholder={placeholder}
onChange= {handleClick}
  />
)
:(
<input 
className='dark:bg-gray-500 bg-pink-100 border
 dark:border-white border-pink-300 rounded-lg w-full outline-none
 font-poppins dark:text-white text-black text-base mt-4 px-4 py-3
 '
type={type}
placeholder={placeholder}
onChange= {handleClick}
/>
)
}




      </div>

      </>
  );
}

export default Input