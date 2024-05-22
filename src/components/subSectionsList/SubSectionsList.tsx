import React, { useEffect, useState } from 'react';
import i18n from "../../i18n";
import styles from "./styles.module.css"

// Importando los JSONs locales para los idiomas
import subSectionsEN from "../../../public/locales/en/subSections.json";
import subSectionsES from "../../../public/locales/es/subSections.json";
import Link from 'next/link';

type SectionItem = {
    title: string;
    path: string;
};

type Sections = {
    [key: string]: SectionItem[];
}

const SubSectionsList = ({ subSection }: { subSection: string | undefined }) => {
    const [sections, setSections] = useState<SectionItem[]>([]);

    useEffect(() => {
        const loadSection = () => {
            // Determinar el objeto de secciones basado en el idioma actual
            const sect: Sections = i18n.language === 'es' ? subSectionsES : subSectionsEN;
            // Filtrar secciones basadas en el parámetro `section`
            const selectedSections = sect[subSection ?? ''] || [];
            setSections(selectedSections);
        };

        loadSection();

        // Escuchar cambios en el idioma para actualizar las secciones
        i18n.on('languageChanged', loadSection);

        // Limpieza al desmontar el componente
        return () => {
            i18n.off('languageChanged', loadSection);
        };
    }, [subSection]); // Añadir `section` a la lista de dependencias

    return (
        <div className={styles.container}>
            {sections.map((item, index) => (
                <Link className={styles.link} href={item.path} key={index}>
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default SubSectionsList;
