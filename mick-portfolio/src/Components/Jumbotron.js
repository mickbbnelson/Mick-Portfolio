// import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import StarSky from '../Assets/StarSky.jpg'

const Styles = styled.div`
    .container-fluid  {
        background: url(${StarSky}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
    }
`;

const Jumbotron = () => {
    return(
        <Styles>
	        <div className="container-fluid bg-light p-5">
            <p>Mick Nelson</p>
	        <h2>Full Stack Developer</h2>
	        <p className="lead">Software engineer based out of Denver Colorado</p>
	        <hr className="my-4"/>
	        <p></p>
	        <a className="btn btn-primary btn-lg" href="/projects" role="button">Projects</a>
	        </div>
        </Styles>
    )
}

export default Jumbotron
