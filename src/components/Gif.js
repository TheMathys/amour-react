import React, { useState, useEffect } from 'react';
import px2vw from "../utils/px2vw.js";
import styled from "styled-components";

const Gif = (props) => {
  const [currentGif, setCurrentGif] = useState('./assets/lapin/lapin-entry.gif');

  const changeGif = () => {
    // Charger et afficher le nouveau GIF
    setCurrentGif('./assets/lapin/lapin.gif');
  };

  useEffect(() => {
    // Afficher le premier GIF pendant 3 secondes
    const timeoutId = setTimeout(() => {
      changeGif();
    }, 2000);

    // Nettoyer le timeout lors du démontage du composant
    return () => clearTimeout(timeoutId);
  }, []); // L'effet s'exécute uniquement lors du montage du composant

  const StyledImg = styled.img`
    height: ${px2vw(400)};
    padding: ${px2vw(10)};

    @media screen and (max-width: 900px)
    {
      height: ${px2vw(500)};
    }
    @media screen and (max-width: 600px)
    {
      height: ${px2vw(600)};
    }
    @media screen and (max-width: 300px)
    {
      height: ${px2vw(700)};
      padding: ${px2vw(50)};
    }

  `;

  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <StyledDiv>
      <StyledImg
        src={currentGif}
        alt="Description du GIF" />
    </StyledDiv>
  );
};

export default Gif;