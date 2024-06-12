"use client";

import Link from 'next/link';

import { useAppContext } from '@/context/appContext';

const Footer = () => {
  const { websitePages, contactLinks } = useAppContext()

  return (
    <div className='border-t flex flex-col p-5 gap-5'>

      <li className='flex flex-col sm:hidden justify-center text-center text-xl gap-5 mb-5'>
        { websitePages.map((page, index) => (
          <Link href={page.path} key={index}>{page.name}</Link>
        ))}
      </li>

      <li className="flex justify-center gap-5 text-2xl">
        { contactLinks.map((link, index) => (
          <a className="" href={link.url} target='_blank' key={index}>{link.icon}</a>
        ))}
      </li>

      <div className="flex justify-center">
        <div className='text-xs'>&copy; 2024 Juan R. Cifuentes. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer