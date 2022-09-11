import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { NewsListItem } from '../../types/types';
import { Button, Paper, Container, Typography } from '@mui/material';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const New: React.FC = () => {
  const navigate = useNavigate();

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

  const goToNew = (key: number) => {
    navigate(`/hackers/news/${key}`);
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar>
        <Typography variant="h1">Hackers news</Typography>
        <Button onClick={() => refreshPage()}>
          <Typography variant="button">Refresh</Typography>
        </Button>
      </NavBar>
      <ol>
        <Typography variant="h5">
          {data!.map((newses) => (
            <div key={newses.id}>
              <li>
                <Paper
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => goToNew(newses.id)}
                >
                  {newses.title}
                </Paper>
                <Container sx={{ boxShadow: 'none', padding: '0px ' }}>
                  by {newses.user} | {newses.time_ago} | {newses.points} {newses.points == 1 ? 'point' : 'points'} |{' '}
                  {newses.comments_count} {newses.comments_count == 1 ? 'comment' : 'comments'}
                </Container>
              </li>
            </div>
          ))}
        </Typography>
      </ol>
    </div>
  );
};

export default New;
