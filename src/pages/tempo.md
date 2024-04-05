>fichier temporaire 

```js
import styled from "styled-components";
import px2vw from "../utils/px2vw.js";

export const StyledHome = styled.div`
display: flex-column;

width: 100vw;
height: 100vh;
margin: auto;
background-color: red;
font-family: Pixel, sans-serif;
`;

export const StyledLogo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding : ${px2vw(10)};
width: ${px2vw(650)};
`;

export const StyledBalloons = styled.img`
  display: block;
  height: auto;
  width: ${px2vw(200)};
  margin: ${px2vw(10)};
  padding : ${px2vw(10)};
`;

export const StyledLapin = styled.img`
  display: block;
  height: ${px2vw(450)};
`;

export const StyledText = styled.p`
  width: 100%;
  text-align: center;
  font-family: Pixel, sans-serif;
  font-size: ${px2vw(20)};
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledBalloonContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
`;


export const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const StyledFooter = styled.div`
    display: flex;
    bottom: 0;
    align-items: center;
`;

export const StyledFooterImage = styled.img`
    max-height: ${px2vw(20)};
    margin-left:${px2vw(5)};
`;

const Home = () => {
    return (
        <StyledHome>

          <StyledHeader>
              <StyledLogo src={"./assets/typo/ISTILL.png"} />
          </StyledHeader>

              <StyledContainer>

                  <StyledBalloonContainer>
                    <StyledBalloons src={"./assets/balloons/HOMEballoon.png"} />
                    <StyledBalloons src={"./assets/balloons/SHOPballoon.png"} />    
                  </StyledBalloonContainer>

                <StyledLapin src={"./assets/lapin/WALK.png"} />

                 <StyledBalloonContainer>
                    <StyledBalloons src={"./assets/balloons/GAMEballoon.png"} />
                    <StyledBalloons src={"./assets/balloons/CONTACTballoon.png"} />    
                  </StyledBalloonContainer>

              </StyledContainer>

          <StyledFooter>
              <StyledText>powered by <StyledFooterImage src={"./assets/typo/amour.png"} /></StyledText>
          </StyledFooter>

        </StyledHome>
    )
}

export default Home;
```