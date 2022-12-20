import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /******************************* Body *******************************/
  body {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  body h1, 
  body h2,
  body p, 
  body a {
    color: ${({ theme }) => theme.text} !important;
  }
  /******************************* Fireflies *******************************/
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
  /******************************* NavBar *******************************/
  .navbar button {
    background: ${({ theme }) => theme.toggleButton} !important;
  }
  /******************************* MyWork *******************************/
  .my-work .card-body {
    background: ${({ theme }) => theme.reverseBody} !important;
  }
  .my-work .card-body .card-text {
    color: ${({ theme }) => theme.reverseText} !important;
  }
  .my-work .card-body .btn {
    background: ${({ theme }) => theme.toggleButton} !important;
    color: ${({ theme }) => theme.text} !important;
  }
`;
