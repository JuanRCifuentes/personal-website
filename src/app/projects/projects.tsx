'use client'

import React, { useEffect } from 'react'
import { fetchProjectsData } from '@/services/fetchService';
import { useAppContext } from '@/context/appContext';

const Projects = () => {
  const { projectsData, setProjectsData } = useAppContext()

  useEffect(() => {
    fetchProjectsData()
      .then(data => {
        setProjectsData(data)
      })
      .catch(error => { console.error(error) });
  } , [])

  return (
    <>
      {projectsData.map((project, index) => (
        <div className='flex flex-col m-5 gap-2' key={index}>
          <div className='text-3xl dark:text-gold'>{project.title}</div>
          <div className='text-xl text-gray'>{project.description}</div>
          <div className='flex gap-2 justify-center sm:justify-start'>
            {project.tags.map((tag, index) => (
              <div key={index} className='text-sm bg-gray dark:bg-gold dark:text-navy rounded-full h-8 w-24 text-center content-center'>
                {tag}
              </div>
            ))}
          </div>
          <div>{project.text}</div>
        </div>
      ))}
    </>
  )
}

export default Projects