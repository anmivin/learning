import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { NewsListItem } from '../../components/hackcomp/types';
import { Button, Paper } from '@mui/material';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Header = styled.div`
  font-size: 2em;
  color: PaleGreen;
  font-weight: bold;
  text-shadow: 0px 0px 10px MediumVioletRed, 2px 2px 2px black;
`;
/* const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  background-color: lightpink;
  box-shadow: 1px 1px 2px black;
  &:hover {
    cursor: pointer;
    box-shadow: -1px -1px 2px MediumVioletRed;
    color: MediumVioletRed;
  }
`; */
const NewsTitle = styled.div`
  background-color: PaleGreen;
  padding: 15px;
  box-shadow: 1px 1px 2px black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: -1px -1px 2px MediumVioletRed;
    color: MediumVioletRed;
  }
`;
const NewsInfo = styled.div`
  margin: 10px 0;
  padding-left: 40px;
  background-color: lightpink;
  font-size: 0.9em;
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
        <Header>Hackers news</Header>
        <Button onClick={() => refreshPage()}> Refresh </Button>
      </NavBar>
      <ol>
        <div>
          {data!.map((newses) => (
            <div key={newses.id}>
              <li>
                <Paper onClick={() => goToNew(newses.id)}>{newses.title}</Paper>
                <NewsInfo>
                  by {newses.user} | {newses.time_ago} | {newses.points} {newses.points == 1 ? 'point' : 'points'} |{' '}
                  {newses.comments_count} {newses.comments_count == 1 ? 'comment' : 'comments'}
                </NewsInfo>
              </li>
            </div>
          ))}
        </div>
      </ol>
    </div>
  );
};

export default New;
