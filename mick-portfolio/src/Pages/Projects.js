import ProjectCard1 from '../Components/ProjectCard1'
import ProjectCard2 from '../Components/ProjectCard2'
import ProjectCard3 from '../Components/ProjectCard3'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const Styles = styled.div`
    .projectUl {
        position: absolute;
        margin: auto;
        padding: 10px;
    }

    .projectUl li {
        display: inline-block; 
        margin: 15px;
    }
`;

const Projects = () => {
    return(
        <>
        <Styles>
        <Container>
        <div>
            <h1>Projects:</h1>
            <ul className="projectUl">
                <li><ProjectCard1 /></li>
                <li><ProjectCard2 /></li>
                <li><ProjectCard3 /></li>
            </ul>
        </div>
        </Container>
        </Styles>
        </>
    )
}

export default Projects