import styled from "styled-components";

export const StyledHome = styled.div`
display: flex-column;
width: 100vh;
height: 100vh;
margin: auto;
font-family: Pixel, sans-serif;
`;

export const StyledLogo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding : 5px;
width: 50%;
`;

export const StyledBalloons = styled.img`
  display: block;
  height: auto;
  width: 200px;
  margin: 10px;
  padding : 40px;
`;

export const StyledLapin = styled.img`
  display: block;
  height: 400px;
`;

export const StyledText = styled.p`
  width: 100%;
  text-align: center;
  font-family: Pixel, sans-serif;
  font-size: 20px;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledBalloonContainer = styled.div`
    display: flex;
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
    max-height: 20px;
    margin-left: 5px;
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
                   <StyledBalloons src={"./assets/balloons/HOMEballoon.png"} />
                    <StyledBalloons src={"./assets/balloons/SHOPballoon.png"} />    
                  </StyledBalloonContainer>
              </StyledContainer>
          <StyledFooter>
              <StyledText>powered by <StyledFooterImage src={"./assets/typo/amour.png"} /></StyledText>
          </StyledFooter>
        </StyledHome>
    )
}

export default Home;