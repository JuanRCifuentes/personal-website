"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { fetchContactLinks, IContactLink } from '../../../services/fetchService';

const Footer = () => {
  const emptyContactLinks: IContactLink[] = [];
  const [ contactLinks, setContactLinks ] = useState(emptyContactLinks);

  useEffect(() => {
    fetchContactLinks()
      .then(data => {
          if(data){ setContactLinks(data) }
        })
      .catch(error => { console.error(error) });
  } , []);

  return (
    <div className='border-t flex flex-col p-5 gap-5 dark:border-gray dark:text-soft-gray'>

      <ul className='flex flex-col sm:hidden justify-center text-center text-xl gap-5 mb-5'>
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </ul>

      <div className="flex justify-center gap-5 text-2xl">
        { contactLinks.map((link, index) => (
          <a className="hover:text-gold" href={link.url} target='_blank' key={index}>{link.icon}</a>
        ))}
      </div>

      <div className="flex justify-center">
        <div className='text-xs'>&copy; 2024 Juan R. Cifuentes. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer