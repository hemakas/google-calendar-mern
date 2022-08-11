import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const BSNavbar = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Calendar App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </header>
    )
}

export default BSNavbar