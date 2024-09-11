import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="form-check form-switch d-inline-flex justify-content-start">
            <input
                className="form-check-input me-3"
                type="checkbox"
                id="themeSwitcher"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label className="form-check-label" htmlFor="themeSwitcher">
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </label>
        </div>
    );
};

export default ThemeSwitcher;
