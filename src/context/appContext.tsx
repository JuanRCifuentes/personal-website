"use client"
import { createContext, useContext, useState } from 'react';
import { websitePages } from '@/utils/pages'

const AppContext = createContext({
    websitePages: [
        { name: '', path: '' },
    ]
});

export function AppWrapper( {children}: {children: React.ReactNode} ) {

    let [state, setState] = useState({
        websitePages: websitePages,
    });

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}