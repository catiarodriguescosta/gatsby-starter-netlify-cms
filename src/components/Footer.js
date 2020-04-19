import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
// import logo from '../img/logo.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'


const FooterDiv = styled.footer`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`

const FooterLogo = styled.h1`
  font-family: "Pacifico";
  font-size: 25px;
  margin-bottom: 30px;
`
const FooterSocial = styled.div`
  display: flex;
  justify-content: center; 

  a {
    margin: 0 10px;
  }

`
const Copyrights = styled.p`
  font-size: 12px;
`

const Footer = class extends React.Component {
  render() {
    return (
      <FooterDiv>

        <FooterLogo>
          a few syns a day...
        </FooterLogo>

        <FooterSocial>
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
{/*           <a title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: '1em', height: '1em' }}
            />
          </a> */}
        </FooterSocial>

        
        <Copyrights>
            &copy; 2020, Built by Cátia Costa using React &hearts;
        </Copyrights>
        

      </FooterDiv>
    )
  }
}

export default Footer
