import { Container } from 'react-bootstrap';
import '../../../style/top.css';

const FooterOrganism = () => {
    return (
        <footer className="footer bg-dark text-white py-3 mt-auto fixed-bottom">
            <Container className="text-center">
                <small>&copy; {new Date().getFullYear()} WinterDev. All rights reserved.</small>
            </Container>
        </footer>
    );
};

export default FooterOrganism;