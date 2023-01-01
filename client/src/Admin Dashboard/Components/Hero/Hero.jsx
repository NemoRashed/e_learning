import React from 'react'
import Banner from './Banner'
import { useState, useEffect, useRef } from 'react'
import images from '../../../assets';
import { makeId } from '../../../utils/makeId';
import SearchBar from '../SearchBar';
import TopCourses from '../Top Courses/TopCourses';

const Hero = () => {
  const [hideButtons, sethideButtons] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
 
  // console.log(`heey ${makeId(7)}}`)

const handleScroll = (direction)=> {
  const {current} = scrollRef;

  const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

// current.scrollLeft -= 100;


if (direction === 'left'){
  current.scrollLeft -= scrollAmount;
} else {
  current.scrollLeft += scrollAmount;
}
};

const isScrollable = () => {
  const {current } = scrollRef;
  const {current: parent } = parentRef;

  if (current?.scrollWidth >= parent?.offsetWidth){
    sethideButtons(false);
  } else {
    sethideButtons(true);
  }
};

useEffect(()=> {

isScrollable();
window.addEventListener('resize', isScrollable);

return () => {
  window.removeEventListener('resize', isScrollable);
};
});



  return (  

    <div className=' flex justify-center sm:px-4 p-12'>
      <div className='w-full minmd:w-4/5'>
      <Banner 
      name='one of the best E Learning platform in Somaliland '
      childStyles='md:text-4xl sm:text-2xl xs=text-xl 
      text-left'
      parentStyles='justify-start mb-6 h-72 sm:h-60 p-12
      xs:p-4 xs:h-44 rounded-3xl'
    
      />
<div >
<h1 className='font-poppins dark:text-white
  text-2xl minlg:text-4xl 
font-semibold ml-4 xs:ml-0'>Your <span className='font-extrabold 
blue-pink-orange-gradient rounded-md px-2'>
 Top Courses </span></h1>

<div className='relative flex-1 max-w-full flex 
mt-3'
ref={parentRef}> 
<div  
className='flex flex-row w-max 
overflow-x-scroll
no-scrollbar select-none' ref={scrollRef}>
{[6, 2, 8, 5, 10 ].map((i) => (

  <TopCourses
  key={`student-${i}`}
  rank={i}
  courseImage= {images[`course${i}`]}
  courseName= {`course ${i}`}
  coursePrice= {100 - i * 2}
  />
  // {`0x${makeId(3)}...${makeId(4)}`}
))}
{!hideButtons && (


<>
<div 
onClick={() => handleScroll('left')}
className='absolute w-8 h-8 minlg:w-12
minlg:h-12 top-45 cursor-pointer left-0 
bg-primary rounded-md'>
  <img
  src={images.left}
  layout = 'fill'
  objectFit= 'contain'
  alt='left_arrow'
  />
</div>
<div 
onClick={() => handleScroll('right')}
className='bg-primary absolute w-8 h-8 minlg:w-12
minlg:h-12 top-45 cursor-pointer right-0 rounded-md'>
  <img
  src={images.right}
  layout = 'fill'
  objectFit= 'contain'
  alt='right_arrow'
  />
</div>
</>
)}
</div>
</div>
</div>


<div className='mt-10'>

</div>








</div>
</div>
  )
}

export default Hero