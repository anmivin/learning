import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
/* import { useNavigate } from 'react-router'; */
import axios from 'axios';
import { useQuery } from 'react-query';
import { NewsListItem } from '../../types/types';
import { Button, Paper, Container, Typography } from '@mui/material';

const New: React.FC = () => {
  const theme = useTheme();
  const { isLoading, error, data, refetch } = useQuery<NewsListItem[], Error>(
    ['newses'],
    async () => {
      const res = await axios.get<NewsListItem[]>('http://localhost:5000/');

      return res.data;
    },
    {
      refetchInterval: 60000,
    },
  );
  const refreshPage = () => {
    refetch();
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Container sx={{ backgroundColor: 'primary.main' }}>
        <Typography variant="h1">Hackers news</Typography>
        <Button onClick={() => refreshPage()}>
          <Typography variant="button">Refresh</Typography>
        </Button>
      </Container>
      <Paper
        sx={{
          boxShadow: 'none',
          width: '80%',
          backgroundColor: 'background.default',
        }}
      >
        <ol style={{ color: `${theme.palette.primary.light}` }}>
          <div>
            {data!.map((newses) => (
              <div key={newses.id}>
                <li>
                  <Paper
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                      },
                      backgroundColor: 'primary.dark',
                    }}
                  >
                    <Link href={{ pathname: 'hackers/[newItem]', query: { newItem: newses.id } }}>
                      <Typography variant="body1">
                        <a>{newses.title}</a>
                      </Typography>
                    </Link>
                  </Paper>
                  <Container sx={{ boxShadow: 'none', padding: '0px ' }}>
                    <Typography variant="body2" sx={{ fontSize: '0.9em' }}>
                      by {newses.user} | {newses.time_ago} | {newses.points} {newses.points == 1 ? 'point' : 'points'} |{' '}
                      {newses.comments_count} {newses.comments_count == 1 ? 'comment' : 'comments'}
                    </Typography>
                  </Container>
                </li>
              </div>
            ))}
          </div>
        </ol>
      </Paper>
    </>
  );
};

export default New;
