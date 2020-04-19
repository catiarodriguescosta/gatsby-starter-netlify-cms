// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
    font-family: "Barlow Semi Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.8rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/recipes">Recipes</NavItem>
        <NavItem to="/tips">Tips</NavItem>
        <NavItem to="/Slimming-world">Slimming World</NavItem>
    </>
  )
}

export default NavbarLinks

