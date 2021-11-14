import styled from 'styled-components';

export const ButtonComponent = styled.button`
    background: #fff;
    box-shadow: 4px 4px 0px ${({theme}) => theme.green};
    transform: translate(2px, 2px);
    border: 2px solid ${({theme}) => theme.green};
    border-radius: 5px;
    appearance: none;
    padding: 10px 32px;
    font-size: ${({theme}) => theme.font.lg};
    font-weight: bold;
    color: ${({theme}) => theme.green};
    cursor: pointer;
    transition: all 100ms cubic-bezier(0.22, 0.61, 0.36, 1);
    &:hover {
        box-shadow: 6px 6px 0px ${({theme}) => theme.green};
        transform: translate(0px, 0px);
    }
    &:active {
        box-shadow: 0px 0px 0px ${({theme}) => theme.green};
        transform: translate(6px, 6px);
    }
`;