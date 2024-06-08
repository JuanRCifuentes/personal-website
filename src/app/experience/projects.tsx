'use client'

import React, { useEffect } from 'react'
import { fetchProjectsData } from '@/services/fetchService';
import { useAppContext } from '@/context/appContext';

const Projects = () => {
  const { projectsData, setProjectsData } = useAppContext()

  useEffect(() => {
    if (!projectsData.length)
    {
      fetchProjectsData()
        .then(data => {
          setProjectsData(data)
        })
        .catch(error => { console.error(error) });
    }
  } , [])

  return (
    <div className='p-5'>
      {projectsData.map((project, index) => (
        <div className='flex flex-col m-5 gap-2' key={index}>
          <div className='text-3xl'>{project.title}</div>
          <div className='text-xl'>{project.description}</div>
          <div className='flex gap-2 justify-center sm:justify-start'>
            {project.tags.map((tag, index) => (
              <div key={index} className='text-sm rounded-full h-8 w-24 text-center content-center'>
                {tag}
              </div>
            ))}
          </div>
          {project.link && <a href={project.link} className='text-blue-500'>{project.link}</a>}
          <div>{project.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Projects