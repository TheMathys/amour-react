import styled from "styled-components";
import {StyledHeader, StyledLogo, StyledFooter} from "./Menu";
import px2vw from "../utils/px2vw";
import { Helmet } from 'react-helmet';

export const StyledWrapper = styled.div`
height: 100vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
    align-items: center;
`;

export const StyledBody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const StyledSpan = styled.span`
color: white;
font-size: ${px2vw(30)};
text-align: center;
font-family: Pixel, sans-serif;

@media screen and (max-width: 900px)
    {
        font-size: ${px2vw(50)};
        padding-top: ${px2vw(50)};
    }
    @media screen and (max-width: 600px)
    {
        font-size: ${px2vw(70)};
    }
    @media screen and (max-width: 300px)
    {
        font-size: ${px2vw(90)};
    }
`;

const StyledImg = styled.img`
    height: ${px2vw(400)};
    padding: ${px2vw(10)};

    @media screen and (max-width: 900px)
    {
      height: ${px2vw(600)};
    }
    @media screen and (max-width: 600px)
    {
      height: ${px2vw(1000)};
    }
    @media screen and (max-width: 300px)
    {
      height: ${px2vw(1200)};
      padding: ${px2vw(50)};
    }

  `;

  const StyledFooterImage = styled.img`
    height: ${px2vw(30)};
    padding-left: ${px2vw(15)};

    @media screen and (max-width: 900px)
    {
      height: ${px2vw(50)};
      padding-left: ${px2vw(20)};
    }
    @media screen and (max-width: 600px)
    {
      height: ${px2vw(60)};
      padding-left: ${px2vw(25)};
      padding-top: ${px2vw(10)};
    }
    @media screen and (max-width: 300px)
    {
      height: ${px2vw(80)};
      padding-left: ${px2vw(45)};
      padding-top: ${px2vw(10)};
    }
`;

const Countdown = (props) => {
  return (
    <StyledWrapper>
        <Helmet>
                <title>I LOVE MY EX</title>
                <link rel="icon" href="./assets/icon.png" />
        </Helmet>
        <StyledHeader>
            <StyledLogo src="./assets/typo/ISTILL.png" alt="logo" />
        </StyledHeader>
        <StyledBody>
            <StyledImg src={"./assets/lapin/lapin.gif"} alt="lapin" />
            <StyledSpan>welcome in our shop, we'll be open in : <br /> {props.days}days, {props.hours}hours, {props.minutes}min, {props.seconds}sec</StyledSpan>
        </StyledBody>
        <StyledFooter>powered by <StyledFooterImage src={"./assets/typo/amour.png"} /></StyledFooter>
    </StyledWrapper>
  );
}

export default Countdown;