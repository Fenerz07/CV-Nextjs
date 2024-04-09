import React from 'react'

function Contact() {
    return (
        <section className='mt-10 grid grid-cols-1 sm:grid-cols-2'>
            <div className='m-8 text-center sm:text-left'>
                <h1 className='font-extrabold text-xl mb-3 '>My Socials Networks</h1>
                <p>I&apos;m always looking for new meets and oppotunities.
                    If you want to contact me, you absolutely can and my inbox is open for any questions or requests.
                    I&apos;ll be glad to help you on whatever you want !</p>
                <div className='flex m-3 justify-center sm:justify-start'>
                    <a href="https://github.com/Fenerz07" target="_blank">
                        <img src="images/github.svg" alt="github" className='w-[50px] h-[50px]' />
                    </a>
                    <a href="https://www.linkedin.com/in/hugo-matyla-7a6a49293/" target="_blank">
                        <img src="images/linkedin.svg" alt="linkedin" className='w-[50px] h-[50px]' />
                    </a>
                </div>
            </div>
            <div className='place-self-top text-center'>
                <h1 className='mt-6 mb-12 font-extrabold text-3xl text-blue-400'>CONTACT ME AT:</h1>
                <a href="mailto:hugom2005@free.fr">hugom2005@free.fr</a>
            </div>
        </section>
    )
}

export default Contact