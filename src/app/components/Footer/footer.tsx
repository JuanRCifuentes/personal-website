import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col p-5 gap-5'>

      <ul className='flex flex-col sm:hidden justify-center text-center gap-5'>
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </ul>

      <div className="flex justify-center gap-5 text-2xl">
        <a href="https://github.com/JuanRCifuentes" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/juanrcifuentes" target='_blank'><FaLinkedin /></a>
        <a href='https://wa.me/573138690872' target='_blank'><FaWhatsapp /></a>
      </div>

      <div className="flex justify-center">
        <div className='text-xs'>&copy; 2024 Juan R. Cifuentes. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer