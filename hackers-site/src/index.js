import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 30px;
    box-sizing: border-box;
    background-color: Pink;
    font-family: Lucida Sans, Verdana, Serif;
    color: black;
 }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
);
