import styles from "@/styles/modules.module.css"
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface cardModuleProps {
    image: string,
    hours: string,
    title: string,
    description: string,
    path: string,
}

const CardModule: React.FC<cardModuleProps> = ({ image, hours, title, description, path }) => {
    return (
        <Link href={path}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={image} width={361} height={203} />
                </div>
                <h4 className={styles.moduleHours}>{hours}</h4>
                <h3 className={styles.moduleTitle}>{title}</h3>
                <p className={styles.moduleDescription}>{description}</p>
                <Link href={path} className={styles.moduleButton}>Enroll</Link>
            </div>
        </Link>
    )
}

export default CardModule;
