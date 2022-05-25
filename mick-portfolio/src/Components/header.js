import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
      background-color: #222  
    }

    .navbar-brand, .navbar-nav .nav-link {
       color: #bbb
    }

    .navbar-brand, .navbar-nav .nav-link:hover {
        color: white  
     }
`;

const Header = () => {
    return(
        <Styles>
            <Navbar expand='1g'>
                <Navbar.Brand href="/">Shya! Roight!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="">Boingo</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default Header