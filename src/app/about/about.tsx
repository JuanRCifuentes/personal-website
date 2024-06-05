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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus rutrum est. Proin mattis massa vitae urna auctor, sed molestie ipsum lacinia. Fusce lobortis non sem nec pharetra. Quisque vitae laoreet dolor. Etiam at leo a nisl eleifend malesuada nec et ligula. In nec urna hendrerit ligula tincidunt aliquam non vitae nibh. Nullam egestas aliquam dui quis lacinia.
      </div>
      <div className='py-3 text-xl'>
        Interested in collaborating? <Link href="/contact">Send me a message</Link>
      </div>
    </div>
  )
}

export default AboutPage;