import Navbar from "../components/Navbar";
import PaperBorder from "../components/PaperBorder";
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import px2vw from "../utils/px2vw.js";

const fontSize = px2vw(24);
const fontSizeMinus1200px = px2vw(20);
const fontSizeMinus1000px = px2vw(40);
const fontSizeMinus600px = px2vw(35);


const StyledHome = styled.div`
    display: flex;
    z-index: 1;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Styled1Text = styled.div`
    display: flex;
    flex-direction: column;
    font-color: white;
    font-size: ${fontSize};
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        font-size: ${fontSizeMinus1200px};
    }

    @media (max-width: 1000px) {
        padding-top: ${px2vw(50)};
        font-size: ${fontSizeMinus1000px};
    }

    @media (max-width: 600px) {
        font-weight: bold;
        font-size: ${fontSizeMinus600px};
    }

`;

const Style1Image = styled.img`
    display: flex;
    padding-top: ${px2vw(50)};
    width: 40vw;

    @media (max-width: 1000px) {
        width: 80vw;
    }
`;

const Style2Image = styled.img`
    display: flex;
    width: 24vw;

    @media (max-width: 1000px) {
        width: 45vw;
    }
`;

const Styled2Text = styled.div`
    display: flex;
    flex-direction: column;
    font-color: white;
    font-size: ${fontSize};
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        font-size: ${fontSizeMinus1200px};
    }

    @media (max-width: 1000px) {
        font-size: ${fontSizeMinus600px};
    }

    @media (max-width: 600px) {
        font-weight: bold;
        ${fontSizeMinus600px};
    }
`;

const Styled3Text = styled.div`
    display: flex;
    flex-direction: column;
    font-color: white;
    font-size: ${fontSize};
    align-items: center;
    justify-content: center;
    padding-top: ${px2vw(50)};

    @media (max-width: 1200px) {
        font-size: ${fontSizeMinus1200px};
    }

    @media (max-width: 1000px) {
        font-size: ${fontSizeMinus1000px};
    }

    @media (max-width: 600px) {
        font-weight: bold;
        font-size: ${fontSizeMinus600px};
    }
`;

const Style3Image = styled.img`
    display: flex;
    padding-top: ${px2vw(50)};
    width: 40vw;

    @media (max-width: 1000px) {
        width: 80vw;
    }
`;

const Styled4Text = styled.div`
    display: flex;
    font-color: white;
    font-size: ${fontSize};
    align-items: center;
    justify-content: center;
    padding-top: ${px2vw(50)};

    @media (max-width: 1200px) {
        font-size: ${fontSizeMinus1200px};
    }

    @media (max-width: 1000px) {
        font-size: ${fontSizeMinus1000px};
    }

    @media (max-width: 600px) {
        font-weight: bold;
        font-size: ${fontSizeMinus600px};
    }
`;

const Styled4Image = styled.img`
    display: flex;
    padding-top: ${px2vw(50)};
    width: 40vw;

    @media (max-width: 1000px) {
        width: 80vw;
    }
`;

const Styled5Text = styled.div`
    display: flex;
    font-color: white;
    font-size: ${fontSize};
    align-items: center;
    justify-content: center;
    padding-top: ${px2vw(50)};

    @media (max-width: 1200px) {
        font-size: ${fontSizeMinus1200px};
    }

    @media (max-width: 1000px) {
        font-size: ${fontSizeMinus1000px};
    }

    @media (max-width: 600px) {
        font-weight: bold;
        font-size: ${fontSizeMinus600px};
    }
`;

const Styled5Image = styled.img`
    display: flex;
    padding-top: ${px2vw(50)};
    width: 40vw;

    @media (max-width: 1000px) {
        width: 80vw;
    }
`;

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    font-color: white;
    font-size: ${fontSize};
    align-items: center;
    justify-content: space-around;
    padding-top: ${px2vw(100)};
    padding-bottom: ${px2vw(50)};

    @media (max-width: 1200px) {
        font-size: ${fontSizeMinus1200px};
    }

    @media (max-width: 1000px) {
        font-size: ${fontSizeMinus1000px};
    }

    @media (max-width: 600px) {
        font-weight: bold;
        font-size: ${fontSizeMinus600px};
    }
`;

const StyleFooterImage = styled.img`
    width: 30vw;

    @media (max-width: 1000px) {
        width: 60vw;
    }
`;

const Home = () => {
    
    return (
        
        <div>
            <Helmet>
                <title>HOME</title>
                <link rel="icon" href="./assets/icon.png" />
            </Helmet>
            <PaperBorder />
            <Navbar />
            <StyledHome>
                <Styled1Text>
                    <p style={{display: "flex", margin: "10px"}}>"I still &lt;3 my ex" est une collection de 4 t-shirts floqués</p>
                    <p style={{display: "flex", margin: "10px"}}>en hommage à nos ex-parties trop tôt</p>
                </Styled1Text>
                <Style1Image src="./assets/shoot/4.png" alt="4" />
                <div style={{display: "flex", flexDirection: "row", paddingTop: px2vw(50)}}>
                    <Style2Image src="./assets/shoot/3.png" alt="3" />
                    <Styled2Text>
                        <p style={{display: "flex", margin: "10px"}}>celles qui ont brisé notre cœur,</p>
                        <p style={{display: "flex", margin: "10px"}}>celles à qui on a fait du mal,</p>
                        <p style={{display: "flex", margin: "10px"}}>celles qui attendent notre retour, </p>
                        <p style={{display: "flex", margin: "10px"}}>celles qui ne l’attendent pas,</p>
                        <p style={{display: "flex", margin: "10px"}}>mais surtout celle qu’on a aimée.</p>
                    </Styled2Text>
                </div>
                <Styled3Text>
                    <p>Que ce soit le temps d’une colonie d’été,</p>
                </Styled3Text>
                <Style3Image src="./assets/shoot/1.png" alt="1" />
                <Styled4Text>
                    <p>d’une année, d’un regard, d’une soirée  ou d’un simple message,</p>
                </Styled4Text>
                <Styled4Image src="./assets/shoot/5.png" alt="5" />
                <Styled5Text>
                    <p>cette collection rend hommage à ces précieux moments.</p>
                </Styled5Text>
                <Styled5Image src="./assets/shoot/2.png" alt="2" />
                <StyledFooter>
                    <p>C'est pourquoi ...</p>
                    <StyleFooterImage src="./assets/typo/ISTILL.png" alt="ISTILL"/>
                </StyledFooter>
            </StyledHome>

        </div>
    );
}

export default Home;