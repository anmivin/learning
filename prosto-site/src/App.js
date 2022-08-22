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

function App() {
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecs(secs + 1);
      if (secs === 59) {
        setMins(mins + 1);
        setSecs(0);
      }
      if (mins === 59) {
        setHours(hours + 1);
        setMins(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <Header>Капитал-шоу "Счастливы вместе"</Header>
      <TimerContext.Provider value={{ secs, mins, hours }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route exact path="map" element={<Mapp />} />
              <Route exact path="timer" element={<Timer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TimerContext.Provider>
    </>
  );
}

export default App;
