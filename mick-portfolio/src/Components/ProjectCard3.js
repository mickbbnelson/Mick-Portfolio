import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import HikeSanJuanIslandsImage from '../Assets/HikeSanJuanIslandsImage.jpg'

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

const ProjectCard3 = () => {
    return(
        <Styles>
        <Container>
            <div className="card">
            <img src={HikeSanJuanIslandsImage} className="card-img-top" alt="HikeSanJuanIslands"/>
            <div className="card-body">
                <h5 className="card-title">Hike San Juan Islands</h5>
                <p className="card-text">Built with Ruby on Rails, ActiveRecord, HTML, CSS  and OmniAuth</p>
                <a href="https://hike-san-juan-islands.herokuapp.com/" target="_blank" className="btn btn-primary">Visit</a>
                </div>
            </div>  
     </Container> 
     </Styles>
    )
}
export default ProjectCard3