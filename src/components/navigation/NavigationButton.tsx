import React from 'react';
import styles from "./navigationButton.module.css"
interface NavigationButtonProps {
    label: string;
    direction: 'previous' | 'next';
    onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.navigationButton} ${direction === 'next' ? `${styles.nextButton}` : `${styles.previousButton}`}`}
        >
            {direction === "next" ? (
                <span className={styles.span}>{label} &#x27A1;</span>
            ) : (
                <span className={styles.span}>&#x2B05; {label}</span>
            )}
        </button>
    );
};

export default NavigationButton;
