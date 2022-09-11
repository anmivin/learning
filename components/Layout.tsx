import Link from 'next/link';
import styled from 'styled-components';

import { Box, Typography, Drawer, ThemeProvider, CssBaseline, Button } from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { theme } from '../styles/theme';

const MainSec = styled.div`
  margin: 20px;
  width: 80vw;
`;

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Drawer variant="permanent" anchor="left">
          <div>
            <AllInclusiveIcon />

            <Button sx={{ width: '90%' }}>
              <Link href="/site">
                <Typography variant="button">Site</Typography>
              </Link>
            </Button>
            <Button sx={{ width: '90%' }}>
              <Link href="/todo">
                <Typography variant="button">Todo</Typography>
              </Link>
            </Button>
            <Button sx={{ width: '90%' }}>
              <Link href="/hackers">
                <Typography variant="button">Hackers</Typography>
              </Link>
            </Button>
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}></Box>

        <MainSec color="background">{children}</MainSec>

        <Box />
      </ThemeProvider>
    </Box>
  );
}
