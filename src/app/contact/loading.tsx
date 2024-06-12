"use client"

import ContactComponent from "./contactComponent"

export default function Loading() {
    const contactLinks = [
        { name: '', kind: 'social_media', message: '', urlName: '', url: '', icon: '' },
        { name: '', kind: 'social_media', message: '', urlName: '', url: '', icon: '' },
        { name: '', kind: 'directly', message: '', urlName: '', url: '', icon: '' },
        { name: '', kind: 'directly', message: '', urlName: '', url: '', icon: '' },
    ]
  
    return (
      <section>
          <ContactComponent contactLinks={contactLinks} />
      </section>
    )
  }