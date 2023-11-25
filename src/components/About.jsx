import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-violet-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Fahad Shoaib, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p><p>I'm a dedicated front-end developer, excited about making my mark in the digital world. As I embark on this journey, I bring a blend of enthusiasm and a genuine eagerness to learn. Crafting user-friendly interfaces and navigating the ever-evolving world of web technologies is where I find my passion. Every project is an opportunity for me to grow and contribute to the dynamic field of front-end development. I'm here to bring a fresh perspective, dedication, and a hunger for knowledge to create engaging online experiences. Let's build something great together!</p>  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
