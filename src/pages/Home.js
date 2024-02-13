import Navbar from "../components/Navbar";
import PaperBorder from "../components/PaperBorder";
import styled from "styled-components";
import { Helmet } from 'react-helmet';

const StyledHome = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledRow = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: row;
    justify-content: space-between;
    
`;

const Home = () => {
    
    return (
        
        <div>
            <Helmet>
                <title>HOME</title>
                <link rel="icon" href="./assets/icon.png" />
            </Helmet>

            <Navbar />

            <PaperBorder indice={1} />
            <StyledHome>

                <StyledRow>
                    <div><img src="./assets/shoot/1.png" alt="1mec2meuf" style={{display: "flex", width: "20vw"}} /></div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ display: "flex", alignItems: "center", textAlign: "center", fontWeight:"italic", fontSize: "20px",  lineHeight: "2" }}>
                        "I still love my ex" <br />est une collection  de 4 t-shirts <br />floqués en hommage à nos <br /> ex parties trop tôt</p>
                    </div>
                </StyledRow>

                <StyledRow>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ display: "flex", alignItems: "center", textAlign: "center", fontWeight:"italic", fontSize: "20px", lineHeight: "2" }}>
                        celles qui ont brisé notre cœur,<br /> celles à qui on a fait du mal, <br />celles qui attendent notre retour, <br />celles qui ne l’attendent pas, <br />mais surtout celle qu’on a aimée.</p>
                    </div>
                    <div>
                        <img src="./assets/shoot/2.png" alt="1mec2meuf" style={{display: "flex", width: "20vw"}} />
                    </div>

                </StyledRow>

            </StyledHome>
        </div>
    );
}

export default Home;