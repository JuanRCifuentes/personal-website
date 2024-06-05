import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';

const AboutPage = () => {
  return (
    <div className='text-center sm:text-left mx-10 my-10 lg:mx-20 xl:mx-40'>
      <div className='flex flex-col-reverse sm:flex-row mb-3'>
        <div className='my-auto flex flex-col w-full'>
          <div className='text-3xl mb-5'>
            Juan R. Cifuentes
          </div>
          <div className='flex flex-col sm:flex-row text-xl text-gray mb-5 sm:mb-3'>
            <div>Full Stack Developer </div>
            <div className='hidden sm:inline'>&nbsp;|&nbsp;</div>
            <div>Data Scientist</div>
          </div>
          <div className='flex flex-row gap-5 text-2xl text-gray justify-center sm:justify-start'>
            <a href="https://github.com/JuanRCifuentes" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/juanrcifuentes" target='_blank'><FaLinkedin /></a>
            <a href='https://wa.me/573138690872' target='_blank'><FaWhatsapp /></a>
            <a href='mailto:info@juanrcifuentes.com' target='_blank'><IoMailOutline /></a>
          </div>
        </div>
        <div className='min-w-72 w-full mb-7 sm:my-2'>
          <div className='mx-auto h-44 min-w-44 w-44 bg-navy rounded-full'></div>
        </div>
      </div>
      <div className='py-3 text-xl'>
        <p className='mb-3'>
          Hi! I’m a data enthusiast with a passion for solving complex problems. My journey began as a Mechanical Engineer, where I honed my analytical skills and developed a solid foundation in programming.
        </p>
        <p className='mb-3'>
          I’ve been a full-stack developer for several years, building web applications and data projects with React, Python, Azure, and .NET.
        </p>
        <p>
          Currently, I’m diving into data science, exploring predictive modeling, natural language processing, and deep learning. My toolbox includes Python, SQL, and frameworks like TensorFlow and PyTorch.
        </p>
      </div>
      <div className='py-3 text-xl'>
        Interested in collaborating? <Link href="/contact">Send me a message</Link>
      </div>
    </div>
  )
}

export default AboutPage;