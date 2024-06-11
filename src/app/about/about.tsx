"use client"

import Link from 'next/link';
import { useAppContext } from '@/context/appContext';

const AboutPage = () => {
  const { aboutData } = useAppContext();

  return (
    <div>
      <div className='flex flex-col-reverse sm:flex-row mb-3'>
        <div className='my-auto flex flex-col w-full'>
          <div className='text-3xl mb-5 sm:mb-2 font-semibold'>
            {aboutData.name}
          </div>
          <div className='flex flex-col sm:flex-row text-xl mb-5 sm:mb-3 font-semibold'>
            {aboutData.titles.map((title, index) => (
              <div key={index}>
                {title}
                {index < aboutData.titles.length - 1 && <div className='hidden sm:inline'>&nbsp;|&nbsp;</div>}
              </div>
            ))}
          </div>
          <div className='flex flex-row gap-5 text-2xl justify-center sm:justify-start'>
            {aboutData.socials.map((social, index) => (
              <a href={social.url} target='_blank' key={index}>{social.icon}</a>
            ))}
          </div>
        </div>
        <div className='min-w-72 w-full mb-7 sm:my-2'>
          <div className='mx-auto h-44 min-w-44 w-44 rounded-full bg-blue-900'></div>
        </div>
      </div>
      <div className='flex flex-col py-3 text-xl gap-3'>
        {aboutData.description.map((descriptionPart, index) => <div key={index}>{descriptionPart}</div>)}
      </div>
      <div className='text-xl'>
        <Link href={aboutData.cta.link}>{aboutData.cta.message}</Link>
      </div>
    </div>
  )
}

export default AboutPage;