
import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';

function Testimonial() {
  return (
   <>
   <div className=' w-full px-28 md:px-7 py-10 md:py-3 '>
   <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
          
         className="w-full  flex justify-center items-center flex-col ">
          <h1 className="text-2xl md:text-3xl font-extrabold pt-4  ">  <span className="primaryUser font-normal">| </span>Student Testimonail</h1>
        
        </motion.div>
   
        < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }} class="bg-white dark:bg-gray-900 "> <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <div class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <div>
              <p class="text-2xl font-medium text-gray-500 dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>
          <div class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full bg-violet-400" src="user.png" alt="profile picture"/>
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Nemo rashed</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at dev</div>
              </div>
          </div>
      </div>
  </div>
  </motion.div>
</div>
   </>
  );
}

export default Testimonial;