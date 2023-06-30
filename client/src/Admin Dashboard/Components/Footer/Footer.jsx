import { useState } from 'react';
import images from '../../../assets';
import Button from '../Button';
import { Link } from 'react-router-dom';
import RemoveEmail from '../RemoveEmail/RemoveEmail';

const FooterLinks = ({heading, items})=> (
  <div className='flex-1 justify-start items-start'>
    <h3 className='font-poppins dark:text-white text-black font-semibold
    text-xl mb-7 '>{heading}</h3>
    {items.map((item, index)=> (
      <p key={index}
      className='font-poppins dark:text-white text-gray-700 font-normal text-base
      cursor-pointer dark:hover:text-gray-800
       hover:text-gray-900 my-3'>{item}</p>

    ))}
  </div>
)



const Footer = () => {
  const [emailMe, setEmailMe] = useState(false);
  return (

  <footer className=' bg-white flexCenter flex-col border-t dark:border-gray-50 
   border-gray-400 sm:py-8 py-16'>

<div className=' w-full minmd:w-4/5 flex flex-row md:flex-col 
sm:px-4 px-16 '>
<div className='flexStart flex-1 flex-col'>
<div className='flexCenter cursor-pointer '>
    <img src='https://www.bing.com/th?id=OIP.Ee9M6zesnrqGXt_i-hNSBwHaHa&w=150&h=151&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    objectFit= 'contain' width={32} height={32}  alt="logo" />
<Link to ='/'><p className='dark:text-white text-black
 font-semibold text-lg ml-1
   rounded-md p-2'>E-learning Platform</p></Link>
</div>
<p className= 'font-poppins dark:text-white text-black font-semibold text-base mt-6 '>Get the Latest Updates</p>

<div className='flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-white 
 border border-gray-400 rounded-md text-black bg-orange-200'>
<input type="email"
placeholder='Your Email...' 
className='h-full flex-1 w-full dark:bg-white bg-orange-50  font-normal py-2
text-xs minlg:text-lg outline-none ' />



<div className='flex-initial'>
<Button btnName= 'Email Us'
classStyless= 'rounded-md'
handleClick={() => setEmailMe
  (true)}
onc/>

{emailMe && (
<RemoveEmail
   handleClick={() =>{}} 
   header={(<>
     <p className="font-poppins"> We know You are in the right place!
       but would like
      to hear from 
       <span 
       className="bg-primary m-1 px-1 text-md
       rounded-tl-xl rounded-br-xl text-white">
          YOU</span> !</p>
   </>)}
   mainbody={(
     <div className='text-black font-bold text-2xl font-poppins
     '>
 <p className='md:text-xl sm:text-lg xs=text-xs 
      text-left'>
Lorem ipsum dolor sit amet consectetur, 
adipisicing elit. Qui consequatur earum 
labore sint, enim aut illum aliquam.  
Blanditiis officiis, placeat aliquid
 fugit sit adipisci fugiat. Nisi 
 provident inventore perferendis porro?
 </p>
       </div>
   )}
   footer={(
       <div className="flex flex-row sm:flex-col">
<Button 
btnName= 'Send' 
classStyles='mr-5 sm:mb-5 sm:mr-0 rounded-xl'
// handleClick={() => setEditCourse(true)} 
/>
<Button 
btnName= 'Cancel'
classStyles='mr-5 sm:mr-0 rounded-xl'
handleClick={() => setEmailMe(false)}
/>
</div>
       )}
       handleClose={()=>setEmailMe(false) }
       />
       )}

</div>
</div>
</div>

<div className='flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0
 md:mt-8 '>
   
  <FooterLinks heading= 'E-Learning Platform'
  items= {['Explore', 'How it Works', 'Contact Us']}/>
   <FooterLinks heading= 'Support'
  items= {['Help Center', 'Terms od Services', 'Legal', 'Privacy Policy']}/>


 </div>

</div>


<div className='flexCenter w-full mt-5 border-t dark:border-gray-400 border-primary 
 
sm:px-4 px-16'>
  <div className='flexBetween flex-row w-full
   minmd:w-4/5 sm:flex-col mt-7'>
<p className='font-poppins dark:text-white text-gray-900 
 text-base'>E-Learning Platform, <span className='font-semibold underline'>SiraadDev</span>. All Rights Reserved</p>
 <div className='flex flex-row sm:mt-4'>


 {[images.instagram, images.twitter, images.telegram, images.discord].map
  ((image, index)=> (
    <div className='mx-1 cursor-pointer bg-primary rounded-md p-1'>
     <img src= {image} 
     objectFit='contain'
     width={24}
     height={24}
     alt="social" />
    </div>
  ))} 

  </div>

  </div>
  
</div>

  

  </footer>
  )
}

export default Footer