import { Container, Nav, NavbarBrand } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAstronaut } from "react-icons/fa6";
import "./NavBar.css"
import ThemeSwitcher from '../../components/ThemeSwitcher';


const NavBar= () => {
    return (
        <Navbar className='fixed-top  align-items-center custom-navbar px-3 mt-2' >
            <Container fluid className='align-items-center '>
            <NavbarBrand href='/' className='align-items-center '>
                <FaUserAstronaut className='NavBrand' size={24}/>
            </NavbarBrand>
            <Nav className="me-auto d-none d-sm-flex">
                <Nav.Link href="/page1" className='text-dark'>Page 1</Nav.Link>
                <Nav.Link href="/page2" className='text-dark'>Galerie</Nav.Link>
                <Nav.Link href="/weather" className='text-dark'>Meteo</Nav.Link>
                <Nav.Link href="/map" className='text-dark'>Carte</Nav.Link>
                <Nav.Link href="/calendar" className='text-dark'>Calendrier</Nav.Link>
            </Nav>


            </Container>
            <Container className='d-flex'>
                <ThemeSwitcher></ThemeSwitcher>
            </Container>
            
        </Navbar>
    )
}
export default NavBar