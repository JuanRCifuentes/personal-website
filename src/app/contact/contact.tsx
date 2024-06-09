"use client"

import { useAppContext } from '@/context/appContext';

import MessageForm from './messageForm';

const Contact = () => {
  const { contactLinks } = useAppContext()

  return (
    <section>
        <div className="gap-12 lg:flex">
            <div className="max-w-md">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Let’s connect
                </h3>
                <p className="mt-3">
                    I&apos;m here to help and answer any question you might have.
                </p>
            </div>
            <div>
                <ul className="mt-12 gap-y-6 gap-x-12 sm:flex lg:gap-x-0 lg:mt-0">
                    <li className="sm:flex sm:flex-col sm:h-full sm:basis-1/2 space-y-3 border-t py-6 sm:max-w-sm sm:py-0 sm:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                      <div className='mb-3 text-2xl text-center'>Social Media</div>
                      {contactLinks.map((item, idx) => (
                          item.kind === 'social_media' && (
                            <div key={idx} className='h-40 mb-10'>
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700 text-2xl mb-2">
                                    {item.icon}
                                </div>
                                <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                                    {item.name}
                                </h4>
                                <p>
                                    {item.message}
                                </p>
                                <a href={item.url} target='_blank' className="flex items-center gap-1 text-sm text-blue-900 duration-150 hover:text-blue-500 font-medium">
                                    {item.urlName}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"> <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" /> </svg>
                                </a>
                            </div>
                        )))}
                    </li>
                    <li className="sm:flex sm:flex-col sm:h-full sm:basis-1/2 space-y-3 border-t py-6 sm:max-w-sm sm:py-0 sm:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                      <div className='mb-3 text-2xl text-center'>Directly</div>
                      {contactLinks.map((item, idx) => (
                          item.kind === 'directly' && (
                            <div key={idx} className='h-40 mb-10'>
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700 text-2xl mb-2">
                                    {item.icon}
                                </div>
                                <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                                    {item.name}
                                </h4>
                                <p>
                                    {item.message}
                                </p>
                                <a href={item.url} target='_blank' className="flex items-center gap-1 text-sm text-blue-900 duration-150 hover:text-blue-500 font-medium">
                                    {item.urlName}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"> <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" /> </svg>
                                </a>
                            </div>
                        )))}
                    </li>
                </ul>
            </div>
        </div>
        <span className='hidden w-3/4 h-px bg-gray-200 md:block mx-auto mt-10 mb-5'></span>
        <MessageForm />
    </section>
  )
}

export default Contact