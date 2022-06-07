import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
      background-color: #  
    }

    .navbar-brand, .navbar-nav .nav-link {
       color: #bbb;
       margin-left: 5px
    }

    .navbar-brand, .navbar-nav .nav-link:hover {
        color: white  
     }

    .navbar-toggler-icon {
        color: white
    }

    .fa {
        padding: 15px;
        font-size: 20px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 10px
    }

    .fa-twitter {
        background: #55ACEE;
        color: white;
    }

    .fa-linkedin {
        background: #0077b5;
        color: white;
    }
`;

const Header = () => {
    return(
        <Styles>
            <Navbar expand='1g'>
                <Navbar.Brand href="/">Mick Nelson </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                        <a href="https://www.linkedin.com/in/mick-nelson-denver/" className="fa fa-linkedin" target="_blank"></a>
                        <a href="https://twitter.com/phunkymick" className="fa fa-twitter"></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default Header