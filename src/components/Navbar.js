import React, { useState } from "react"
import NavbarLinks from "./NavLinks"
import { Link } from "gatsby"
import styled from 'styled-components'
//import "./Navbar.scss"


const Logo = styled.h1`
  font-size: 30px;
`
const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 9vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)


  {/* 
    changeBackground = () => {
    let scrolled = document.documentElement.scrollTop;
    if (scrolled >= 500) {
      this.setState({ whiteBackground: true });
    } 
    else {
      this.setState({ whiteBackground: false });
    }
  }

  componentDidMount = () => {
    this.setState({ currentPath: this.props.location.pathname })
    document.addEventListener('scroll', this.changeBackground);
  }

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.changeBackground);
  }
  
  */}

  return (
    <Navigation>
      <Link to="/">
        <Logo>a few syns a day...</Logo>
      </Link>

      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar