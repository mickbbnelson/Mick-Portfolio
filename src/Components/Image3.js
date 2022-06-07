import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import ShanMaine2 from '../Assets/ShanMaine2.jpg'

const Styles = styled.div`
    .ShanImage {
        width: 250px;
        height: 220px;
        border-radius: 25px;
    }
`;

const Image3 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={ShanMaine2} className="ShanImage" alt="ShanMaine2"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image3