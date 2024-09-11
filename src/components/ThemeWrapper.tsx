import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();

    useEffect(() => {
        console.log('Applying theme:', theme);
        document.querySelectorAll('[data-theme]').forEach(el => el.remove());

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `/themes/${theme}-theme.css`;
        link.dataset.theme = theme;

        document.head.appendChild(link);

        return () => {
            document.querySelectorAll(`[data-theme="${theme}"]`).forEach(el => el.remove());
        };
    }, [theme]);

    return <>{children}</>;
};

export default ThemeWrapper;
