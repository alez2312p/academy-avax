"use client"
import { useContext } from "react";
import styles from "./toggleTheme.module.css";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const ThemeToggle = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('ThemeToggle must be used within a ThemeContextProvider');
    }

    const { theme, toggle } = context;

    const icon = theme === "dark"
        ? <Image className={styles.icon} src="/sun.png" alt="sun.png" width={40} height={40} />
        : <Image className={styles.icon} src="/moon.png" alt="moon.png" width={40} height={40} />

    return (
        <button className={styles.container} onClick={toggle}>
            {icon}
        </button>
    );
};

export default ThemeToggle;
