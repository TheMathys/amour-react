import styled from "styled-components";
import {useState} from "react";

const StyledCard = styled.a`
  padding: 20px;
  margin: 20px;
  text-decoration: none;
  color: white; 
  z-index: 1;
  text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: calc(25% + 120px);
    cursor: pointer;
    font-size: 20px;
    
    // réduire margin sur mobile
    @media screen and (max-width: 1000px)
    {
      margin: 10px;
        padding: 20px;
        max-width: calc(100% - 20px);   
    }
`;

const ShopCard = (props) => {
    const [imagePath, setImagePath] = useState(`${props.image}`);
  return (
    
    <StyledCard href={props.link} target="_blank">
      <p>{props.name}</p>
      <img style={{"backgroundColor": "transparent", width: "80%", height: "80%"}} src={imagePath} alt={props.name} onMouseEnter={() => setImagePath(`${props.secondImage}`)} onMouseLeave={() => setImagePath(`${props.image}`)}/>
      <p>{props.price}</p>
    </StyledCard>
    
  );
};

export default ShopCard;