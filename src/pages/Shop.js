import Navbar from "../components/Navbar";
import styled from "styled-components";
import ShopCard from "../components/ShopCard";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    :nth-child(n) {
        flex: 1 0 25%;
    }
`;

const Shop = () => {
    
    return (
        <div>
            <Navbar />
            <StyledWrapper>
                <ShopCard name='"I STILL <3 MY EX"' image="./assets/tshirts/00_TSHIRT_ISTILL_BLANC.png" secondImage="./assets/tshirts/04_TSHIRT_ISTILL_NOIR.png" price="25,99€"/>
                <ShopCard name='"I LOVE MY EX"' image="./assets/tshirts/01_TSHIRT_ILUV_BLANC.png" secondImage="./assets/tshirts/05_TSHIRT_IONLY_NOIR.png" price="25,99€"/>
                <ShopCard name='"I ONLY BELIEVE"' image="./assets/tshirts/02_TSHIRT_IONLY_BLANC.png" secondImage="./assets/tshirts/06_TSHIRT_IHAD_NOIR.png" price="25,99€"/>
                <ShopCard name='"I HAD GREAT SEX"' image="./assets/tshirts/03_TSHIRT_IHAD_BLANC.png" secondImage="./assets/tshirts/07_TSHIRT_ILUV_NOIR.png" price="25,99€"/>
            </StyledWrapper>
        </div>
    );
}

export default Shop;