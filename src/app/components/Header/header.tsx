"use client"

import { useAppContext } from '@/context/appContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
    const { websitePages } = useAppContext()
    const [ isNavBarOpen, setIsNavBarOpen ] = useState(false)

    useEffect(() => {
        if (isNavBarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
      }, [isNavBarOpen]); 

    return (
        <nav className={`fixed top-0 bg-white bg-opacity-50 backdrop-blur-md border-b w-full sm:text-sm${isNavBarOpen ? 'bg-white bg-opacity-50 backdrop-blur-md h-lvh' : ''}`}>
            <div className="items-center px-4 max-w-screen-xl mx-auto sm:flex sm:px-8">
                <div className="flex items-center justify-between py-3 sm:py-5 sm:block">
                    <a className='text-2xl' href="/">
                        Juan R. Cifuentes
                    </a>
                    <div className="sm:hidden">
                        <button className="text-gray-500 hover:text-gray-800" aria-label="Menu button"
                            onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                        >
                            {
                                isNavBarOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 mt-14 sm:block sm:pb-0 sm:mt-0 ${isNavBarOpen ? 'p-2 w-full fixed h-dvh left-0 top-0 block rounded-2xl' : 'hidden'}`}>
                    <menu className="flex flex-col sm:items-center space-y-2 sm:flex-row sm:justify-end sm:space-x-3 sm:space-y-0">
                        {websitePages.map((item, idx) => {
                            return (
                                <Link key={idx} href={item.path} className='' onClick={() => setIsNavBarOpen(false)}>
                                    <li className="text-gray-700 p-3 sm:py-1 sm:px-2 hover:bg-transparent border border-transparent hover:border-blue-900 active:bg-blue-900 active:text-gray-200 rounded-2xl font-semibold">
                                        <div className="block">
                                            {item.name}
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                        <span className='hidden w-px h-6 bg-gray-300 sm:block'></span>
                        <div className='space-y-3 items-center gap-x-6 sm:flex sm:space-y-0'>
                            <div className='flex justify-center'>
                                <li className="block p-1.5 mx-3 mb-2 sm:mb-0 text-lg text-center text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-2 border-transparent hover:border-blue-900 rounded-full shadow w-min">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657"></path><path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914"></path><path d="M3 12h1"></path><path d="M12 3v1"></path><path d="M5.6 5.6l.7 .7"></path><path d="M3 21l18 -18"></path></svg>
                                </li>
                            </div>
                        </div>
                    </menu>
                </div>
            </div>
        </nav>
    )
}

export default Header