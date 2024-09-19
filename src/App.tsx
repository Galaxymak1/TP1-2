import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';
import Home from './Home';
import Page1 from './page1/page1';
import Page2 from './page 2/page2';
import NavBar from './containers/NavBar/NavBar';
import Meteo from './containers/Meteo'
import Map from './components/Map'; 
import MyCalendar from './components/Calendar/CalendarComponent';

function App() {
    return (
        <ThemeProvider>
            <header>
                <NavBar></NavBar>
            </header>
            <Router>
                <ThemeWrapper>
                    <Routes >
                        <Route path="/" element={<Home />} />
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/weather" element={<Meteo />}>  </Route>
                        <Route path="/map" element={<Map />}>  </Route>
                        <Route path="/calendar" element={<MyCalendar />}>  </Route>
                    </Routes>
                </ThemeWrapper>
            </Router>
        </ThemeProvider>
    );
}

export default App;
