import React from 'react'
import { useState,} from 'react';
import images from '../../../assets';
import Students from '../Student/Students';
import Loader from '../Loader';
import Banner from '../Hero/Banner';
import SearchBar from '../SearchBar';

import { makeId } from '../../../utils/makeId';


const AllStudents = () => {
  const [course, setCourse] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [activeSelect, SetActiveSelect]= useState('Recently Added');
  const [students, setstudents] = useState([]);
  const [courseCopy, setcourseCopy] = useState([]);
  if(isLoading){
    return(
      <div className='flexStart min-h-screen'>
      <Loader/>
    </div>
    )}

const onHandleSearch = (value) => {
// value -> test
// iyo array [{name:'mona', name:'Ahmed'}];
const filterCourses = course.filter(({name}) =>
name.toLowerCase().includes(value.toLowerCase()));

if(filterCourses.length){
  setCourse(filterCourses);
} else{
  // waxad so celin karaa no courses found 
  // Re-show All the courses tan ba ila qurux badatay
  setCourse(filterCourses);
}
};

    return (
      <>
  <div className='w-full flex justify-start items-center
  flex-col min-h-screen '>
  <div className='w-full flexCenter flex-col '>
  <Banner
  name= 'Your Students'
  childStyles='text-center mb-4 '
  parentStyles='h-80 justify-center '
  
  />
  <div className='flexCenter flex-col -mt-20 z-0'>
  <div>
    <img src={images.student7} alt="student7" 
    className='rounded-full flexCenter w-40 h-40 
    sm:w-36 sm:h-36 p-1 bg-purple-400'/>
  </div>
  
  <p className='font-poppins text-black
  dark:text-white font-semibold text-2xl mt-6'>Admin.Hebel..hebel</p>
  
  </div>
  </div>
  
  
  {!isLoading && !students.length ?  (
  
  <div className='sm:px-4 p-12 w-full 
  minmd:4/5 flexCenter flex-col'>
    <div className='flex-1 w-full flex flex-row sm:flex-col
    px-4 xs:px-0 minlg:px-8 '>
      <SearchBar activeSelect={activeSelect}
      SetActiveSelect={SetActiveSelect}
      handleSearch= {onHandleSearch}
      // clearSearch={onClearSearch}
      />
    </div>
  
  <div className='mt-10 w-full flex flex-wrap
  justify-start md:justify-center'>
  {[1,2,3,4,5,6,7,8,9,10].map((i)=> (
  
  <Students
  key= {`student-${i}`}
  course= {{ 
    i, 
    name: `Student ${i}`,
    price: (100 - i * 0.534).toFixed(2),
    seller: `0x${makeId(3)}...${makeId(4)}`,
    owner: `0x${makeId(3)}...${makeId(4)}`,
    description: 'best Courses on Sale'
  }}
  />
  ))}
  
  </div>
  </div>
  
  ) :(
     <div className='flexCenter sm:p-4 p-16'>
      <h1 className='font-poppins text-black
  dark:text-white font-extrabold text-3xl mt-4'>
        No Students Found</h1>
    </div>
  )}
  
  
  </div>
  
  
  
      </>
    )
}

export default AllStudents