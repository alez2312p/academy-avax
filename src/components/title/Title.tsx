"use client"
import { useState, useEffect, useRef } from 'react';
import styles from "./title.module.css";

const useTypewriter = (title: string, speed = 150) => {
    const [displayText, setDisplayText] = useState('');
    const indexRef = useRef(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {

        indexRef.current = 0;
        setDisplayText('');
        setShowCursor(true);

        const typingInterval = setInterval(() => {
            indexRef.current++;
            setShowCursor(false);
            if (indexRef.current <= title.length) {
                setDisplayText(prevText => prevText + (title.charAt(indexRef.current - 1) || ''));
            } else {
                clearInterval(typingInterval);
            }
            setShowCursor(true);
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [title, speed]);

    return [displayText, showCursor];
};

const Title = ({ title, speed, fontSize }: { title: string, speed?: number, fontSize?: number }) => {
    const [displayText, showCursor] = useTypewriter(title, speed);
    const prevTitle = useRef(title);

    useEffect(() => {
        if (prevTitle.current !== title) {
            prevTitle.current = title;
        }
    }, [title]);

    return (
        <p className={styles.title} style={{ fontSize: `${fontSize}px` }}>
            {displayText}
            {showCursor && <span className={styles.cursor}>|</span>}
        </p>
    );
};

export default Title;
