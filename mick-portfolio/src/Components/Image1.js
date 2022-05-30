import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import TrampledByTurtlesImage from '../Assets/TrampledByTurtlesImage.jpg'

const Styles = styled.div`
    .TrampledImage {
        width: 250px;
        height: 220px;
        border-radius: 25px;
    }
`;

const Image1 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={TrampledByTurtlesImage} className="TrampledImage" alt="TrampledImage"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image1