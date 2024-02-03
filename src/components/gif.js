import React, { useState, useEffect } from 'react';
import px2vw from "../utils/px2vw.js";

const Gif = () => {
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

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "space-around", 
      alignItems: "center",
    }}>
      <img
        src={currentGif}
        alt="Description du GIF"
        style={{ 
          width: px2vw(300),
      }}/>
    </div>
  );
};

export default Gif;