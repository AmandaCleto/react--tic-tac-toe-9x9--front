import styled from "styled-components";

import x from "../../assets/half-x.png";
import o from "../../assets/half-circle.png";

export const MaskComponent = styled.div`
    z-index: 1;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.winnerColor === 'x' ? '#9DD9EC50' : props.winnerColor === 'o'  ? '#FFA7A750' : '#73737350' };
    filter: blur(2px);
    -webkit-filter: blur(2px);
    backdrop-filter: blur(2px);
`;
export const ModalComponent = styled.div`
    z-index: 2;
    width: 600px;
    height: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 2px;
    border-color: ${({ theme }) => theme.green};
    border-radius: 6px;
    background: ${({ theme }) => theme.white};
    background-position: left top, right bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: 80px, 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        border: none;
        width: 100%;
        height: 100%;
    }
`;
