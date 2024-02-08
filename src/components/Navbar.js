// NavBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";

// Styles
// const NavBarWrapper = styled.nav`
//     background-color: black;
//     padding: 15px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 70px;
//
//     @media (max-width: 768px) {
//         flex-direction: column;
//         align-items: center;
//     }
// `;
//
// const Logo = styled.img`
//     max-width: 100%;
//     height: 70px;
//
//     @media (max-width: 768px) {
//         margin: 0; /* Remove margin for mobile */
//         max-width: 40%;
//     }
// `;
// const NavBarWrapper = styled.nav`
//     background-color: black;
//   background-color: #333;
//   padding: 15px;
//   display: flex;
//   //justify-content: space-between;
//   align-items: center;
//   height: 70px;
//     border-bottom: 5px solid #fff;
//
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;
//
// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;
//
// const Logo = styled.img`
//   max-width: 100%;
//   height: 70px;
//     margin-right: 20px;
//
//   @media (max-width: 768px) {
//     margin: 0; /* Remove margin for mobile */
//     max-width: 40%;
//   }
// `;
//
// const NavItemsContainer = styled.div`
//   display: flex;
//
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     margin-top: 10px; /* Add some spacing between logo and NavItems in mobile */
//   }
// `;
//
// const NavItem = styled.a`
//     color: #fff;
//     text-decoration: none;
//     margin-right: 20px;
//
//     &:last-child {
//         margin-right: 0;
//     }
//
//     @media (max-width: 768px) {
//         margin: 10px 0;
//     }
// `;
//
// const BurgerMenu = styled.div`
//     display: none;
//     cursor: pointer;
//     font-size: 24px;
//     color: #fff;
//
//     @media (max-width: 768px) {
//         display: block;
//     }
// `;
//
// const Menu = styled.div`
//     display: flex;
//
//     @media (max-width: 768px) {
//         flex-direction: column;
//         display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//         position: absolute;
//         top: 70px;
//         left: 0;
//         width: 100%;
//         background-color: #333;
//         padding: 10px;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     }
// `;

const NavBarWrapper = styled.nav`
    background-color: black;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    justify-content: space-between;
    
    @media (max-width: 1000px) {
        height: 80px;
    }
`;

const LapinLogo = styled.img`
    height: 100px;
    margin: 20px;
    
    @media (max-width: 1000px) {
        height: 80px;
    }
`;

const NavBarItem = styled.img`
    height: 100px;
    margin: 20px 0px;
    
    @media (max-width: 1000px) {
        height: 80px;
    }
`;

const NavBarMobile = styled.div`
    display: none;
    
    @media (max-width: 800px) {
        display: flex;
    }
`;

const NavBarComputer = styled.div
`
    display: flex;
    
    @media (max-width: 800px) {
        display: none;
    }
`;

const Menu = styled.div`
    flex-direction: column;
    display: flex;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    background-color: black;
    padding: 10px;
z-index: 1;
    align-items: center;
    transition: 0.3s;
`;

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <NavBarWrapper>
                <NavBarMobile>
                    <FontAwesomeIcon icon={faBars} size="2x" color="white" style={{"top": "50%", "position": "relative", "marginLeft": "20px", "cursor": "pointer"}} onClick={() => setIsOpen(true)} />
                    <NavBarItem src="/assets/typo/ISTILL.png" alt="Logo"/>
                </NavBarMobile>
                <NavBarComputer>
                    <NavBarItem src="/assets/typo/ISTILL.png" alt="Logo"/>
                    <Link to={"/"}><NavBarItem src="/assets/typo/HOME.png" /></Link>
                    <Link to={"/shop"}><NavBarItem src="/assets/typo/SHOP.png" /></Link>
                    <Link to={"/contact"}><NavBarItem src="/assets/typo/CONTACT.png" /></Link>
                </NavBarComputer>
                <div>
                    <LapinLogo src="/assets/lapin/lapin.png" alt="Lapin" />
                </div>
            </NavBarWrapper>
            {isOpen ?
            <Menu>
                <NavBarItem src="/assets/typo/ISTILL.png" alt="Logo"/>
                <Link to={"/"}><NavBarItem src="/assets/typo/HOME.png" /></Link>
                <Link to={"/shop"}><NavBarItem src="/assets/typo/SHOP.png" /></Link>
                <Link to={"/contact"}><NavBarItem src="/assets/typo/CONTACT.png" /></Link>
                <FontAwesomeIcon icon={faClose} size="2x" color="white" style={{"top": "50%", "position": "relative", "marginLeft": "20px", "cursor": "pointer"}} onClick={() => setIsOpen(false)} />
            </Menu> : null}
        </>
    );
};


export default NavBar;
