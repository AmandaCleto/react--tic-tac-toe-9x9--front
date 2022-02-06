import styled from "styled-components";

import img from "../../assets/background-card.png";

export const CardComponent = styled.div`
    background: ${({theme}) => theme.green};
    background-size: cover;
    background-image: url(${img});
    padding: 40px 20px;
    height: 40px;
    width: 100%;
    max-width: 350px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        padding-left: 15px;
        font-size: ${({theme}) => theme.font.lg};
        color: ${({theme}) => theme.white};
        font-weight: bold;
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
