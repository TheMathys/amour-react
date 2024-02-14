import Navbar from "../components/Navbar";
import styled from "styled-components";
import px2vw from "../utils/px2vw.js";
import { Helmet } from 'react-helmet';
import PaperBorder from "../components/PaperBorder.js";

const StyledContactPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    height: 100vh;
    background-color: black;
`;


const StyledAmour = styled.img`
    display: flex;
    width: ${px2vw(300)};

    @media screen and (max-width: 900px)
    {
        width: ${px2vw(600)};
    }
    @media screen and (max-width: 600px)
    {
        width: ${px2vw(800)};
    }
    @media screen and (max-width: 300px)
    {
         width: ${px2vw(1000)};
    }
`;

const StyledMailLogo = styled.img`
    display: flex;
    width: ${px2vw(60)};
    padding : ${px2vw(20)};

    @media screen and (max-width: 900px)
    {
        width: ${px2vw(140)};
    }
    @media screen and (max-width: 600px)
    {
        width: ${px2vw(180)};
    }
    @media screen and (max-width: 300px)
    {
        width: ${px2vw(220)};
    }
`;

const StyledMail = styled.div`
    display: flex;
    font-size: ${px2vw(20)};

    @media screen and (max-width: 900px)
    {
        font-size: ${px2vw(30)};
        padding-top : ${px2vw(40)};
    }
    @media screen and (max-width: 600px)
    {
        font-size: ${px2vw(40)};
        padding-top : ${px2vw(60)};

    }
    @media screen and (max-width: 300px)
    {
        font-size: ${px2vw(60)};
        padding-top : ${px2vw(80)};

    }

`;

const StyledInsta = styled.img`
    display: flex;
    width: ${px2vw(60)};
    padding : ${px2vw(50)};

    @media screen and (max-width: 900px)
    {
        width: ${px2vw(90)};
    }
    @media screen and (max-width: 600px)
    {
        width: ${px2vw(120)};
    }
    @media screen and (max-width: 300px)
    {
        width: ${px2vw(180)};
    }
`;

const StyledTwitter = styled.img`
    display: flex;
    width: ${px2vw(60)};
    padding : ${px2vw(50)};

    @media screen and (max-width: 900px)
    {
        width: ${px2vw(90)};
    }
    @media screen and (max-width: 600px)
    {
        width: ${px2vw(120)};
    }
    @media screen and (max-width: 300px)
    {
        width: ${px2vw(180)};
    }
`;

const StyledYTB = styled.img`
    display: flex;
    width: ${px2vw(60)};
    padding : ${px2vw(50)};

    @media screen and (max-width: 900px)
    {
        width: ${px2vw(90)};
    }
    @media screen and (max-width: 600px)
    {
        width: ${px2vw(120)};
    }
    @media screen and (max-width: 300px)
    {
        width: ${px2vw(180)};
    }
`;

const StyledFaitAvec = styled.div`
    @font-face {
        font-family: "Callisto";
        src: url("./assets/fonts/CALIST.ttf");
    }
    
    display: flex;
    font-family: Callisto;
    font-style: italic;
    font-size: ${px2vw(70)};
    padding-bottom : ${px2vw(40)};

    @media screen and (max-width: 900px)
    {
        font-size: ${px2vw(80)};
        padding-top : ${px2vw(40)};
    }
    @media screen and (max-width: 600px)
    {
        font-size: ${px2vw(90)};
        padding-top : ${px2vw(60)};

    }
    @media screen and (max-width: 300px)
    {
        font-size: ${px2vw(100)};
        padding-top : ${px2vw(80)};
    }
`;

const StyledBackground = styled.img`
    position: fixed;
    width: 600px;
    right: 0;
    bottom: 0;
    z-index: 0;
`;

const Contact = () => {
    
    return (
        <StyledContactPage>
            <Helmet>
                <title>CONTACT</title>
                <link rel="icon" href="./assets/icon.png" />
            </Helmet>
            <Navbar />
            <StyledBackground src="./assets/typo/3COUPE.png" alt="background" />
                <div style={{"z-index": "1"}}>
                    <StyledAmour src="./assets/typo/amour.png" alt="amour" />
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "z-index": "1"}}>
                    <StyledMailLogo src="./assets/typo/contact/mail.png" alt="amour" />
                    <StyledMail>amourprodsav@gmail.com</StyledMail>
                </div>
                <div style= {{ "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "z-index": "1"}}>
                    <a href="https://www.instagram.com/amourprod/" target="_blank" rel="noreferrer">
                        <StyledInsta src="./assets/typo/contact/insta.png" alt="insta" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=Fj4N0KG5ONs&ab_channel=KimJongBomb" target="_blank" rel="noreferrer">
                        <StyledTwitter src="./assets/typo/contact/twitter.png" alt="twitter" />
                    </a>
                    <a href="https://www.youtube.com/@amourprod/" target="_blank" rel="noreferrer">
                        <StyledYTB src="./assets/typo/contact/ytb.png" alt="ytb" />
                    </a>
                </div> 
            <div style={{ "display": "flex", "flexDirection": "row", "z-index": "1"}}>
            <StyledFaitAvec>"Tout est fait avec Amour" </StyledFaitAvec>
            </div>
            
        </StyledContactPage>
    );
}

export default Contact;