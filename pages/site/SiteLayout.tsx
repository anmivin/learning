import Link from 'next/link';

import { Button, Container, Typography } from '@mui/material';

const SiteLayout = ({ children }) => {
  return (
    <>
      <Container>
        <div>
          <Button>
            <Link href="/site">
              <Typography variant="button">Main</Typography>
            </Link>
          </Button>
          <Button>
            <Link href="/site/map">
              <Typography variant="button">Map</Typography>
            </Link>
          </Button>
          <Button>
            <Link href="/site/timer">
              <Typography variant="button">Timer</Typography>
            </Link>
          </Button>
        </div>
        <div>
          <Button>
            <Typography variant="button">Переключить канал</Typography>
          </Button>
          <Button>
            <Typography variant="button">Выйти в люди</Typography>
          </Button>
          <Button>
            <Typography variant="button">Хикковать</Typography>
          </Button>
        </div>
      </Container>

      <Container>{children}</Container>
    </>
  );
};

export default SiteLayout;
