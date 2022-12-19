import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  /******************************* FIREFLIES *******************************/
  .firefly::before {
    background: ${({ theme }) => theme.text} !important;
  }
  .firefly::after {
    background: ${({ theme }) => theme.text} !important;
  }
  @keyframes flash {
    0%,
    30%,
    100% {
      opacity: 0;
      box-shadow: 0 0 0vw 0vw ${({ theme }) => theme.text};
    }
    5% {
      opacity: 2;
      box-shadow: 0 0 2vw 0.4vw ${({ theme }) => theme.text};
    }
  }
  /******************************* NAVBAR *******************************/
  .navbar a {
    color: ${({ theme }) => theme.text} !important;
  }
  .navbar button {
    background: ${({ theme }) => theme.toggleButton} !important;
  }  
  /******************************* WORK *******************************/
  .card {
    background: ${({ theme }) => theme.reverseBody} !important;
  }
  .card-text {
    color: ${({ theme }) => theme.reverseText} !important;
  }
  .card-body button {
    background: ${({ theme }) => theme.toggleButton} !important;
  }
  .card-body button a {
    color: ${({ theme }) => theme.text} !important;
  }
  .card-body p {
    color: ${({ theme }) => theme.reverseText} !important;
  }
`;
