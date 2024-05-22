import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavigationButton from './NavigationButton';
import styles from "./navigation.module.css";
import i18n from "../../i18n";

import sectionsEN from "../../../public/locales/en/sections.json";
import sectionsES from "../../../public/locales/es/sections.json";
import subSectionsEN from "../../../public/locales/en/subSections.json";
import subSectionsES from "../../../public/locales/es/subSections.json";
import { usePathContext } from '@/contexts/pathContext';


type SectionItem = {
    title: string;
    path: string;
};

type Sections = {
    [key: string]: SectionItem[];
};

const Navigation: React.FC = () => {
    const router = useRouter();
    const { currentPath, subSection } = usePathContext();

    const [sections, setSections] = useState<SectionItem[]>([]);
    const [allSections, setAllSections] = useState<Sections>({});

    useEffect(() => {
        const loadSection = () => {
            const sect: Sections = i18n.language === 'es' ? sectionsES : sectionsEN;
            const subSect: Sections = i18n.language === 'es' ? subSectionsES : subSectionsEN;
            const selectedSections = sect[subSection] || [];
            const selectedSubSections = subSect[subSection] || [];

            // Combine sections and subSections if needed
            const combinedSections = [...selectedSections, ...selectedSubSections];
            console.log({ combinedSections, sect, subSect, subSection });

            setSections(combinedSections);
            setAllSections({ ...sect, ...subSect });
        };

        loadSection();

        i18n.on('languageChanged', loadSection);

        return () => {
            i18n.off('languageChanged', loadSection);
        };
    }, [i18n.language, subSection]);

    const findPreviousSection = (currentSectionKey: string, allSections: Sections): SectionItem | null => {
        const sectionKeys = Object.keys(allSections);
        const currentIndex = sectionKeys.indexOf(currentSectionKey);

        if (currentIndex <= 0) {
            return null; // No previous section available
        }

        const previousSectionKey = sectionKeys[currentIndex - 1];
        const previousSection = allSections[previousSectionKey];

        return previousSection.length > 0 ? previousSection[previousSection.length - 1] : null;
    };

    const findNextSection = (currentSectionKey: string, allSections: Sections): SectionItem | null => {
        const sectionKeys = Object.keys(allSections);
        const currentIndex = sectionKeys.indexOf(currentSectionKey);

        if (currentIndex === -1 || currentIndex === sectionKeys.length - 1) {
            return null; // No next section available
        }

        const nextSectionKey = sectionKeys[currentIndex + 1];
        const nextSection = allSections[nextSectionKey];

        return nextSection.length > 0 ? nextSection[0] : null;
    };

    const currentIndex = sections.findIndex((module) => module.path === currentPath);
    const previousModule = currentIndex > 0
        ? sections[currentIndex - 1]
        : findPreviousSection(subSection, allSections);
    const nextModule = currentIndex < sections.length - 1
        ? sections[currentIndex + 1]
        : findNextSection(subSection, allSections);

    console.log({ sections });

    return (
        <div className={styles.container}>
            {previousModule && (
                <NavigationButton
                    label={previousModule.title}
                    direction="previous"
                    onClick={() => router.push(previousModule.path)}
                />
            )}
            {nextModule && (
                <NavigationButton
                    label={nextModule.title}
                    direction="next"
                    onClick={() => router.push(nextModule.path)}
                />
            )}
        </div>
    );
};

export default Navigation;
