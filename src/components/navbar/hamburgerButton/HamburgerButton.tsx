"use client"
import { useState } from "react";
import styles from "./hamburgerButton.module.css"
import UserMenuButton from "../signButtons/UserMenuButton";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";


export default function HamburgerButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>

            <div className={styles.hamburgerButton} onClick={toggleMenu}>
                &#9776;
            </div>
            {
                isOpen && (
                    <div className={styles.mobileMenu}>
                        <UserMenuButton />
                        <LanguageSwitcher />
                    </div>
                )
            }
        </div>

    )
}
