import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

function Hero() {
  const slides = [
    {
      url: '/slide3.jpg',
    },
    {
      url: '/slide2.jpg',
    },
    {
      url: '/slide1.jpg',
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' w-full h-[28rem] sm:h-[18rem] m-auto pb-10   shadow-lg  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-75 transition-all delay-75 '
      ></div>
      <div className='absolute top-[80%] md:top-[70%] -translate-x-0 translate-y-[-70%] center-5 px-40 md:px-10 text-center  bg-black bg-opacity-25'>
      <p className='  font-bold text-3xl md:text-xl text-white'> E-learning is the use of electronic educational technology in learning
          and teaching.</p>
      </div>
     
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full p-2 bg-white/70 text-white cursor-pointer'>
        <img src="left-arrow.png"  onClick={prevSlide}  className="w-4 h-4  sm:w-4 sm:h-4 mr-3" />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-white/70 text-white cursor-pointer'>
        <img src="next.png" onClick={nextSlide}  className="w-4 h-4  sm:w-4 sm:h-4 mr-3" />
      </div>
      <div className='flex top-4 justify-center py-2'>
      
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
           <img src="dot.png"   className="w-4 h-4  sm:w-4 sm:h-4 mr-3" />
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;