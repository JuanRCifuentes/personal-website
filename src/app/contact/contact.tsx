"use client"
import Card from './card'

import { useAppContext } from '@/context/appContext';

const Contact = () => {
  const { contactLinks } = useAppContext()

  return (
    <div>
      <div className='mb-5'>
        <div className='text-xl'>Contact</div>
        <div className='text-3xl'>Get in Touch</div>
      </div>
      <div className='flex flex-col sm:grid sm:grid-cols-2 gap-10 sm:5'>
        <div>
          <div className='text-xl my-3 sm:text-center'>Directly</div>
          <div className='flex flex-col gap-4'>
            {contactLinks.map((contact, index) => (
              contact.kind === 'directly' && (
                <Card 
                  key={index}
                  icon={contact.icon}
                  name={contact.name}
                  message={contact.message}
                  url={contact.url}
                />
              )))}
          </div>
        </div>
        <div>
          <div className='text-xl my-3 sm:text-center'>Social Media</div>
          <div className='flex flex-col gap-4'>
            {contactLinks.map((contact, index) => (
              contact.kind === 'social_media' && (
                <Card
                  key={index}
                  icon={contact.icon}
                  name={contact.name}
                  message={contact.message}
                  url={contact.url}
                />
              )))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact