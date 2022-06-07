import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PaisMountain from '../Assets/PaisMountain.jpg'

const Styles = styled.div`
    .PaisImage {
        width: 250px;
        height: 220px;
        border-radius: 25px;
    }
`;

const Image2 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={PaisMountain} className="PaisImage" alt="PaisMountain"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image2