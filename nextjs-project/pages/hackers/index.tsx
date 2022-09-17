import styled from 'styled-components';
import React from 'react';

import Link from 'next/link';
/* import { useNavigate } from 'react-router'; */
import axios from 'axios';
import { useQuery } from 'react-query';
import { NewsListItem } from '../../types/types';
import { Button, Paper, Container, Typography } from '@mui/material';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const New: React.FC = () => {
  const { isLoading, error, data, refetch } = useQuery<NewsListItem[], Error>(
    ['newses'],
    async () => {
      const res = await axios.get<NewsListItem[]>('https://api.hnpwa.com/v0/newest/1.json');
      //'http://localhost:5000/'
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
      <NavBar>
        <Typography variant="h1">Hackers news</Typography>
        <Button onClick={() => refreshPage()}>
          <Typography variant="button">Refresh</Typography>
        </Button>
      </NavBar>
      <ol>
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
                  by {newses.user} | {newses.time_ago} | {newses.points} {newses.points == 1 ? 'point' : 'points'} |{' '}
                  {newses.comments_count} {newses.comments_count == 1 ? 'comment' : 'comments'}
                </Container>
              </li>
            </div>
          ))}
        </div>
      </ol>
    </>
  );
};

export default New;
