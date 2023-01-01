import { useEffect } from 'react';
import {useState} from 'react'
import images from '../../assets';



const SearchBar = ({activeSelect, setActiveSelect,
handleSearch}) => {

const [search, setSearch] = useState('')
const [debouncedSearch, setdebouncedSearch] = useState(search);
const [hii, setToggle] = useState(false);

useEffect(()=> {
    const timer = setTimeout(()=> {
setSearch(debouncedSearch);
    }, 1000)
    return () => clearTimeout(timer);

}, [debouncedSearch]);


useEffect(()=> {
    if (search){
        handleSearch(search);
    } else {
        // clearSearch();
    }
}, [search]);

  return ( 
    <>
        <div className='flex-1 flexCenter
           dark:bg-gray-600  border 
         border-orange-300 dark:border-black
         py-3 px-4 rounded-md bg-dimWhite'>
<img 
src={images.Search} 
objectFit= 'contain'
width={20}
height={20}
alt="search" 
placeholder='Search Courses Here...'
className='bg-purple-700 rounded-md mr-1'
/>
<input type="text" 
placeholder='Search Courses here '
className='dark:bg-gray-400 dark:text-white
max-4 w-full text-black font-normal text-sm outline-none
font-poppins mr-1'
onChange={(e)=> {setdebouncedSearch(e.target.value)}}
value={debouncedSearch}
/>
            </div>


        </>
  )
}

export default SearchBar