import React, { ReactNode, useEffect, useState } from 'react';
import styles from "./pageContent.module.css";
import Sidebar from '../sidebar/Sidebar';
import i18n from "../../i18n";
import contentEN from "../../../public/locales/en/cardModule.json";
import contentES from "../../../public/locales/es/cardModule.json";

interface PageContentProps {
    children: ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
    const [languageContent, setLanguageContent] = useState<any[]>([]);
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

    useEffect(() => {
        // Esta función se llama cada vez que el idioma cambia.
        const loadContent = () => {
            const content = i18n.language === 'es' ? contentES : contentEN;
            setLanguageContent(content);
        };

        loadContent();

        // Opcionalmente, escuchar cambios en i18n si es necesario
        i18n.on('languageChanged', loadContent);

        // Limpieza al desmontar el componente
        return () => {
            i18n.off('languageChanged', loadContent);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.sidebar} ${sidebarVisible ? styles.visible : ''}`}>
                <Sidebar modules={languageContent} />
            </div>
            <button className={`${styles.toggleButton} ${sidebarVisible ? styles.inside : ''}`} onClick={toggleSidebar}>
                {sidebarVisible ? '❮' : '❯'}
            </button>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default PageContent;
