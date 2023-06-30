import React from 'react'
import {MdDateRange} from 'react-icons/md';
import {Link } from 'react-router-dom';
const Blogs = () => {
  return (
    <div className='m-10'>
        <div className='grid lg:gap-x-24 md:gap-12  lg:grid-cols-3'> 
             <h2 className="text-3xl font-bold mb-4">Blogs</h2>
             <div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      className="form-control block w-full px-3 py-1.5
       text-base font-normal text-gray-700 bg-white
        bg-clip-padding border border-solid border-gray-300
         rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white 
           focus:border-blue-600 focus:outline-none"
      placeholder={`Select a date`}
      />
      
  </div>
</div>
</div> 
       
        <ol className="border-l-2 border-primary mt-3">
  <li>
    <div className="flex flex-start items-center">
      <div className="bg-green-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 className="text-gray-800 font-semibold text-xl -mt-2">Title of Blog 1</h4>
    </div>
    <div className="ml-6 mb-6 pb-6">
      <a href="#!" className="text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out text-sm font-bold">4 January, 2023</a>
      <p className="text-gray-700 mt-2 mb-4 font-poppins">
        Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button type="button" className="inline-block px-4 py-1.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        <Link to = '/AddBlog'> Read more</Link> </button>
    </div>
  </li>
  <li>
    <div className="flex flex-start items-center">
      <div className="bg-green-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 className="text-gray-800 font-semibold text-xl -mt-2">Title of Blog 2</h4>
    </div>
    <div className="ml-6 mb-6 pb-6">
      <a href="#!" className=
     "text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out text-sm font-bold">12 January, 2022</a>
      <p className="text-gray-700 mt-2 mb-4 font-poppins">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <button type="button" className="inline-block px-4 py-1.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
    </div>
  </li>
  <li>
    <div className="flex flex-start items-center">
      <div className="bg-green-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 className="text-gray-800 font-semibold text-xl -mt-2">Title of Blog 3</h4>
    </div>
    <div className="ml-6 mb-6 pb-6">
      <a href="#!" 
      className="text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out text-sm font-bold">27 December, 2021</a>
      <p className="text-gray-700 mt-2 mb-4 font-poppins">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
      <button type="button" className="inline-block px-4 py-1.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
    </div>
  </li>
</ol>
    </div>
  )
}

export default Blogs