// NavBar.js
import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";

const fadeIn = keyframes`
    0% { opacity: 0; } 
    100% { opacity: 1; }
`;

const NavBarWrapper = styled.nav`
    background-color: black;
    display: flex;
    z-index: 7;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 20px;
    justify-content: space-between;

`;

const LapinLogo = styled.img`
    height: 100px;
    margin: 20px;
    
    @media (max-width: 1000px) {
        height: 80px;
    }
`;

const NavBarItem = styled.img`
    height: 80px;
    margin: 20px 0px;
`;


const NavBarTitle = styled.img`
    display: flex;
    height: 100px;
    padding-top: 10px;

    @media (max-width: 800px) {
        height: 80px;
        padding-left: 15px;
    }

    @media screen and (max-width: 500px)
    {
        height: 60px;
        padding-left: 25px;
    }

    @media screen and (max-width: 300px)
    {
        height: 40px;
        padding-left: 15px;
    }



    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Chrome, Safari, Opéra depuis la version 15 */
    -ms-user-select: none; /* Internet explorer depuis la version 10 et Edge */
    user-select: none; /* Propriété standard */

`;

const NavBarBurger = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        justify-content : center;
        margin-left : 30px;
    }

    @media screen and (max-width: 500px)
    {
        display: flex;
        justify-content : center;
        margin-left : 20px;
    }

    @media screen and (max-width: 300px)
    {
        display: flex;
        justify-content : center;
        margin-left : 20px;
    }
`;
const NavBarMobile = styled.div`
    display: none;
    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const NavBarComputer = styled.div
`
    display: flex;
    
    @media (max-width: 800px ) {
        display: none;
    }
`;

const Menu = styled.div`
    z-index: 1000;
    flex-direction: column;
    display: flex;
    position: fixed;
    justify-content: space-around;
    top: 0px;
    left: 0;
    height: 90vh;
    width: 100vw;
    background-color: black;
    padding: 10px;
    align-items: center;
    transition: 0.3s;
    @media(min-width: 800px) {
        display: none;
    }
    animation: ${fadeIn} 1s ease-in-out forwards;
`;

const BurgerTitle = styled.div`
    display: flex;
`;

const BurgerItems = styled.div`
    display: flex;
    flex-direction: column;
`;

const BurgerFooter = styled.div`
    display: flex;
`;



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);    
    const [sprite, setSprite] = useState("/assets/lapin/lapin.png");

    return (
        <>
            <NavBarWrapper>
                <NavBarMobile>
                    <NavBarBurger><FontAwesomeIcon icon={faBars} size="2x" color="white" onClick={() => { setIsOpen(true) }} /></NavBarBurger>
                    <Link to ={"/"}><NavBarTitle src="/assets/typo/ISTILL.png" alt="Logo"/></Link>
                </NavBarMobile>
                <NavBarComputer>
                    <Link to ={"/"}><NavBarTitle src="/assets/typo/ISTILL.png" alt="Logo"/></Link>                    
                    <Link to={"/home"}><NavBarItem src="/assets/typo/HOME.png" /></Link>
                    <Link to={"/shop"}><NavBarItem src="/assets/typo/SHOP.png" /></Link>
                    <Link to={"/contact"}><NavBarItem src="/assets/typo/CONTACT.png" /></Link>
                </NavBarComputer>
                <div>
                    <LapinLogo 
                    src={sprite}
                    alt="Lapin"
                    onMouseOver={() => setSprite("/assets/lapin/lapin.gif")}
                    onMouseOut={() => setSprite("/assets/lapin/lapin.png")} />
                </div>
            </NavBarWrapper>
            { isOpen ?
            <div>
                <Menu isOpen={isOpen}>
                    <BurgerTitle><Link to ={"/"}><NavBarTitle src="/assets/typo/ISTILL.png" alt="Logo"/></Link></BurgerTitle>
                    <BurgerItems>
                        <Link to={"/"}><NavBarItem src="/assets/typo/HOME.png" /></Link>
                        <Link to={"/shop"}><NavBarItem src="/assets/typo/SHOP.png" /></Link>
                        <Link to={"/contact"}><NavBarItem src="/assets/typo/CONTACT.png" /></Link> 
                    </BurgerItems>
                    
                    <BurgerFooter><FontAwesomeIcon icon={faClose} size="2x" color="white" style={{"top": "50%", "position": "relative", "marginLeft": "20px", "cursor": "pointer"}} onClick={() => { setIsOpen(false) }} /></BurgerFooter>
                </Menu>
            </div>
            : null }
        </>
    );
};


export default NavBar;
