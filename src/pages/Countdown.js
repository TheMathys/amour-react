import styled from "styled-components";
import {StyledHeader, StyledLogo, StyledFooter, StyleFooterImage} from "./Menu";
import px2vw from "../utils/px2vw";
import Gif from "../components/Gif";

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
`;

const Countdown = (props) => {
  return (
    <StyledWrapper>
        <StyledHeader>
            <StyledLogo src="./assets/typo/ISTILL.png" alt="logo" />
        </StyledHeader>
        <StyledBody>
            <Gif width={100}/>
            <StyledSpan>welcome in our shop, we'll be open in : <br /> {props.days}days, {props.hours}hours, {props.minutes}min, {props.seconds}sec</StyledSpan>
        </StyledBody>
        <StyledFooter>powered by <StyleFooterImage src={"./assets/typo/amour.png"} /></StyledFooter>
    </StyledWrapper>
  );
}

export default Countdown;