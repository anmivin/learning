import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './main';
import Mapp from './map';
import Timer from './timer';
import SiteLayout from './SiteLayout';
import TimerContext from '../../components/sitecomp/TimerContext';
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
        <SiteLayout>
            <Route path="/" element={<SiteLayout />}>
              <Route index element={<Main />} />
              <Route path="map" element={<Mapp />} />
              <Route path="timer" element={<Timer />} />
            </Route>
         </SiteLayout>
         <TimerContext.Provider/>
         </>
  );
};

export default App;
