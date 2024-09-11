import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';
import Home from './Home';
import Page1 from './page1/page1';
import Page2 from './page 2/page2';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ThemeWrapper>
                    <ThemeSwitcher />
                    <Routes >
                        <Route path="/" element={<Home />} />
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                    </Routes>
                </ThemeWrapper>
            </Router>
        </ThemeProvider>
    );
}

export default App;
