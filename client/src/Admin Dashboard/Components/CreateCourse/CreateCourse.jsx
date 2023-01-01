import {useState, useMemo, useCallback, useContext} from 'react'
import {useDropzone} from 'react-dropzone';
import images from '../../../assets';
import Input from './Input';
import Button from '../Button';


const CreateCourse = () => {

const [FormInput, setFormInput] = useState({price: '',
name: '', description: ''});

const [fileUrl, setFileUrl ] = useState(null);
const onDrop = useCallback(() => {
    // Upload Video to there
})
const {getRootProps, getInputProps, isDragActive,
isDragAccept, isDragReject} = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
});

const fileStyle = useMemo(() => (
`dark:bg-gray-400 bg-blue-200 border dark:border-white 
 flex flex-col items-center p-5 rounded-md border-2xl
border-dashed
${isDragActive && 'border-file-active'}
${isDragAccept && 'border-file-accept'}
${isDragReject && 'border-file-reject'}`
), [isDragActive,isDragAccept, isDragReject]);


console.log('HI'+ FormInput);


  return (
    <div className= 'flex justify-center sm:px-4 p-12'>
        <div className='w-3/5 md:w-full'>

<h1 className='flex-1 font-poppins dark:text-white
text-black text-2xl minlg:text-4xl 
font-semibold sm:mb-4'>Create New Course </h1>


<div className = 'mt-16'>
<p className='font-poppins dark:text-white
 text-black font-semibold text-xl'>
Upload File
</p>
<div className='mt-4'>
   <div
   {...getRootProps()}
   className={fileStyle}
   > 
   <input {...getInputProps()} />
<div className='flexCenter flex-col text-center'>
<p className='font-poppins dark:text-white
 text-black font-semibold text-xl'>
JPG,PNG,GIF,SVG,WEBM Max 100mb.
</p>

<div className='my-12 w-full flex justify-center'>
<img 
src={images.upload}
width={100}
height={100}
objectFit='contain'
alt="file upload" 
className=''/>
</div>

<p className='font-poppins dark:text-white
 text-black font-semibold text-sm'>
Drag and Drop File.</p>

<p className='font-poppins dark:text-white
 text-black font-semibold text-sm mt-2'>
or Browse media on your device
</p>
</div>
{fileUrl && (
    <aside>
        <div>
            <img src= {fileUrl}
            alt= 'asset_file'/>

        </div>
    </aside>
)}
   </div>
</div>


</div>

<Input
type="text" 
title= 'name'
placeholder='Video Name'
// handleClick= {()=> {}}
handleClick= {(e)=> setFormInput({...FormInput,
name: e.target.value})}
/>


<Input
type="textarea" 
title= 'Description'
placeholder='Video Description'
handleClick= {(e)=> setFormInput({...FormInput,
    description: e.target.value})}
/>


<Input
type="number" 
title= 'Price'
placeholder='File Price'
handleClick= {(e)=> setFormInput({...FormInput,
    name: e.target.value})}
/>

<div className='mt-7 w-full flex justify-end '>
<Button
btnName = 'Create Video'
className='rounded-xl'
handleClick={()=> {}}
/>
</div>


        </div>
        </div>
  )
}

export default CreateCourse