import { IAboutData } from '@/services/fetchService';
import Link from 'next/link';

const AboutPage = ( props: { aboutData:IAboutData }) => {
    const { aboutData } = props

  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row mb-3'>
        <div className='my-auto flex flex-col w-full'>
          <div className='text-3xl text-gray-800 md:text-4xl mb-5 sm:mb-2 font-semibold'>
            {aboutData.name==='' ? 
                <div className="animate-pulse bg-gray-200 h-10 w-2/3 rounded-full"></div>
                : aboutData.name
            }
          </div>
          <div className='flex flex-col sm:flex-row text-xl mb-5 sm:mb-3 font-semibold'>
            {aboutData.titles.map((title, index) => (
              <div className='flex items-center' key={index}>
                { title==='' ? 
                    <div className="animate-pulse bg-gray-200 h-6 w-52 rounded-full"></div>
                    : title
                }
                {index < aboutData.titles.length - 1 && <div className='hidden sm:inline'>&nbsp;|&nbsp;</div>}
              </div>
            ))}
          </div>
          <div className='flex flex-row gap-5 text-2xl justify-center sm:justify-start'>
            {aboutData.socials.map((social, index) => (
              social.url==='' ? 
              <svg key={index} className="animate-pulse text-gray-200" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                : <a href={social.url} target='_blank' key={index} aria-label={`Button to link my ${social.name} page`}>{social.icon}</a>
            ))}
          </div>
        </div>
        <div className='min-w-72 w-full mb-7 sm:my-2'>
          <div className='mx-auto h-44 min-w-44 w-44 rounded-full bg-blue-900'></div>
        </div>
      </div>
      <div className='flex flex-col py-3 text-xl gap-3'>
        {aboutData.description.map((descriptionPart, index) => 
          descriptionPart==='' ?
            <div key={index} className='flex flex-col mb-5 gap-3'>
              <div className="animate-pulse bg-gray-200 h-5 w-full rounded-full"></div>
              <div className="animate-pulse bg-gray-200 h-5 w-3/4 rounded-full"></div>
            </div>
            :<div key={index}>{descriptionPart}</div>
        )}
      </div>
      <Link 
          href={aboutData.cta.link}
          className="text-xl group px-4 py-2 text-blue-900 font-medium bg-blue-50 rounded-full inline-flex items-center
          hover:bg-blue-200 duration-150"
      >
        {aboutData.cta.message}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  )
}

export default AboutPage;