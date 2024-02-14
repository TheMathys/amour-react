import React from 'react';
import styled from 'styled-components';

const StyledBorder = styled.div`
    z-index: -1;
    pointer-events: none;
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const StyledPaper = styled.img`
    height: 20vh;
`;

const StyledBorderMobile = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }   
`;

const StyledBackground = styled.img`
    position: fixed;
    width: 600px;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

const PaperBorder = ({indice}) => {
    if (indice === 1) {
        return (
            <>
                <StyledBorder>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/2.png' />
                        <StyledPaper src='./assets/paper/5.png' /> 
                    </div>  
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/1.png' style={{ transform: "translateX(-20px) translateY(-20px)"}} />
                        <StyledPaper src='./assets/paper/6.png' /> 
                    </div>  
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/3.png' style={{ transform: "translateX(-20px) translateY(10px) rotate(10deg)" }}/>
                        <StyledPaper src='./assets/paper/7.png' /> 
                    </div>  
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/4.png' />
                        <StyledPaper src='./assets/paper/8.png' style={{ transform: "translateX(40px) translateY(-10px) rotate(20deg)"}} /> 
                    </div>  
                </StyledBorder>

                <StyledBorderMobile>
                    <StyledBackground src="./assets/typo/3COUPE.png" alt="background" />
                </StyledBorderMobile>
            </>
        );
    }
    else {
        return (
            <>
                <StyledBorder>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/9.png' style={{ height: "30vh",transform: "translateX(-10px) translateY(140px)" }}/>
                        <StyledPaper src='./assets/paper/10.png' style={{ transform: "translateY(160px) translateX(35px) rotate(-10deg)" }} /> 
                    </div>  
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/12.png' style={{ height: "30vh", transform: "translateX(-20px) translateY(80px) rotate(-10deg)" }}/>
                        <StyledPaper src='./assets/paper/15.png' style={{  height: "30vh", transform: " translateY(50px)" }}/> 
                    </div>  
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/13.png' style={{ transform: "translateX(-5px) translateY(40px)" }}/>
                        <StyledPaper src='./assets/paper/11.png' style={{ transform: "translateX(20px) translateY(15px)" }} /> 
                    </div>  
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <StyledPaper src='./assets/paper/16.png' style={{ transform: "translateX(-10px) rotate(20deg)" }}/>
                        <StyledPaper src='./assets/paper/17.png' style={{ transform: "translateX(10px) rotate(10deg)" }} /> 
                    </div>  
                </StyledBorder>

                <StyledBorderMobile>
                    <StyledBackground src="./assets/typo/3COUPE.png" alt="background" />
                </StyledBorderMobile>
            </>
        );
    }
};

export default PaperBorder;
