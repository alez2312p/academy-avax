import React, { useEffect, useState } from 'react';
import i18n from "../../i18n";
import styles from "./styles.module.css";
import Link from 'next/link';
import SubSectionsList from '../subSectionsList/SubSectionsList';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

import sectionsEN from "../../../public/locales/en/sections.json";
import sectionsES from "../../../public/locales/es/sections.json";

type SectionItem = {
    title: string;
    path: string;
};

type Sections = {
    [key: string]: SectionItem[];
}

const SectionsList = ({ section }: { section: string | undefined }) => {
    const [sections, setSections] = useState<SectionItem[]>([]);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    useEffect(() => {
        const loadSection = () => {
            // Determinar el objeto de secciones basado en el idioma actual
            const sect: Sections = i18n.language === 'es' ? sectionsES : sectionsEN;
            // Filtrar secciones basadas en el parámetro `section`
            const selectedSections = sect[section ?? ''] || [];
            setSections(selectedSections);
        };

        loadSection();

        // Escuchar cambios en el idioma para actualizar las secciones
        i18n.on('languageChanged', loadSection);

        // Limpieza al desmontar el componente
        return () => {
            i18n.off('languageChanged', loadSection);
        };
    }, [section]); // Añadir `section` a la lista de dependencias

    return (
        <div className={styles.container}>
            {sections.map((item, index) => {
                const subSection = item.path.split('/').pop();

                const isExpanded = expandedSection === item.title;
                return (
                    <div key={index}>
                        <Link className={styles.link} href="#" onClick={(e) => {
                            e.preventDefault();
                            setExpandedSection(isExpanded ? null : item.title)
                        }}>
                            {item.title}
                            {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                        </Link>
                        {expandedSection === item.title && <SubSectionsList subSection={subSection} />}
                    </div>
                )
            })}
        </div>
    );
};

export default SectionsList;
