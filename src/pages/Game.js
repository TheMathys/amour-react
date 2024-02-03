import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "JEU/Build/JEU.loader.js",
        dataUrl: "JEU/Build/JEU.data",
        frameworkUrl: "JEU/Build/JEU.framework.js",
        codeUrl: "JEU/Build/JEU.wasm",
    });

const loadingPercentage = Math.round(loadingProgression * 100);

const [devicePixelRatio, setDevicePixelRatio] = useState(window.devicePixelRatio);

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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {isLoaded === false && (
          <div style={{
              position: 'absolute',
              fontFamily: 'Pixel',
              fontSize: "x-large",
          }}>
          <p>Loading... ({loadingPercentage}%)</p>
          </div>
          )}
          <Unity
            unityProvider={unityProvider} 
            style={{ 
              display : "flex",                  
              justifyContent: "center",
              alignItems: "center",
              width: "80%", 
              backgroundColor: "black",
            }} 
            devicePixelRatio={devicePixelRatio}
          />
      </div>
    );
}

export default Game;
