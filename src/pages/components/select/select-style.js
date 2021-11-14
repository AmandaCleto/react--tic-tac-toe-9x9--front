import styled from 'styled-components';

export const ContainerComponent = styled.section`
    display: flex;
    align-items: center;
    gap: 60px;
`;

export const SelectComponent = styled.button`
    background: #fff;
    box-shadow: 4px 4px 0px ${({theme}) => theme.green};
    transform: translate(2px, 2px);
    border: 4px solid ${({theme}) => theme.green};
    border-radius: 8px;
    appearance: none;
    padding: 08px 18px;
    cursor: pointer;
    transition: all 100ms cubic-bezier(0.22, 0.61, 0.36, 1);
    &:not(.selected) {
        &:hover {
            box-shadow: 6px 6px 0px ${({theme}) => theme.green};
            transform: translate(0px, 0px);
        }
        &:active {
            box-shadow: 0px 0px 0px ${({theme}) => theme.green};
            transform: translate(6px, 6px);
        }
    }
    &.selected {
        box-shadow: 0px 0px 0px 3px ${({theme}) => theme.yellow};
        transform: translate(6px, 6px);
        cursor: default;
    }
`;