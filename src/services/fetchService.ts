import { aboutData, contactLinks } from '../data/tempData';
import { ReactNode } from 'react';

export interface IContactLink {
    name: string;
    kind: string;
    message: string;
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

export async function fetchContactLinks(): Promise<IContactLink[]> {
    return contactLinks;
}

export async function fetchAboutData(): Promise<IAboutData> {
    return aboutData;
}