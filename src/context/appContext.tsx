"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { websitePages } from '@/utils/pages'
import { 
    fetchAboutData, 
    IAboutData, 
    fetchContactLinks, 
    IContactLink 
} from '@/services/fetchService';
import { contactLinks } from '@/data/tempData';

interface IAppContext {
    websitePages: { name: string, path: string }[],
    aboutData: IAboutData,
    contactLinks: IContactLink[]
}

const declaration = {
    websitePages: [{ name: '', path: '' }],
    aboutData: { name: '', profileImgUrl: '', titles: [], socials: [], description: [], cta: { message: '', link: '' } },
    contactLinks: []
}

const AppContext = createContext<IAppContext>(declaration);

export function AppWrapper( {children}: {children: React.ReactNode} ) {
    const emptyAboutData: IAboutData = { name: '', profileImgUrl: '', titles: [], socials: [], description: [], cta: { message: '', link: '' } };
    const [aboutData, setAboutData] = useState<IAboutData>( emptyAboutData );
    const [contactLinks, setContactLinks] = useState<IContactLink[]>([]);

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
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}