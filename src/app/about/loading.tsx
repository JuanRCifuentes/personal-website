"use client"

import AboutComponent from './aboutComponent'
import { IAboutData } from "@/services/fetchService";

export default function Loading () {
    const emptySocial = { name: '', kind: 'social_media', message: '', urlName: '', url: '', icon: '' };
    const emptyAboutData: IAboutData = { name: '', profileImgUrl: '', titles: ['',''], socials: [emptySocial, emptySocial, emptySocial, emptySocial], description: ['',''], cta: { message: 'Send me a message', link: '' } };
    const aboutData = emptyAboutData;
  
    return (
      <section>
        <AboutComponent aboutData={aboutData} />
      </section>
    )
  }