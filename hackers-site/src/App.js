import styled from "styled-components";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import New from "./components/New";
import NewData from "./components/NewData";
import Context from "./NewsItemContext";
import { QueryClient, QueryClientProvider } from "react-query";

const Header = styled.div`
  font-size: 50px;
  font-weight: 300;
  box-sizing: border-box;
  text-align: center;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Pages = styled.li`
  padding: 10px 10px 10px 20px;
  background-color: lightpink;
`;

const queryClient = new QueryClient();
function App() {
  const [context, setContext] = useState("");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header>Hackers news</Header>
        <Context.Provider value={[context, setContext]}>
          <BrowserRouter>
            <NavBar>
              <Pages>
                <Link to="/">Main page</Link>
              </Pages>
              <Pages>
                <Link to="/news">Last Seen New</Link>
              </Pages>
            </NavBar>

            <Routes>
              <Route exact path="/" element={<New />} />
              <Route exact path="/news" element={<NewData />} />
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
