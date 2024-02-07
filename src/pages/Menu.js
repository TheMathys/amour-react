import Gif  from "../components/Gif.js";
import styled from "styled-components";
import px2vw from "../utils/px2vw.js";
import { Link } from 'react-router-dom';
import Balloon from "../components/Balloon.js";

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
width: ${px2vw(500)};
padding-top : ${px2vw(5)};
@media screen and (max-width: 1080px)
{
  width: ${px2vw(800)};
  padding-top : ${px2vw(10)};
}
@media screen and (max-width: 600px)
{
  width: ${px2vw(1200)};
  padding-left: ${px2vw(20)};
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
@media screen and (max-width: 1080px)
{
  flex-direction: column;
}
@media screen and (max-width: 600px)
{
  flex-direction: row;
}
justify-content: space-around;
align-items: center;
`;

export const StyledBalloons = styled.img`
display : flex;
position: relative;
@media screen and (max-width: 1080px)
{
  width: ${px2vw(300)} ;
}
@media screen and (max-width: 600px)
{
  width: ${px2vw(400)} ;
}
width: ${px2vw(200)};
;
`;

export const StyleFooter = styled.div`
display: flex;
justify-content: center;
text-align: center;
font-size: ${px2vw(30)};
color: white;
font-family: Pixel, sans-serif;
padding: ${px2vw(10)};
@media screen and (max-width: 1080px)
{
  font-size: ${px2vw(40)} ;
  padding: ${px2vw(30)};
}
@media screen and (max-width: 600px)
{
  font-size: ${px2vw(60)} ;
  padding: ${px2vw(40)};
}
`;

export const StyleFooterImage = styled.img`
height: ${px2vw(30)};
padding-left: ${px2vw(15)};
@media screen and (max-width: 1080px)
{
  height: ${px2vw(40)};
  padding-left: ${px2vw(20)};

}
@media screen and (max-width: 600px)
{
  height: ${px2vw(60)};
  padding-left: ${px2vw(20)};
}
`;

export const EmptyDiv = styled.div`
{

}
`;

const Home = () => {
    
  return (
    <StyledHome>

      <StyledHeader><StyledLogo src={"./assets/typo/ISTILL.png"} /></StyledHeader>

      <StyledBody>
        <EmptyDiv></EmptyDiv>
        <StyledBalloonContainer>
          <Link to="/home"><Balloon sprite="HOMEballoon"/></Link>
          <Link to="/shop"><Balloon sprite="SHOPballoon"/></Link>      
        </StyledBalloonContainer>
        <Gif/>
        <StyledBalloonContainer>
          <Link to="/contact"><Balloon sprite="CONTACTballoon"/></Link>
          <Link to="/game"><Balloon sprite="GAMEballoon"/></Link>
        </StyledBalloonContainer>
        <EmptyDiv></EmptyDiv>
      </StyledBody>

      <StyleFooter>powered by <StyleFooterImage src={"./assets/typo/amour.png"} /></StyleFooter>

    </StyledHome>
  )
}

export default Home;