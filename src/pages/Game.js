import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "../components/Navbar.js";
import px2vw from "../utils/px2vw.js";
import styled from 'styled-components';
import PaperBorder from "../components/PaperBorder.js";
import { Helmet } from 'react-helmet';
import Gif from "../components/Gif.js";

function Game() {

  const { unityProvider, isLoaded, requestFullscreen } = useUnityContext({
    loaderUrl: "./JEU/Build/JEU.loader.js",
    dataUrl: "./JEU/Build/JEU.data",
    frameworkUrl: "./JEU/Build/JEU.framework.js",
    codeUrl: "./JEU/Build/JEU.wasm",
  });

  function handleEnterFullscreen() {
    requestFullscreen(true);
  }

  const isMobileDevice = () => {
    return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  };

  const [devicePixelRatio] = useState(window.devicePixelRatio);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = isMobileDevice();

  const FullscreenButton = styled.button`
    background-color: rgba(255, 0, 0, 0.89);
    border: 4px white ridge;
    color: white;
    margin-top: 10px;
    transition: 0.7s;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
      border: 8px white ridge;
    }

    @media (max-width: 1000px) {
      font-family: Pixel;
      font-weight: italic;
      font-size: 50px;
      border: 8px white ridge;
      &:hover {
        border: 12px white ridge;
      }
      padding : 15px
    }
  `;

  const FullscreenDiv = styled.div`
    display: flex; 
    justify-content: center;
    alignItems: center;
    padding-top: 10px;
    @media (max-width: 1000px) {
      display: none;
    } 
  `;

  const StyledWarning = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
      display: none;
    } 
  `;

  const WarningMessage = styled.p`

  `;

  const StyledLoading = styled.div`
    display: flex;
    width: 100vw;
    height: 60vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
      display: none;
    }
  `;
  const StyledSvg = styled.img`
    width: 40px;
    justify-content: center;
    align-items: center;
  `;

  const StyledMessage = styled.p`
    font-family: Pixel;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  `;

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const gameDisplayStyle = windowWidth >= 1000 ? "flex" : "none";
  const gameZIndex = windowWidth >= 1000 ? "0" : "-10";

  return (
    <>
    {isMobile ? (
              <>
                <Navbar />
                <PaperBorder indice={1} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                  <StyledMessage>We're sorry, but our game is not currently available on mobile devices. </StyledMessage>
                  <Gif />
                  <StyledMessage>We recommend using a desktop or laptop computer to experience the game. Thank you for your understanding!</StyledMessage>
                </div>
              </>
            ) : (
              <>
              <PaperBorder indice={1} />
              <Helmet>
                  <title>GAME</title>
                  <link rel="icon" href="./assets/icon.png" />
              </Helmet>
              <Navbar />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ position: "relative" }}>
                    <StyledWarning>
                      <WarningMessage>*if not working, refresh the page </WarningMessage>
                    </StyledWarning>
                    {isLoaded === false && (
                      <StyledLoading>
                        <img src="./assets/typo/LOADING.gif" alt="loading" />
                      </StyledLoading>
                    )}
                    <Unity
                      unityProvider={unityProvider}
                      style={{
                        display: gameDisplayStyle,
                        width: px2vw(900),
                        borderRadius: "12px",
                        zIndex: gameZIndex,
                      }}
                      devicePixelRatio={devicePixelRatio}
                    />
                    <FullscreenDiv>
                      <FullscreenButton onClick={handleEnterFullscreen} ><StyledSvg src="./assets/typo/FULLSCREEN.svg"></StyledSvg></FullscreenButton>
                    </FullscreenDiv>
                  </div>
                  {windowWidth < 1000 && (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
                      <FullscreenButton onClick={handleEnterFullscreen}>Press to Play</FullscreenButton>
                    </div>
                  )}  
                </div>
              </>
            )}
    </>
  );
}

export default Game;
