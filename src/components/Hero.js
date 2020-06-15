import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import heroImg from '../img/hero.jpg'
import './Hero.scss'

const HeroDiv = styled.div `
    background: url(${heroImg}) center center / cover fixed;
`

const Hero= ({ Heading,  SubHeading, ImgSrc}) => (
    <HeroDiv className="Hero" style ={ { background: (ImgSrc === "" ? "a" : "url("+ImgSrc+") center center / cover  fixed"), minHeight: (ImgSrc === "" ? "70vh" : "50vh") }}>        
        <div className="HeroContent">
            <div className="HeroLogo">
                {Heading}
            </div>
            <h2 className="HeroHeadlineWhite">
                {SubHeading}
            </h2>
        </div>
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