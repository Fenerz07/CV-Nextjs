"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const openPdf = () => {
  window.open("CV.pdf", "_blank");
};

const Cover = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left ml-10'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'><div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200">
          Hi! I'm
            <span>
              <br></br>
              <TypeAnimation
              sequence={[
              'Hugo',
              1000,
              'French',
              1000,
              'Web Developer',
              1000,
              'Gamer',
              1000
              ]}
              wrapper="span"
              speed={50}
              style={{fontSize:'2.5rem' ,display: 'inline-block' }}
              repeat={Infinity}
              />
            </span>
          </div></h1>
          <p className='text-white text-base sm:text-lg lg:text-xl'>Welcome to my portfolio made with nextjs for a school project, The website was made for being the most ergonomic and ecologic as possible !</p>
          <button onClick={openPdf} className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-800 via-blue-500 to-blue-200 hover:bg-slate-200 text-white mt-3 mb-3">MY CV</button>
        </div>
        <div className='col-span-5 place-self-center'>
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <img src='/images/pinguin-white.svg' alt='pinguin_white' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cover;
