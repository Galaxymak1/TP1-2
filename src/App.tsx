
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Page1 from './page1/page1';




function App() {

  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
    </Router>
  )
}



export default App
