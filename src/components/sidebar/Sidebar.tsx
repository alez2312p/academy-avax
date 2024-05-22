import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./styles.module.css"
import SectionsList from '../sectionsList/SectionsList';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

type Section = {
    path: string;
    title: string;
}

type SidebarProps = {
    modules: Section[];
};

const Sidebar: React.FC<SidebarProps> = ({ modules }) => {
    const [expandedModule, setExpandedModule] = useState<string | null>(null);
    return (
        <aside className={styles.container}>
            {modules.map((module) => {

                // const section = module.path.split('/').pop();
                const parts = module.path.split('/');
                const section = parts.length > 1 ? parts[parts.length - 3] : null;

                const isExpanded = expandedModule === module.title;
                return (
                    <div key={module.title}>
                        <Link className={styles.link} href="#" onClick={(e) => {
                            e.preventDefault();
                            setExpandedModule(isExpanded ? null : module.title)
                        }}>
                            {module.title}
                            {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                        </Link>
                        {expandedModule === module.title && <SectionsList section={section!} />}
                    </div>
                );
            })}
        </aside>
    );
};

export default Sidebar;
