
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Page1 from './page1/page1';
import Page2 from './page 2/page2';




function App() {

  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
    </Router>
  )
}



export default App
