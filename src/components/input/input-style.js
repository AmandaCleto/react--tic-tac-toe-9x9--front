import styled from 'styled-components';

export const LabelComponent = styled.label`



    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
        margin-bottom: 8px;
        font-weight: bold;
    }
`;

export const InputComponent = styled.input`
    &::placeholder {
        color: ${({theme}) => theme.grey};
    }
    color: #2e2e2e;
    width: calc(100% - 5px);
    border-radius: 5px;
    padding: 10px 0px 10px 18px;
    border: 2px solid ${({theme}) => theme.green};
    transition: all 100ms cubic-bezier(0.22, 0.61, 0.36, 1);
    font-size: ${({theme}) => theme.font.md};
    box-shadow: 4px 4px 0px ${({theme}) => theme.green};
    transform: translate(0px, 0px);
    &:focus {
        box-shadow: 0px 0px 0px ${({theme}) => theme.green};
        transform: translate(4px, 4px);
    }
    &:focus-visible {
        outline: none;
    }
`;