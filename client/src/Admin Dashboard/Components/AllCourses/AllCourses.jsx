import React from 'react'
import { useState,} from 'react';
import Loader from '../Loader';
import Banner from '../Hero/Banner';
import SearchBar from '../SearchBar';
import images from '../../../assets';
import Course from './Course';
import { makeId } from '../../../utils/makeId';

const AllCourses = () => {

  return (
    <div>

<div className='w-full flex justify-start items-center
  flex-col min-h-screen '>
  <div className='w-full flexCenter flex-col '>

  <Banner
   
  name= 'Your Courses'

  childStyles='text-center mb-4 '
  parentStyles='h-80 justify-center '
  />
 
  </div>


  <div className='sm:px-4 p-12 w-full 
  minmd:4/5 flexCenter flex-col'>
    <div className='flex-1 w-full flex flex-row sm:flex-col
    px-4 xs:px-0 minlg:px-8 '>


<SearchBar/>

        </div>



        <div className='mt-10 w-full flex flex-wrap
  justify-start md:justify-center'>
  {[1,3,4,5,6,8,9,10].map((i)=> (
  

  <Course
  key= {`course-${i}`}
  course= {{ 
    i, 
    name: `course ${i}`,
    price: (100 - i * 0.534).toFixed(2),
    instructor: `yy-yyy`,
    owner: `0x${makeId(3)}...${makeId(4)}`,
    // description: 'best Courses on Sale'
  }}
  />
  ))}
  
  </div>



    </div>





</div>

    </div>
  )
}

export default AllCourses