import React from 'react'
import { useAppContext } from '@/context/appContext'
import { IContactLink } from '@/services/fetchService'

const LinkList = ( props: { kind: string, contactLinks: IContactLink[] } ) => {
    const { kind, contactLinks } = props
    
    const title: {[key: string]: string} = {
        directly: 'Directly',
        social_media: 'Social Media'
    }

  return (
    <li className="flex flex-col sm:h-full sm:basis-1/2 border-t py-6 sm:max-w-sm sm:py-0 sm:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
        <div className='mb-3 text-2xl text-center'>
            {title[kind]}
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
                {item.icon}
            </div>
            <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                {item.name}
            </h4>
            <a 
                href={item.url}
                className="text-sm text-blue-900 font-medium inline-flex items-center
                hover:bg-blue-200 duration-150"
            >
                {item.urlName}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        </div>
    )
}

export default LinkList