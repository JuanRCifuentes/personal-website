"use client"

import React, { useEffect, useState } from 'react'
import Timeline from './timeline'
import { useAppContext } from '@/context/appContext'
import { fetchProjectsData } from '@/services/fetchService'

const Experience = () => {
  const { projectsData, setProjectsData } = useAppContext()
  
  const listOfKinds = projectsData.map(project => project.kind)
  const listOfButtons = ['All', ... listOfKinds.filter((kind, index) => listOfKinds.indexOf(kind) === index)];

  useEffect(() => {
      if (projectsData.length === 0) {
          fetchProjectsData()
              .then(data => {
                  if(data){ 
                      setProjectsData(data)
                  }
              })
              .catch(error => { 
                console.error(error)
              });
      }
  } , [])

  return <Timeline listOfButtons={listOfButtons} projectsData={projectsData} />
}

export default Experience