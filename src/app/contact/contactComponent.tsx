import React from 'react'
import MessageForm from './messageForm'
import { IContactLink } from '@/services/fetchService'

const ContactComponent = (props: { contactLinks: IContactLink[] }) => {
    const { contactLinks } = props;
        
    return (
        <>
            <div className="gap-12 lg:flex w-full">
                <div className="max-w-md">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Let&apos;s connect
                    </h3>
                    <p className="mt-3">
                        I&apos;m here to help and answer any question you might have.
                    </p>
                </div>
                <div className='w-full max-w-screen-md'>
                    <ul className="mt-12 gap-y-6 gap-x-12 sm:flex lg:gap-x-0 lg:mt-0">
                        <LinkList kind='social_media' contactLinks={contactLinks}/>
                        <LinkList kind='directly' contactLinks={contactLinks}/>
                    </ul>
                </div>
            </div>
            <span className='hidden w-3/4 h-px bg-gray-200 md:block mx-auto mt-10 mb-5'></span>
            <MessageForm />
        </>
  )
}

const LinkList = ( props: { kind: string, contactLinks: IContactLink[] } ) => {
    const { kind, contactLinks } = props

  return (
    <li className="flex flex-col sm:h-full sm:basis-1/2 border-t py-6 sm:max-w-sm sm:py-0 sm:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
        <div className='mb-3 text-2xl text-center'>
            {{ directly: 'Directly', social_media: 'Social Media' }[kind]}
        </div>
        {contactLinks.map((item, idx) => (
            item.kind === kind && (
            <LinkCard item={item} key={idx}/>
        )))}
    </li>
  )
}

const LinkCard = (props: { item: IContactLink }) => {
    const { item } = props

    return (
        <div className='flex flex-col justify-between my-2 w-full sm:max-w-full'>
            <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700 text-2xl mb-1">
                {item.icon==='' ? 
                    <svg className="animate-pulse text-gray-200" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                    : item.icon
                }
            </div>
            <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                {item.name==='' ? 
                    <div className="animate-pulse bg-gray-200 h-5 w-1/2 mb-2 rounded-full"></div>
                    : item.name
                }
            </h4>
            {item.urlName==='' ? 
                <div className="animate-pulse bg-gray-200 h-4 w-3/4 mb-2 rounded-full"></div>
                :<>
                    <a 
                        href={item.url}
                        className="group text-sm text-blue-900 font-medium inline-flex items-center
                        hover:bg-blue-200 duration-150 max-w-fit pl-2 pr-2 rounded-full"
                    >
                        {item.urlName}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </>
                }
        </div>
    )
}

export default ContactComponent