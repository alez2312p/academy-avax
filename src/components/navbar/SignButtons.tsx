import React from 'react';
import styles from "@/styles/signButtons.module.css"
interface ButtonProps {
    variant: 'signIn' | 'signUp';
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
    const className = variant === 'signIn' ? styles.signIn : styles.signUp;
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
