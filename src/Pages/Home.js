import Image1 from '../Components/Image1'
import Image2 from '../Components/Image2'
import Image3 from '../Components/Image3'
import styled from 'styled-components'

const Styles = styled.div`
    .imageUl {
        text-align: center;
    }
    .imageUl li {
        display: inline-block; 
        margin: 15px;
    }
    .aboutDiv {
        color: white;
    }
`;

const Home = () => {
    return(
        <>
        <Styles>
        <div className="aboutDiv">
            <h1>About:</h1>
            <p>I’m a motivated front end developer with back end experience 
                who recently made a career change from working in live entertainment 
                to software engineering. My love for live music led me to chase a 
                career in ticketing and I landed a position at AXS who manages the 
                ticketing for over 10 venues (including Red Rocks) in the Denver area. 
                My experience in ticketing is what led me to software engineering.  
                At AXS, I became a go-to person to control event pages, test QA functionality, 
                and manage event builds. Through this position, I realized my passion 
                for this work and decided to pursue a career in software engineering.</p>
            <p>Over the past few years I have been expanding my knowledge of programming 
                and recently completed Flatiron Software Engineer Bootcamp. The more I 
                learn about technologies such as React, JavaScript and Ruby on Rails, 
                the more intrigued I become. I'm excited to apply the skills acquired 
                at Flatiron and AXS to a position in this ever-evolving industry.</p>
            <p>When I’m not programming I enjoy hanging out with my wife and dog, traveling,  
                hiking in the mountains, seeing live music and enjoying everything 
                that Colorado has to offer!</p>
        </div>
        <div>
            <ul className="imageUl">
                <li><Image1 /></li>
                <li><Image2 /></li>
                <li><Image3 /></li>
            </ul>
        </div>
        </Styles>
        </>
    )
}

export default Home