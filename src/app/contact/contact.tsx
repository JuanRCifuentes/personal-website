"use client"

import { useAppContext } from '@/context/appContext';

import MessageForm from './messageForm';
import LinkList from './linkList';

const Contact = () => {
  const { contactLinks } = useAppContext()

  return (
    <section>
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
    </section>
  )
}

export default Contact