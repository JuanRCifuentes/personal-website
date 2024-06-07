import { aboutData, contactLinks, projectsData } from '../data/tempData';
import { ReactNode } from 'react';

export interface IContactLink {
    name: string;
    kind: string;
    message: string;
    urlName: string;
    url: string;
    icon: ReactNode;
}
export interface IAboutData {
    name: string;
    profileImgUrl: string;
    titles: string[];
    socials: IContactLink[];
    description: ReactNode[];
    cta: { message: string, link: string };
};

export interface IProjectData {
    title: string;
    description: string;
    tags: string[];
    img: string;
    link: string;
    text: string;
}

export async function fetchContactLinks(): Promise<IContactLink[]> {
    console.log("fetchContactLinks")
    return contactLinks;
}

export async function fetchAboutData(): Promise<IAboutData> {
    console.log("fetchAboutLinks")
    return aboutData
}

export async function fetchProjectsData(): Promise<IProjectData[]> {
    console.log("fetchProjectsData")
    return projectsData;
}