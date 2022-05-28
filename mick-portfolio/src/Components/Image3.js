import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import ShanHiking from '../Assets/ShanHiking.jpg'

const Styles = styled.div`
    .ShanImage {
        width: 250px;
        height: 250px;
    }
`;

const Image3 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={ShanHiking} className="ShanImage" alt="ShanHikingImage"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image3