import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import BillyStringsImage from '../Assets/BillyStringsImage2.jpg'

const Styles = styled.div`
    .BillyImage {
        width: 250px;
        height: 250px;
    }
`;

const Image1 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={BillyStringsImage} className="BillyImage" alt="BillyStringsImage"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image1