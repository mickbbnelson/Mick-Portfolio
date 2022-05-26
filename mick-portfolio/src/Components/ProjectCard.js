import { Container, Card } from 'react-bootstrap'
import styled from 'styled-components'
import ForrestImage from '../Assets/ForrestImage.jpg'

const Styles = styled.div`
    .container-fluid  {
        background: url(${ForrestImage}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
    }
`;

const ProjectCard = () => {
    return(
        <Styles>
        <Container>
      <div className="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Shya</h5>
        <p class="card-text">Right</p>
        <a href="#" class="btn btn-primary">As if</a>
        </div>
     </div>  
     </Container> 
     </Styles>
    )
}
export default ProjectCard