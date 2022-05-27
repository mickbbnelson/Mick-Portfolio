import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import NBASuperteamImage from '../Assets/NBASuperteamImage.jpg'

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

const ProjectCard2 = () => {
    return(
        <Styles>
        <Container>
            <div className="card">
            <img src={NBASuperteamImage} className="card-img-top" alt="NBASuperteamsImage"/>
            <div className="card-body">
                <h5 className="card-title">NBA Superteams</h5>
                <p className="card-text">Built with JavaScript, Ruby on Rails, ActiveRecord, HTML and CSS</p>
                <a href="https://nba-superteam-frontend.herokuapp.com/" target="_blank" className="btn btn-primary">Visit</a>
                </div>
            </div>  
     </Container> 
     </Styles>
    )
}
export default ProjectCard2