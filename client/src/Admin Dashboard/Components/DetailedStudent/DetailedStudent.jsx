import { useState, useEffect, useContext } from "react";
import images from "../../../assets";
import Button from "../Button";
// import {Loader, Button} from '../components';
import RemoveEmail from "../RemoveEmail/RemoveEmail";

const EditMe = () => (
  <div className="flex flex-col ">
    <div className="flexBetween sm:flex-row ">
      <p
        className="font-poppins dark:text-white
    text-black font-semibold text-base minlg:text-xl"
      >
        Course Name:YYY
      </p>

      <p
        className="font-poppins dark:text-white
    text-black font-semibold text-base minlg:text-xl"
      >
        Price: $00
      </p>
    </div>

    <div className="flexBetween sm:flex-row mt-10">
      <p
        className="font-poppins dark:text-white
    text-black font-semibold text-base minlg:text-xl"
      >
        Instructor:AA-AAA
      </p>

      <p
        className="font-poppins dark:text-white
    text-black font-semibold text-base minlg:text-xl"
      >
        Description
      </p>
    </div>

    <div className="flexBetweenStart my-5">
      <div className="flex-1 flexStartCenter">
        <div className="relative w-28 h-28 ">
          <img src={images.student6} 
          layout="fill" 
          alt="" 
          objectFit="cover" />
        </div>

        <div className="flexCenterStart flex-col ml-5">
          <p
            className="font-poppins dark:text-white
     text-black text-base font-normal 
     mb-2 bg-orange-100 rounded-md shadow-xl px-2" 
          >
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Amet, dolor qui! Nihil quae ipsa, adipisci rem at animi, vero
            enim repellendus quia aliquid quo iure!
          </p>
        </div>
      </div>
    </div>
    <div className="flexBetween mt-10">
   

     
    </div>
  </div>
);
  
const DetailedStudent = () => {
  const [isLoading, setisLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [removeEmail, setremoveEmail] = useState(false);
  return (
    <div className="">
      <div
        className="relative flex justify-center
  md:flex-col min-h-screen"
      > 
        <div
          className="relative flex-1 flex-center sm:px-4
    p-12 border-r md:border-r-0 md:border-b dark:border-white
    border-primary"
        >
          <div className="">
            <img
              src={images.student2}
              alt="student2"
              className="rounded-xl shadow-lg
     relative w-557 minmd:w-2/3 minmd:h-2/3
sm:w-full sm:h-300 h-557"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex-1 justify-start sm:px-4 p-12 sm:pb-4">
          <div className="flex flex-row sm:flex-col ">
            <h2
              className="font-poppins dark:text-white text-black
font-semibold text-2xl minlg:text-3xl"
            >
              Name: xx-x-xxxx
            </h2>
          </div>

{toggle ? (


          <div className="mt-10">
            <div className=" flexBetween flex flex-row">

            <p className="font-poppins dark:text-white
     text-black text-sm minlg:text-base font-xl" >
              Email : YY-YYY-YYY 
            </p>
            <Button
              btnName="Remove Email"
              classStyles="mr-5 sm:mr-0 rounded-xl"
              handleClick={() => setremoveEmail
                (true)}
            />
            </div>

            <div className="flex flex-row items-center mt-3">
             
            <Button
            btnName='Time Finished'
            classStyles='rounded-br-3xl rounded-tl-3xl'
            />

            </div>
          </div>
             ) : (

 <div className="mt-10">
            <div className=" flexBetween flex flex-row">

            <p className="font-poppins dark:text-white
     text-black text-sm minlg:text-base font-xl" >
              Email : YY-YYY-YYY 
            </p>
            <Button
            btnName='You can not remove Email'
            classStyles='mr-5 sm:mb-5 sm:mr-0 rounded-xl'
            // handleClick={() => setremoveEmail
            //   (false)}
              />
            </div>

            <div className="flex flex-row items-center mt-3">
             
              <p
                className="font-poppins dark:text-white
     text-black text-xs minlg:text-base font-semibold"
              >
                2, <span className= 'font-poppins text-normal'>Days Left</span>
                
              </p>
            </div>
          </div>
)}

          <div className="mt-10 flex flex-col">
            <div
              className="w-full border-b dark:border-white border-primary
flex flex-row "
            >
          
            </div>
          
          </div>
          {/* muhiim weeyan code block gani munaay */}
          <div className="Flex flex-row sm:flex-col mt-10">
            {/* 1.  Hadii qofkani yahay admin kii ha u sheego in uu 
maamuli karo haduu yahay adaygiina ha u sheego in uu iibsaday
mar hore course kan hadii uu yahay dadwaynana ha u soo baxo
button u sheegaya in uu samaysan karo payment oo iibsan karo
 */}

            {/* 2. imika ha sii joogto admin ka hadii uu yahay
 instructor kii course kan lahaa u soo saar ma 
 edit garayn karaysid hadii uu yahay admin kiina u soo saar button uu 
 ka sii edit gareeyo.   */}

       
          </div>
        </div>
{/* { EditModel && ( 
        <EditCourse 
        handleClick={() =>{}} 
        body={<EditMe />} 
        footer={(
            <div className="flex flex-row sm:flex-col">
<Button 
btnName= 'Edit Me' 
classStyles='mr-5 sm:mb-5 sm:mr-0 rounded-xl'
// handleClick={() => setEditCourse(true)} 
 
/>
<Button 
btnName= 'Cancel'
classStyles='mr-5 sm:mr-0 rounded-xl'
handleClick={() => setEditModel(false)}
/>
</div>
        )}
        handleClose={()=>setEditModel(false) }
        />
       ) } */}




{removeEmail && (
<RemoveEmail
    handleClick={() =>{}} 
    body={<EditMe />} 
    header= 'Email: yy-@..'
    mainbody={(
      <div>
       <p className="font-poppins"> Are you sure to Remove This
        <span 
        className="bg-primary m-1 px-1
        rounded-tl-xl rounded-br-xl text-white">
           Email</span> ?</p>
        </div>
    )}
    footer={(
        <div className="flex flex-row sm:flex-col">
<Button 
btnName= 'Remove' 
classStyles='mr-5 sm:mb-5 sm:mr-0 rounded-xl'
// handleClick={() => setEditCourse(true)} 
/>
<Button 
btnName= 'Cancel'
classStyles='mr-5 sm:mr-0 rounded-xl'
handleClick={() => setremoveEmail(false)}
/>
</div>
        )}
        handleClose={()=>setremoveEmail(false) }
        />
)}

      </div>
    </div>
  );
};

export default DetailedStudent;
