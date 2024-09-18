import { Container } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container className="form-check form-switch d-inline-flex justify-content-end align-items-center">
            <input
                className="form-check-input me-3 mb-1"
                type="checkbox"
                id="themeSwitcher"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            {theme === 'light' ? (
                <FaSun size={20} className='logoDay' />
            ) : (
                <FaMoon size={20} className='logoNight' />
            )}
        </Container>
    );
};

export default ThemeSwitcher;
