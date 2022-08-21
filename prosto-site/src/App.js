import styled from 'styled-components';
import React, { useState, useContext, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* import { QueryClient, QueryClientProvider } from "react-query"; */
import Main from './components/Main';
import Mapp from './components/Map';
import Timer from './components/Timer';
import Layout from './components/Layout';
import UserContext from './components/TimerContext';
const TheHeader = styled.div`
  font-size: 30px;

  text-align: center;
`;

/* const queryClient = new QueryClient(); */
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
      {/* <QueryClientProvider client={queryClient}> */}
      <TheHeader>Lorem ipsum</TheHeader>
      <UserContext.Provider value={{ secs, mins, hours }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route exact path="map" element={<Mapp />} />

              <Route exact path="timer" element={<Timer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
