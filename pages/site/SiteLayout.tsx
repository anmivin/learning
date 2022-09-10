import Link from 'next/link';
import styled from 'styled-components';
import { Button, Paper } from '@mui/material';

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
const LinkElem = styled(Link)`
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
const Containers = styled.div`
  background-color: Plum;
  box-shadow: 0px 0px 10px 5px Violet;
  margin: 30px 0;
  padding: 30px 0;
  flex-wrap: wrap;
  border-radius: 10px;
`;

const SiteLayout = ({ children }) => {
  return (
    <>
      <NavBar>
        <Nav>
          <Button>
            <LinkElem href="/site">Main</LinkElem>
          </Button>
          <Button>
            <LinkElem href="/site/map">Map</LinkElem>
          </Button>
          <Button>
            <LinkElem href="/site/timer">Timer</LinkElem>
          </Button>
        </Nav>
        <FakeNav>
          <Button>Переключить канал</Button>
          <Button>Выйти в люди</Button>
          <Button>Хикковать</Button>
        </FakeNav>
      </NavBar>
      <Paper>{children}</Paper>
    </>
  );
};

export default SiteLayout;
