import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useQuery } from 'react-query';
import Tree from './CommentTree';
import { useParams } from 'react-router-dom';

const Title = styled.div`
  padding: 10px;
  background-color: PaleGreen;
  font-size: 20px;
  font-family: Lucida Sans, Verdana, Serif;
  border: 2 solid black;
`;
const Div = styled.div`
  padding: 5px 5px 5px 50px;
`;

const ComSec = styled.div`
  font-weight: 600;
  background-color: lightpink;
  padding: 5px;
`;
const Button = styled.button`
  border: thick double Cyan;
  width: 100px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const URL = styled.div`
  padding: 10px;
  text-align: right;
  font-size: 15px;
`;
function NewData() {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery(
    ['newsitem'],
    async () => {
      const res = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
      return res.data;
    },
    {
      refetchOnMount: true,
      refetchInterval: 60000,
      refetchIntervalInBackground: true,
    },
  );

  const refreshPage = () => {
    refetch();
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Button onClick={() => refreshPage()}> Refresh </Button>
      <URL> The URL for this: {data.url} </URL>
      <div>
        <Title key={data.id}> {data.title}</Title>
        <Div>
          by {data.user} {data.time_ago} {data.comments_count} comments
        </Div>
      </div>
      <ComSec>Comment section</ComSec>
      <Tree data={data.comments} />
    </div>
  );
}

export default NewData;
