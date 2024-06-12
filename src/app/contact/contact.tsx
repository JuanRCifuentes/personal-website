"use client"

import { useAppContext } from '@/context/appContext';

import ContactComponent from './contactComponent';

const Contact = () => {
  const { contactLinks } = useAppContext()

  return (
    <section>
        <ContactComponent contactLinks={contactLinks} />
    </section>
  )
}

export default Contact