"use client"
import { signIn } from "next-auth/react"
import styles from "../navbar.module.css"
import { Session } from "next-auth";
import React from "react";
import Button from "./SignButtons";

type UserMenuButtonProps = {
    variant?: 'signIn' | 'signUp';
}
const UserMenuButton: React.FC<UserMenuButtonProps> = ({ variant }) => {
    const className = variant === 'signIn' ? styles.textSignIn : styles.textSignUp;

    const handleSignIn = () => {
        // Código para manejar el inicio de sesión
    };

    const handleSignUp = () => {
        // Código para manejar el registro
    };


    return (
        <div className={styles.containerButtons}>
            <Button variant="signIn" onClick={handleSignIn}>
                Sign in
            </Button>
            <Button variant="signUp" onClick={handleSignUp}>
                Sign up
            </Button>
        </div>
    )
}

export default UserMenuButton

