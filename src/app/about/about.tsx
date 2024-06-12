"use client"

import AboutComponent from './aboutComponent'
import { useAppContext } from '@/context/appContext';

const AboutPage = () => {
  const { aboutData } = useAppContext();

  return (
    <section>
      <AboutComponent aboutData={aboutData} />
    </section>
  )
}

export default AboutPage;