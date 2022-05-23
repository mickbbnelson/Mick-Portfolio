import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import MountainPic from '../Assets/MountainPortfolio.jpg'
import ForrestImage from '../Assets/ForrestImage.jpg'

const Styles = styled.div`
    .container-fluid  {
        background: url(${ForrestImage}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
    }
`;

const Jumbotron = () => {
    return(
        <Styles>
            <Container>
	        <div className="container-fluid bg-light p-5">
            <p>Mick Nelson</p>
	        <h2>Full Stack Developer</h2>
	        <p className="lead">Software engineer based out of Denver Colorado</p>
	        <hr className="my-4"/>
	        <p></p>
	        <a className="btn btn-primary btn-lg" href="#" role="button">Projects</a>
	        </div>
            </Container>
        </Styles>
    )
}

export default Jumbotron
