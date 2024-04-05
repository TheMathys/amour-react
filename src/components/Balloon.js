import styled from "styled-components";
import px2vw from "../utils/px2vw.js";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const StyledBalloons = styled.img`
display : flex;
height: ${px2vw(160)};
padding: ${px2vw(5)};

@media screen and (max-width: 900px)
{
  height: ${px2vw(250)};
  padding: ${px2vw(35)};
}
@media screen and (max-width: 600px)
{
  height: ${px2vw(310)};
  padding-top: ${px2vw(60)};
  padding-top: ${px2vw(60)};
}
@media screen and (max-width: 300px)
{
  height: ${px2vw(450)};
  padding: ${px2vw(50)};
}
`;


const Balloon = ({ sprite, route }) => {
  const [image, setImage] = useState(`./assets/balloons/${sprite}.png`);
  const navigate = useNavigate();

  const handleClick = () => {
      setImage(`./assets/balloons/animation/${sprite}.gif`);
      setTimeout(() => {
          navigate(`/${route}`); // Remplacez '/nouvelle-route' par la route vers laquelle vous voulez rediriger
      }, 800);
  };

  return (
    <StyledBalloons 
        src={image} 
        onClick={handleClick}
        onMouseLeave={() => setImage(`./assets/balloons/${sprite}.png`)}
    />
);
  };

export default Balloon;