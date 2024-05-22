"use client"
import React, { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';

interface PathContextProps {
    currentPath: string;
    subSection: string;
}

const PathContext = createContext<PathContextProps | undefined>(undefined);

export const PathProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const currentPath = usePathname();
    const subSection = currentPath.split('/')[3];

    const value = { currentPath, subSection };

    return <PathContext.Provider value={value}>{children}</PathContext.Provider>;
};

export const usePathContext = () => {
    const context = useContext(PathContext);
    if (!context) {
        throw new Error('usePathContext must be used within a PathProvider');
    }
    return context;
};
