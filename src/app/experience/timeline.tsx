'use client'

import { useAppContext } from '@/context/appContext'
import { IProjectData, fetchProjectsData } from '@/services/fetchService'
import React, { useEffect, useState } from 'react'

const Timeline = () => {
    const { projectsData, setProjectsData } = useAppContext()
    const [ projectsList, setProjectsList ] = useState<IProjectData[]>(
        projectsData.length > 0 ? projectsData : []
    )
    const [ selectedKind, setSelectedKind ] = useState('All')
    const listOfButtons = ['All', 'Data', 'Web Development']

    useEffect(() => {
        if (projectsData.length === 0) {
            fetchProjectsData()
                .then(data => {
                    if(data){ 
                        setProjectsData(data)
                        setProjectsList(data)
                    }
                })
                .catch(error => { console.error(error) });
        } 
    } , [])

    useEffect(() => {
        if (selectedKind !== 'All') {
            setProjectsList( projectsData.filter(project => project.kind === selectedKind ))
        } else {
            setProjectsList(projectsData)
        }

    }, [selectedKind])

    return (
        <div>
            <menu className='flex gap-5 items-center justify-center mb-8'>
                {listOfButtons.map((kind, idx) => (
                    <li key={idx}>
                        <button 
                            className={`
                                px-4 py-2 border border-transparent rounded-full shadow-md hover:border-blue-900 active:bg-blue-900 active:text-white
                                ${selectedKind === kind ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}
                            onClick={() => setSelectedKind(kind)}
                        >
                            {kind}
                        </button>
                    </li>
                ))}
            </menu>
            <ul className='flex flex-col relative container mx-auto px-6 gap-5'>
                <div className='absolute z-0 w-2 h-full bg-white shadow-md left-[4.25rem] inset-0 md:mx-auto md:right-0 md:left-0'></div>
                {projectsList.map((experience, idx) => (
                    <TimelineCard key={idx} experience={experience} idx={idx}/>
                ))}
            </ul>
        </div>
    )
}

export default Timeline

const TimelineCard = ( props: {experience: IProjectData, idx: number}) => {
    const { experience, idx } = props

  return (
    <li className='relative z-10'>
        <img 
            src={experience.img}
            alt=''
            className='h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0'
        />
        <div className={`relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2  
            ${idx%2===0? 'md:ml-auto md:pl-16' // right
            : 'md:mr-auto md:ml-0 md:pl-0 md:pr-16' // left
            }`}
        >
            <div 
                className={`absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-10 xs:left-[104px] 
                    ${idx%2===0? 'md:left-14'
                    : 'md:left-auto md:right-14'}`}
                aria-hidden='true'
            />
            <div className='bg-white p-6 rounded-md shadow-md'>
                <p>{experience.tags.join(', ')}</p>
                <h3 className='text-2xl'>{experience.title}</h3>
                <p className='text-gray-400'>{experience.kind}</p>
                <p className='mt-2'>{experience.description}</p>
                <a href={experience.link} className='text-blue-900 hover:underline'>{experience.link}</a>
                <p className='mt-2'>{experience.text}</p>
            </div>
        </div>
    </li>
  )
}