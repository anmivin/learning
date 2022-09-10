import Link from 'next/link';
import styled from 'styled-components';

import {
  Box,
  Typography,
  Drawer,
  AppBar,
  Card,
  ThemeProvider,
  CardActions,
  CardMedia,
  CssBaseline,
  Container,
  Toolbar,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { theme } from '../../styles/theme';
import { display } from '@mui/system';

const Containers = styled.div`
  display: flex;
  flex-direction: raw;
`;

const MainSec = styled.div`
  margin: 20px;
  width: 80vw;
`;
const NavBar = styled.div`
  width: 15vw;
  margin: 20px;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: Plum;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px Violet;
  @media (max-width: 768px) {
    height: 30px;
  }
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
export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Drawer
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '15%',
            backgroundColor: '#fbd5ff',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '15%',
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <AllInclusiveIcon />

          <Button>
            <LinkElem href="/site">Site</LinkElem>
          </Button>
          <Button>
            <LinkElem href="/todo">Todo</LinkElem>
          </Button>
          <Button>
            <LinkElem href="/hackers">Hackers</LinkElem>
          </Button>
        </Drawer>

        <Container>
          <MainSec color="background">{children}</MainSec>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
