"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { websitePages } from '@/utils/pages'
import { 
    fetchAboutData, 
    IAboutData, 
    fetchContactLinks, 
    IContactLink, 
    IProjectData
} from '@/services/fetchService';

interface IAppContext {
    websitePages: { name: string, path: string }[],
    aboutData: IAboutData,
    contactLinks: IContactLink[],
    projectsData: IProjectData[],
    setProjectsData: React.Dispatch<React.SetStateAction<IProjectData[]>>
}

const declaration = {
    websitePages: [{ name: '', path: '' }],
    aboutData: { name: '', profileImgUrl: '', titles: [], socials: [], description: [], cta: { message: '', link: '' } },
    contactLinks: [],
    projectsData: [],
    setProjectsData: () => {}
}

const AppContext = createContext<IAppContext>(declaration);

export function AppWrapper( {children}: {children: React.ReactNode} ) {
    const emptySocial = { name: '', kind: 'social_media', message: '', urlName: '', url: '', icon: '' };
    const emptyAboutData: IAboutData = { name: '', profileImgUrl: '', titles: ['',''], socials: [emptySocial, emptySocial, emptySocial, emptySocial], description: ['',''], cta: { message: 'Send me a message', link: '' } };
    const [aboutData, setAboutData] = useState<IAboutData>( emptyAboutData );
    const [contactLinks, setContactLinks] = useState<IContactLink[]>([
        { name: '', kind: 'social_media', message: '', urlName: '', url: '', icon: '' },
        { name: '', kind: 'social_media', message: '', urlName: '', url: '', icon: '' },
        { name: '', kind: 'directly', message: '', urlName: '', url: '', icon: '' },
        { name: '', kind: 'directly', message: '', urlName: '', url: '', icon: '' },
    ]);
    const [projectsData, setProjectsData] = useState<IProjectData[]>([]);

    useEffect(() => {
        fetchAboutData()
            .then(data => {
                if(data){ setAboutData(data) }
            })
            .catch(error => { console.error(error) });

        fetchContactLinks()
            .then(data => {
                if(data){ setContactLinks(data) }
                })
            .catch(error => { console.error(error) });
    }, [])

    return (
        <AppContext.Provider value={{
            websitePages: websitePages,
            aboutData: aboutData,
            contactLinks: contactLinks,
            projectsData: projectsData,
            setProjectsData: setProjectsData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}