import styled from "styled-components";

export const StyledHome = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
  font-family: Pixel, sans-serif;
`;

export const StyledLogo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`;
export const StyledButton = styled.button`
  font-family: Pixel, sans-serif;
  margin: 10px;
  width: calc(100% / 5);
`;

export const StyledLapin = styled.img`
  display: block;
  height: auto;
  max-height: calc(100vh - 200px);
`;

export const StyledText = styled.p`
  position: absolute;
  bottom: 0;
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

export const StyledFooterImage = styled.img`
    max-height: 20px;
  margin-left: 5px;
`;

const Home = () => {
    return (
        <StyledHome>
            <StyledLogo src={"./assets/typo/ISTILL.png"} />
            <StyledContainer>
                <StyledButton>Home</StyledButton>
                <StyledButton>Shop</StyledButton>
                <StyledLapin src={"./assets/lapin/WALK.png"} />
                <StyledButton>Game</StyledButton>
                <StyledButton>Contact</StyledButton>
            </StyledContainer>
            <StyledText>powered by <StyledFooterImage src={"./assets/typo/amour.png"} /></StyledText>
        </StyledHome>
    )
}

export default Home;