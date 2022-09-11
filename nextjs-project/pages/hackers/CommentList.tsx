import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Tree from './CommentTree';
import { useParams } from 'react-router-dom';
import { NewsItem } from '../../types/types';
import { Button, Container, Paper, Typography } from '@mui/material';

const NewData: React.FC = () => {
  const { id } = useParams();

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
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/hackers');
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Container>
        <Button onClick={() => refreshPage()}>
          <Typography variant="button">Refresh</Typography>
        </Button>
        <Button onClick={() => goMain()}>
          <Typography variant="button">Main page</Typography>
        </Button>
      </Container>
      <Paper key={data!.id}>
        <Typography variant="h5">{data!.content}</Typography>
        <Container sx={{ boxShadow: 'none', backgroundColor: 'inherit', padding: '15px', fontSize: '0.9em' }}>
          <div> {data!.url} </div>
          <div>
            by {data!.user} | {data!.time_ago} | {data!.comments_count}{' '}
            {data!.comments_count == 1 ? 'comment' : 'comments'}
          </div>
        </Container>
      </Paper>
      <Paper>
        <Typography variant="h6">Comments</Typography>
      </Paper>
      {<Tree commentItem={data!.comments} />}
    </div>
  );
};

export default NewData;
