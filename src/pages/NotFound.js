import styled from "styled-components";

const StyledNotFound = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  font-family: Pixel,sans-serif;
`;

const NotFound = () => {
    return (
        <StyledNotFound>
            <h1>404 Not Found</h1>

        </StyledNotFound>
    );
}

export default NotFound;