import styled from "styled-components";
import px2vw from "../utils/px2vw.js";
import { useState } from 'react';

export const StyledBalloons = styled.img`
display : flex;

@media screen and (max-width: 1080px)
{
  width: ${px2vw(300)} ;
}
@media screen and (max-width: 600px)
{
  width: ${px2vw(400)} ;
}
width: ${px2vw(200)};
padding: ${px2vw(30)};
`;

const Balloon = ({ sprite }) => {
    const [image, setImage] = useState(`./assets/balloons/${sprite}.png`);

    return (
        <StyledBalloons 
            src={image} 
            onMouseEnter={() => setImage(`./assets/balloons/animation/${sprite}.gif`)} 
            onMouseLeave={() => setImage(`./assets/balloons/${sprite}.png`)}
        >
        </StyledBalloons>
    );
}

export default Balloon;