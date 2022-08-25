import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Tree from './CommentTree';
import { useParams } from 'react-router-dom';
import { NewsItem } from '../types';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const Button = styled.button`
  border-style: none;
  border-radius: 5px;
  background-color: lightpink;
  width: 100px;
  height: 30px;
  box-shadow: -1px -1px 2px black;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 2px MediumVioletRed;
    color: MediumVioletRed;
  }
`;
const New = styled.div`
  background-color: PaleGreen;
  box-shadow: -1px -1px 2px black;
  border-radius: 5px;
`;
const Title = styled.div`
  padding: 20px;
`;
const Section = styled.div`
  padding: 15px;
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  display-wrap: wrap;
`;
const Div = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
  background-color: lightpink;
  box-shadow: -1px -1px 2px black;
`;

const NewData: React.FC = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery<NewsItem, Error>(
    ['newsitem'],
    async (): Promise<NewsItem> => {
      const res = await axios.get<NewsItem>(`https://api.hnpwa.com/v0/item/${id}.json`);
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
    navigate('/');
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar>
        <Button onClick={() => refreshPage()}>Refresh</Button>
        <Button onClick={() => goMain()}>Main page</Button>
      </NavBar>
      <New key={data!.id}>
        <Title>{data!.title}</Title>
        <Section>
          <div> {data!.url} </div>
          <div>
            by {data!.user} | {data!.time_ago} | {data!.comments_count} comments
          </div>
        </Section>
      </New>
      <Div>Comments</Div>
      {<Tree commentItem={data!.comments} />}
    </div>
  );
};

export default NewData;
