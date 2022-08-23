import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: raw;
  background-color: Plum;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px Violet;
  @media (max-width: 768px) {
    height: 30px;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;
const LinkElem = styled(NavLink)`
  padding: 5px 15px;
  border-radius: 10px;
  text-decoration: none;
  &:active {
    color: blue;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 5px Violet;
  }
`;
const FakeNav = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: raw;
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
const FakeElem = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 0px 10px 5px Violet;
  }
`;
const Container = styled.div`
  background-color: Plum;
  box-shadow: 0px 0px 10px 5px Violet;
  margin: 30px 0;
  padding: 30px 0;
  flex-wrap: wrap;
  border-radius: 10px;
`;

const Layout = () => {
  return (
    <>
      <NavBar>
        <Nav>
          <LinkElem to="/">Main</LinkElem>
          <LinkElem to="/map">Map</LinkElem>
          <LinkElem to="/timer">Timer</LinkElem>
        </Nav>
        <FakeNav>
          <FakeElem>Переключить канал</FakeElem>
          <FakeElem>Выйти в люди</FakeElem>
          <FakeElem>Хикковать</FakeElem>
        </FakeNav>
      </NavBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
