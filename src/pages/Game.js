import React, { useState, useEffect  } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "../components/Navbar.js";
import px2vw from "../utils/px2vw.js";
import styled from 'styled-components';

function Game() {

    const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
        loaderUrl: "JEU/Build/JEU.loader.js",
        dataUrl: "JEU/Build/JEU.data",
        frameworkUrl: "JEU/Build/JEU.framework.js",
        codeUrl: "JEU/Build/JEU.wasm",
    });
  
  function handleEnterFullscreen() {
        requestFullscreen(true);
      }

  const loadingPercentage = Math.round(loadingProgression * 100);

  const [devicePixelRatio, setDevicePixelRatio] = useState(window.devicePixelRatio);

  const FullscreenButton = styled.button`
    background-color: red;
    border: 1px solid red;
    margin-top: 10px;
    font-weight: bold;
    transition: 0.7s;
    border-radius: 12px;
    &:hover {
      background-color: black;
      color: white;
      border: 1px solid red;
    }
  `;

  const StyledSvg = styled.img`
    width: 30px;
    justify-content: center;
    align-items: center;
  `;


  useEffect(
      function () {
        // A function which will update the device pixel ratio of the Unity
        // Application to match the device pixel ratio of the browser.
        const updateDevicePixelRatio = function () {
          setDevicePixelRatio(window.devicePixelRatio);
        };
        // A media matcher which watches for changes in the device pixel ratio.
        const mediaMatcher = window.matchMedia(
          `screen and (resolution: ${devicePixelRatio}dppx)`
        );
        // Adding an event listener to the media matcher which will update the
        // device pixel ratio of the Unity Application when the device pixel
        // ratio changes.
        mediaMatcher.addEventListener("change", updateDevicePixelRatio);
        return function () {
          // Removing the event listener when the component unmounts.
          mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
        };
      },
      [devicePixelRatio]
    );

      return (
        <>
        <div style={{ display: "flex-column", alignItems: "center" }}>
          <Navbar />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {isLoaded === false && (
              <div style={{ position: "absolute", fontSize: px2vw(30) }}>
              <p>Loading... ({loadingPercentage}%)</p>
              </div>
              )}
              <Unity 
                unityProvider={unityProvider} 
                style={{ 
                  display: "flex",
                  width: px2vw(1000),  
                  borderRadius: "12px",
                }} 
                devicePixelRatio={devicePixelRatio}
              />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems:"flex-end", paddingRight: px2vw(220)}}>
          <FullscreenButton onClick={handleEnterFullscreen}><StyledSvg src="./assets/typo/FULLSCREEN.svg"></StyledSvg></FullscreenButton>
          </div> 
        </div>
      </>
      );
}

export default Game;
