import React from "react"
//import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeroImg from '../img/hero.jpg'
//import RecipeImages from '../../static/img/coffee-gear.png'



const HeroDiv = styled.div`
    background: url(${HeroImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 70vh;
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

const Hero= ({ Heading,  SubHeading}) => (
    <HeroDiv>
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
    //srcImg: PropTypes.string,
    Heading: PropTypes.string,
    SubHeading: PropTypes.string, 
}
  
Hero.defaultProps = {
    Heading: ``,
    SubHeading: ``,
}
export default Hero;