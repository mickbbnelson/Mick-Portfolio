import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PaisHikingImage from '../Assets/PaisHikingImage.jpg'

const Styles = styled.div`
    .PaisImage {
        width: 250px;
        height: 250px;
    }
`;

const Image2 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={PaisHikingImage} className="PaisImage" alt="PaisHikingImage"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image2