import Navbar from "../components/Navbar";
import styled from "styled-components";
import ShopCard from "../components/ShopCard";
import PaperBorder from "../components/PaperBorder";
import { Helmet } from 'react-helmet';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    
    }
`;
const Shop = () => {
    
    return (
        <div>
            <Helmet>
                <title>SHOP</title>
                <link rel="icon" href="./assets/icon.png" />
            </Helmet>
            <Navbar />
            <PaperBorder indice={2} />
            <StyledWrapper>
                <StyledRow>
                    <ShopCard link="https://ilovemyex.myshopify.com/products/i-love-my-ex" name='"I LOVE MY EX"' image="./assets/tshirts/01_TSHIRT_ILUV_BLANC.png" secondImage="./assets/tshirts/07_TSHIRT_ILUV_NOIR.png" price="25€"/>
                    <ShopCard link="https://ilovemyex.myshopify.com/products/i-had-great-sex-with-my-ex" name='"I HAD GREAT SEX"' image="./assets/tshirts/03_TSHIRT_IHAD_BLANC.png" secondImage="./assets/tshirts/06_TSHIRT_IHAD_NOIR.png" price="25€"/>
                </StyledRow>
                <StyledRow>
                    <ShopCard link="https://ilovemyex.myshopify.com/products/i-still-3-my-ex" name='"I STILL <3 MY EX"' image="./assets/tshirts/00_TSHIRT_ISTILL_BLANC.png" secondImage="./assets/tshirts/04_TSHIRT_ISTILL_NOIR.png" price="25€"/>
                    <ShopCard link="https://ilovemyex.myshopify.com/products/i-only-believe-in-god-the-return-of-my-ex" name='"I ONLY BELIEVE"' image="./assets/tshirts/02_TSHIRT_IONLY_BLANC.png" secondImage="./assets/tshirts/05_TSHIRT_IONLY_NOIR.png" price="25€"/>
                </StyledRow>
                <ShopCard link="https://ilovemyex.myshopify.com/products/mystery-tee" name='"MYSTERY TEE"' image="./assets/tshirts/08_RANDOMTSHIRT.png" secondImage="./assets/tshirts/09_RANDOMTSHIRT.jpg" price="15€"/>
            </StyledWrapper>
        </div>
    );
}

export default Shop;