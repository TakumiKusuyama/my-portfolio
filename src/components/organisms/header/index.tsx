import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../../style/top.css';

const HeaderOrganism = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="header-navbar">
            <Container>
                <Navbar.Brand href="#">WinterDev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href='#works'>Works</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderOrganism;
