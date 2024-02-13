import Gif  from "../components/Gif.js";
import styled from "styled-components";
import px2vw from "../utils/px2vw.js";
import Balloon from "../components/Balloon.js";
import { Helmet } from 'react-helmet';

export const StyledHome = styled.div`
height: 100vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const StyledHeader = styled.div`
display: flex;
justify-content: center;
`;

export const StyledLogo = styled.img`
display: flex;
width: ${px2vw(600)};
padding-top : ${px2vw(10)};
@media screen and (max-width: 900px)
{
  width: ${px2vw(1200)};
  padding-top : ${px2vw(10)};
}
@media screen and (max-width: 600px)
{
  width: ${px2vw(1200)};
  padding-top : ${px2vw(10)};
}
@media screen and (max-width: 300px)
{
  width: ${px2vw(1400)};
  padding-top : ${px2vw(10)};
}

`;

export const StyledBody = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 600px)
{
  flex-direction: column;
}
justify-content: space-between;
`;

export const StyledBalloonContainer = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 900px)
{
  flex-direction: column;
}
@media screen and (max-width: 600px)
{
  flex-direction: row;
}
@media screen and (max-width: 300px)
{
  flex-direction: column;
  justify-items: space-between;
}
justify-content: space-around;
align-items: center;
`;

export const StyledFooter = styled.div`
display: flex;
justify-content: center;
text-align: center;
font-size: ${px2vw(30)};
color: white;
font-family: Pixel, sans-serif;
padding: ${px2vw(10)};
@media screen and (max-width: 900px)
{
  font-size: ${px2vw(60)};
}
@media screen and (max-width: 600px)
{
  font-size: ${px2vw(80)};
}
@media screen and (max-width: 300px)
{
  font-size: ${px2vw(100)};
}
`;

export const StyledFooterImage = styled.img`
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
}
@media screen and (max-width: 300px)
{
  height: ${px2vw(80)};
  padding-left: ${px2vw(45)};
}
`;

export const EmptyDiv = styled.div`
{

}
`;

const Home = () => {
    
  return (
    <StyledHome>

        <Helmet>
          <title>I LOVE MY EX</title>
          <link rel="icon" href="./assets/icon.png" />
        </Helmet>

      <StyledHeader><StyledLogo src={"./assets/typo/ISTILL.png"} /></StyledHeader>

      <StyledBody>
        <EmptyDiv></EmptyDiv>
        <StyledBalloonContainer>
          <Balloon sprite="HOMEballoon" route={"home"}/>
          <Balloon sprite="SHOPballoon" route={"shop"}/>     
        </StyledBalloonContainer>
        <Gif/>
        <StyledBalloonContainer>
          <Balloon sprite="GAMEballoon" route={"game"}/>
          <Balloon sprite="CONTACTballoon" route={"contact"}/>
        </StyledBalloonContainer>
        <EmptyDiv></EmptyDiv>
      </StyledBody>

      <StyledFooter>powered by <StyledFooterImage src={"./assets/typo/amour.png"} /></StyledFooter>

    </StyledHome>
  )
}

export default Home;