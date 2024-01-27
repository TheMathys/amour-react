import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "JEU/Build/JEU.loader.js",
        dataUrl: "JEU/Build/JEU.data",
        frameworkUrl: "JEU/Build/JEU.framework.js",
        codeUrl: "JEU/Build/JEU.wasm",
    });

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Unity
                unityProvider={unityProvider} 
                style={{ 
                    width: 800, 
                    height: 600, 
                }} 
            />
        </div>
    );
}

export default Game;
