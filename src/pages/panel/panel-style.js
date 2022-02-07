import styled from 'styled-components';

import bgCardLeft from '../../assets/bg-card-panel-left.png';
import bgCardRight from '../../assets/bg-card-panel-right.png';

export const Container = styled.main`
    background: ${({theme}) => theme.lightWhite};
    min-height: 100vh;

    .card-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 624px;
        min-height: 160px;
        background: ${({theme}) => theme.white};
        border-radius: 8px;
        /* background: url(${bgCardLeft}), url(${bgCardRight}); */
    }
`