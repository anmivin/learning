import React from 'react';
import Link from 'next/link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Switch, Box, Typography, Drawer, ThemeProvider, CssBaseline, Button } from '@mui/material';

import themes from '../styles/theme';
import { useState } from 'react';

export default function Layout({ children }) {
  const [darkTheme, isDarkTheme] = useState(false);
  const changeTheme = () => {
    isDarkTheme(!darkTheme);
  };

  return (
    <ThemeProvider theme={darkTheme ? themes.dark : themes.light}>
      <CssBaseline />

      <Drawer variant="permanent" anchor="left">
        <div>
          <Switch
            color="default"
            icon={<AutoAwesomeIcon />}
            checkedIcon={<BedtimeIcon />}
            onChange={() => changeTheme()}
          />
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
          <Button sx={{ width: '90%' }}>
            <Link href="/anime">
              <Typography variant="button">Anime</Typography>
            </Link>
          </Button>
        </div>
      </Drawer>
      <Box component="main" sx={{ marginLeft: '15%', marginRight: '5%' }}>
        {children}
      </Box>
    </ThemeProvider>
  );
}
