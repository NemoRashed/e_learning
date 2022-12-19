import React from 'react'
import { useState } from 'react';
 import {Link }from 'react-router-dom';
import SubNav from './SubNav';
import Button from '../Button';
import images from '../../../assets';

const MenuItems = ({isMobile, active, setActive}) => {
    const generateLink = (i)=> {
        switch (i) {
            case 0: return '/'
            case 1: return '/NewCourses'
            case 2: return '/Students'
            default: return '/'
        }
    };
    return(
        <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
            {['Explore','NewCourses', 'Students'].map((item, i) => (
                <li
                key={i}
                onClick={()=>{
                    setActive(item)
                }}
                className={`flex flex-row items-center font-Poppins font-semibold text-black dark:hover:text-white hover:text-gray-800 mx-3 dark:text-white
                ${active === item 
                ? 'dark:text-white text-black bg-dimOrange px-4 p-1 rounded-md ' 
                : ' dark:text-gray-200 text-gray-400'}
            `}>
<Link to = {generateLink(i)}>{item} </Link>
                </li>
            ))}
        </ul>
    )}

const ButtonGroup = ()=> {
    const hasConnected= false;
    return hasConnected ? (
        <Button classStyles='mx-2 rounded-xl'/>
    ) : <Button classStyles='mx-2 rounded-xl'/>
} 

const NavBar = () => {
    const [active, setActive] = useState('Explore');
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
  <SubNav/>

  <nav className ='flexBetween w-full fixed z-10 p-4 flex-row border-b bg-white
   dark:bg-gray-800 dark:border-gray-900 border-gray-400 dark:text-white'>

<div className='flex flex-1 flex-row 
justify-start'>
{/* Link */}

<div className='flex flexCenter md:hidden cursor-pointer '
onClick={()=> {}}>
    <img src='https://www.bing.com/th?id=OIP.Ee9M6zesnrqGXt_i-hNSBwHaHa&w=150&h=151&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    objectFit= 'contain' width={32} height={32}  alt="logo" />

<Link to ='/'><p className='dark:text-white text-black
 font-semibold text-lg ml-3
 bg-dimOrange p-2 rounded-md'>E-learning Platform</p></Link>
</div>
{/* Link  */}


{/* another Link  */}
<link rel="stylesheet" href="" />
<div className='hidden md:flex '
onClick={()=> {}}>
   <img src='https://www.bing.com/th?id=OIP.Ee9M6zesnrqGXt_i-hNSBwHaHa&w=150&h=151&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    objectFit= 'contain' width={32} height={32}  alt="logo" />

    </div>
{/* Another Link ended here  */}
</div >

<div className='flex flex-initial flex-row justify-end'>
<div className='flex items-center mr-2'>
<input 
type="checkbox" 
className='checkbox'
id= 'checkbox'
onChange={()=> {}}
/>
<label htmlFor="checkbox"
className='flexBetween w-8 h-4 bg-primary rounded-2xl p-1 relative
label'>
    <i className='fas fa-sun'/>
    <i className='fas fa-moon'/>
    <div className='w-3 h-3 absolute bg-white rounded-full ball '>

    </div>
</label>
</div>
</div>

{/*  */}
<div className='md:hidden flex '>
    <MenuItems active={active} setActive={setActive}/>
    <div className='ml-4 text-white'>
<ButtonGroup/>
    </div>
</div>
<div className='hidden md:flex ml-2 bg-orange-400 p-2 rounded-md'>
{isOpen 
? (
    <img src={images.cross} 
    objectFit='contain'
    width={20}
    height={20}
    color='black'
    alt= 'menu'
    onClick={()=> setIsOpen(false)}

    />
): (
    <img src={images.menu} 
    objectFit='contain'
    width={25}
    height={25}
    alt= 'menu'
    onClick={()=> setIsOpen(true)}
   
    />
)}
</div>
{isOpen && (
    <div className='fixed inset-0 top-65 dark:white-bg bg-orange-50 z-10
    nav-h flex justify-between flex-col'>
<div className='flex-1 p-4'>
    <MenuItems active={active} setActive= {setActive} isMobile/>
</div>
<div className='p-4 border-t dark:border-gray-600 border-green-700'></div>
   <ButtonGroup setActive= {setActive}/>
    </div>
)}



    </nav>
    </header>
    )
}

export default NavBar