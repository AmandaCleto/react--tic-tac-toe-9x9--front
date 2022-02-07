import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "styled-components";

// const themeContext = useContext(ThemeContext);
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        h1, h2, h3, h4, p {
         color: ${({ theme }) => theme.green};
        }
    }

    .modal-inside-space {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .app {
        width: 100vw;
        height: 100vh;
        border-width: 10px;
        border-bottom-color: ${({ theme }) => theme.blue};
        border-right-color: ${({ theme }) => theme.blue};
        border-top-color: ${({ theme }) => theme.red};
        border-left-color: ${({ theme }) => theme.red};
        border-style: solid;

        h1 {
            font-size: 28px;

            @media(max-width: 600px) {
             font-size: 24px;
            }
        }

        h2 {
            font-size: ${({ theme }) => theme.font.lg};
            @media(max-width: 600px) {
                font-size: ${({ theme }) => theme.fontMobile.lg};
            }
        }

        h3 {
            font-size: ${({ theme }) => theme.font.md};
            @media(max-width: 600px) {
                font-size: ${({ theme }) => theme.fontMobile.lg};
            }
        }

        @media (max-width: 600px) {
            border: none;
            border-width: 10px;
            border-style: solid;
            border-bottom-color: ${({ theme }) => theme.blue};
            border-right-color: ${({ theme }) => theme.blue};
            border-top-color: ${({ theme }) => theme.red};
            border-left-color: ${({ theme }) => theme.red};

            &:after,
            &:before {
               content: '';
               height: 14px;
               width: 50%;
               background: #fff;
               position: absolute;
            }

            &:after {
               top: -3px;
               left: 0;
            }

            &:before {
               bottom: -3px;
               right: 0;
            }
        }
    }
`;
