import React from 'react';
import NavLink from './Navlink';
import IndexPage from "./AboutmeTab";

const About = () => {
    return (
        <section className='mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-5 place-self-center '>
                    <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                        <img src='/images/about.svg' alt='aboutlogo' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={200} height={200} style={{ filter: 'invert(100%)' }}/>
                    </div>
                </div>
                <div className='col-span-7 text-center sm:text-left'>
                    <h1 className='text-white text-base sm:text-lg lg:text-3xl font-extrabold mb-3'>
                        About Me
                    </h1>
                    <p className='text-white text-base sm:text-lg lg:text-xl mr-4 mb-2'>
                        I&apos;m a student in computer science and a front-end developer beginner based in France .
                        I&apos;m passionate about web development and I&apos;m always looking to get better in development.
                        This website is my first website made with Nextjs for a school project.
                        As you can see I&apos;m a fan of pinguins and I love to play video games, I love cars, I love music and also hangout with my friends.
                    </p>
                    <IndexPage/>
                </div>
            </div>
        </section>
    );
}

export default About;