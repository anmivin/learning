import styled from 'styled-components';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import New from './components/New';
import NewData from './components/NewData';
import { QueryClient, QueryClientProvider } from 'react-query';

const Header = styled.div`
  font-size: 50px;
  font-weight: 300;
  box-sizing: border-box;
  text-align: center;
`;
const Nav = styled.nav`
  text-align: right;
`;

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>Hackers news</Header>
      <BrowserRouter>
        <Nav>
          <Link to="/">Main page</Link>
        </Nav>
        <Routes>
          <Route exact path="/" element={<New />} />
          <Route exact path="/news/:id" element={<NewData />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
