import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Tree from '../../components/CommentTree';
import { NewsItem } from '../../types/types';
import { Button, Container, Paper, Typography } from '@mui/material';

const NewData: React.FC = () => {
  const navigate = useRouter();
  const id = navigate.query.newItem;

  const { isLoading, error, data, refetch } = useQuery<NewsItem, Error>(
    ['newsitem'],
    async (): Promise<NewsItem> => {
      const res = await axios.get<NewsItem>(`http://localhost:5000/news/${id}`);

      return res.data;
    },
    {
      refetchInterval: 60000,
    },
  );

  const refreshPage = () => {
    refetch();
  };

  const goMain = () => {
    navigate.push('/hackers');
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Container sx={{ backgroundColor: 'primary.main' }}>
        <Button onClick={() => goMain()}>
          <Typography variant="button">Main page</Typography>
        </Button>
        <Button onClick={() => refreshPage()}>
          <Typography variant="button">Refresh</Typography>
        </Button>
      </Container>
      <Paper
        sx={{
          boxShadow: 'none',
          margin: '0px',
          width: '80%',
          backgroundColor: 'background.default',
        }}
      >
        <Paper key={data!.id} sx={{ backgroundColor: 'primary.dark' }}>
          <Typography variant="h5">{data!.content}</Typography>
          <Container sx={{ boxShadow: 'none', backgroundColor: 'inherit', padding: '15px' }}>
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              {data!.url}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              by {data!.user} | {data!.time_ago} | {data!.comments_count}{' '}
              {data!.comments_count == 1 ? 'comment' : 'comments'}
            </Typography>
          </Container>
        </Paper>

        <Paper sx={{ backgroundColor: 'primary.dark' }}>
          <Typography variant="h6">Comments</Typography>
        </Paper>
        {<Tree commentItem={data!.comments} />}
      </Paper>
    </div>
  );
};

export default NewData;
