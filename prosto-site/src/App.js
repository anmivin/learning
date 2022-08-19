import styled from "styled-components";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
/* import { QueryClient, QueryClientProvider } from "react-query"; */
import Main from './components/Main'
import Mapp from './components/Map'
import Timer from './components/Timer'


const TheHeader = styled.div`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`;
const Navi = styled.nav`
 
  display: flex;
  justify-content: space-around;
  background-color: lightpink;
  
`;
const Pages = styled.li`
  padding: 10px 10px 10px 20px;
 
`; 
/* const queryClient = new QueryClient(); */
function App() {
  /* const [context, setContext] = useState("");*/

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
        <TheHeader>Lorem ipsum</TheHeader>
        {/* <Context.Provider value={[context, setContext]}> */}
          <BrowserRouter>
            <Navi>
              <Pages>
                <Link to="/">Main page</Link>
              </Pages>
              <Pages>
                <Link to="/map">Map</Link>
              </Pages>
              <Pages>
                <Link to="/timer">Timer</Link>
              </Pages>
            </Navi>

            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/map" element={<Mapp/>} />
              <Route exact path="/timer" element={<Timer />} />
            </Routes>
          </BrowserRouter>
          
        {/* </Context.Provider>
      </QueryClientProvider> */}
    </>
  );
}

export default App;