import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import FocusedImage from '../Assets/FocusedImage.jpg'

const Styles = styled.div`
    .card  {
        background-size: cover;
        color: black;
        width: 250px;
    }

    .card img {
        height: 150px;
    }
`;

const ProjectCard1 = () => {
    return(
        <Styles>
        <Container>
            <div className="card">
            <img src={FocusedImage} className="card-img-top" alt="focusedImage"/>
            <div className="card-body">
                <h5 className="card-title">Focused Organizer</h5>
                <p className="card-text">Built ith JavaScript, React, Redux, Ruby on Rails and ActiveRecord</p>
                <a href="https://focused-organizer-frontend.herokuapp.com/" target="_blank" className="btn btn-primary">Visit</a>
                </div>
            </div>  
     </Container> 
     </Styles>
    )
}
export default ProjectCard1