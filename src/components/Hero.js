import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import heroImg from '../img/hero.jpg'


const HeroDiv = styled.div`
    background: url(${heroImg}) center center / cover fixed;
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;

`
const HeroContent = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
`
const HeroHeadline  = styled.h2`
  font-family: "abril Fatface";
  font-size: 60px;
  color: white;

`
const HeroLogo = styled.div`
    font-family: "pacifico";
    font-size: 30px;
    color: white;
`

const Hero= ({ Heading,  SubHeading, ImgSrc}) => (
    <HeroDiv style ={ { background: (ImgSrc === "" ? "a" : "url("+ImgSrc+") center center / cover  fixed"), minHeight: (ImgSrc === "" ? "70vh" : "50vh") }}>        
        <HeroContent>
            <HeroLogo>
                {Heading}
            </HeroLogo>
            <HeroHeadline>
                {SubHeading}
            </HeroHeadline>
        </HeroContent>
    </HeroDiv>
)

Hero.propTypes = {
    Page: PropTypes.string,
    Heading: PropTypes.string,
    SubHeading: PropTypes.string, 
    ImgSrc: PropTypes.string,
}
  
Hero.defaultProps = {
    Heading: ``,
    SubHeading: ``,
    ImgSrc: ``,
}

export default Hero;