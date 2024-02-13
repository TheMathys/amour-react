import styled from "styled-components";
import {useState} from "react";

const StyledCard = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: calc(25% + 120px);
    cursor: pointer;
    font-size: 20px;
    
    // réduire margin sur mobile
    @media screen and (max-width: 600px)
    {
        margin: 10px;
        padding: 10px;
        max-width: calc(100% - 20px);   
    }
`;

const ShopCard = (props) => {
    const [imagePath, setImagePath] = useState(`${props.image}`);
  return (
    <StyledCard>
      <p>{props.name}</p>
      <img style={{"backgroundColor": "white", width: "100%", height: "100%"}} src={imagePath} alt={props.name} onMouseEnter={() => setImagePath(`${props.secondImage}`)} onMouseLeave={() => setImagePath(`${props.image}`)}/>
      <p>{props.price}</p>
    </StyledCard>
  );
};

export default ShopCard;