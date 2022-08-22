import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 30px;
    box-sizing: border-box;
    background-color: Thistle;
    font-family: serif;
    font-weight: 600;
    color: Indigo;
 }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* нет UseStrict, потому что с ним рендерится две карты */}
    <App />
    <GlobalStyle />
  </>,
);
