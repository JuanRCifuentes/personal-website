"use client";

import Link from 'next/link';

import { useAppContext } from '@/context/appContext';

const Footer = () => {
  const { websitePages, contactLinks } = useAppContext()

  return (
    <div className='border-t flex flex-col p-5 gap-5'>

      <menu className='flex flex-col sm:hidden justify-center text-center text-xl gap-5 mb-5'>
        { websitePages.map((page, index) => (
          <li key={index}>
            <Link href={page.path}>
                {page.name}
            </Link>
          </li>
        ))}
      </menu>

      <ul className="flex justify-center gap-5 text-2xl">
        { contactLinks.map((link, index) => (
          <li key={index}>
            <a aria-label={`Redirect to my ${link.name} page`} href={link.url} target='_blank'>
                {link.icon}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <div className='text-xs'>&copy; 2024 Juan R. Cifuentes. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer