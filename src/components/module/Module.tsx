import styles from "./modules.module.css"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import i18n from "../../i18n";

interface cardModuleProps {
    image: string,
    hours: string,
    title: string,
    description: string,
    path: string,
    available: boolean
}

const CardModule: React.FC<cardModuleProps> = ({ image, hours, title, description, path, available }) => {
    const enroll = i18n.language === 'es' ? 'Inscribir' : 'Enroll';

    const truncateDescription = (text: string) => {
        const wordLimit = 30;
        const words = text.split(' ');

        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }

        return text;
    };

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={image} width={361} height={203} priority={false} />
                    {!available && <div className={styles.comingSoonOverlay}>Coming soon..</div>}
                </div>
                <h4 className={styles.moduleHours}>{hours}</h4>
                <h3 className={styles.moduleTitle}>{title}</h3>
                <p className={styles.moduleDescription}>{truncateDescription(description)}</p>
                {available && (
                    <Link href={path} className={styles.moduleButton}>{enroll}</Link>
                )}
            </div>
        </div>
    )
}

export default CardModule;
