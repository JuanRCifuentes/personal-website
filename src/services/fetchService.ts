import { aboutData } from '../data/tempData';
import { ReactNode } from 'react';

export interface IAboutData {
    name: string;
    profileImgUrl: string;
    titles: string[];
    socials: { name: string; url: string, icon: ReactNode }[];
    description: ReactNode[];
    cta: { message: string, link: string };
};

export async function fetchAboutData(): Promise<IAboutData> {
    return aboutData;
}