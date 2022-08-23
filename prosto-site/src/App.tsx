import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Mapp from './components/Map';
import Timer from './components/Timer';
import Layout from './components/Layout';
import TimerContext from './components/TimerContext';
const Header = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`;

const App: React.FC = () => {
  const [secs, setSecs] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecs(secs + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <Header>Капитал-шоу "Счастливы вместе"</Header>
      <TimerContext.Provider value={{ secs }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="map" element={<Mapp />} />
              <Route path="timer" element={<Timer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TimerContext.Provider>
    </>
  );
};

export default App;
