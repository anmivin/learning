import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: DodgerBlue;
  font-family: cursive;
  font-weight: bold;
  color: black;
  text-align: center;
}
`;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>,
);
