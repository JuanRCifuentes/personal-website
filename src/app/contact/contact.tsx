import React from 'react'
import Card from './card'

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
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
            <Card 
              icon={<FaWhatsapp />}
              name='WhatsApp' 
              contact='+57 (313) 869-0872'
              url='https://wa.me/573138690872'
            />
            <Card 
              icon={<IoMailOutline />}
              name='Email' 
              contact='info@juanrcifuentes.com'
              url='mailto:info@juanrcifuentes.com'
            />
          </div>
        </div>
        <div>
          <div className='text-xl my-3 sm:text-center'>Social Media</div>
          <div className='flex flex-col gap-4'>
            <Card 
              icon={<FaLinkedin />}
              name='LinkedIn' 
              contact='/in/juanrcifuentes/'
              url='https://www.linkedin.com/in/juanrcifuentes/'
            />
            <Card 
              icon={<FaGithub />}
              name='Github' 
              contact='/JuanRCifuentes'
              url='https://github.com/JuanRCifuentes'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact