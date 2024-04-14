"use client"
import { useContext, useState, useEffect, ReactNode } from 'react';

import { ThemeContext } from "@/contexts/ThemeContext";

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext)!;
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
