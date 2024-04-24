import React, { useState, useEffect, useRef } from 'react';
import styles from "./multiTitle.module.css";

const useDynamicTypewriter = (titles: string[], speed = 150) => {
    const [displayText, setDisplayText] = useState('');
    const indexRef = useRef(0);
    const modeRef = useRef('typing');
    const titleIndexRef = useRef(0);
    const [showCursor, setShowCursor] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {

        const currentTitle = titles[titleIndexRef.current];

        const handleTyping = () => {
            if (indexRef.current < currentTitle.length) {
                setDisplayText(prev => prev + currentTitle.charAt(indexRef.current));
                indexRef.current++;
            } else {
                timeoutRef.current = setTimeout(() => {
                    modeRef.current = 'deleting';
                }, 1000);
            }
        };

        const handleDeleting = () => {
            if (indexRef.current > 0) {
                setDisplayText(prev => prev.slice(0, -1));
                indexRef.current--;
            } else {
                titleIndexRef.current = (titleIndexRef.current + 1) % titles.length;
                modeRef.current = 'typing';
                indexRef.current = 0;
            }
        };

        const action = modeRef.current === 'typing' ? handleTyping : handleDeleting;
        const interval = setInterval(action, speed);

        return () => {
            clearInterval(interval);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, [modeRef.current, titles, speed]);

    useEffect(() => {
        const blink = setInterval(() => {
            setShowCursor(show => !show);
        }, 500);

        return () => clearInterval(blink);
    }, []);

    return [displayText, showCursor];
};

const DynamicTitle = ({ titles, speed }: { titles: string[], speed: number }) => {
    const [displayText, showCursor] = useDynamicTypewriter(titles, speed);

    return (
        <span className={styles.title}>
            {" " + displayText}
            {showCursor && <span className={styles.cursor}>|</span>}
        </span>
    );
};

export default DynamicTitle;
