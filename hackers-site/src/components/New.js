import styled from "styled-components";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../NewsItemContext";
import { useQuery } from "react-query";

const NewsTitle = styled.div`
  background-color: PaleGreen;
  padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 50px;
`;

const Button = styled.button`
  border: thick double Cyan;
  width: 100px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Li = styled.li`
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

function New() {
  const [context, setContext] = useContext(Context);
  const navigate = useNavigate();

  const { isLoading, error, data, refetch } = useQuery(['newses'], async () =>{
    const res1 = await axios.get('https://api.hnpwa.com/v0/newest/1.json');
    const res2 = await axios.get('https://api.hnpwa.com/v0/newest/2.json');
    const res3 = await axios.get('https://api.hnpwa.com/v0/newest/3.json');
    const res4 = await axios.get('https://api.hnpwa.com/v0/newest/4.json');
    const newsList = [...res1.data,...res2.data, ...res3.data, ...res4.data]
    return newsList.slice(1, 101);
  }, {refetchInterval: 60000} );

  
  const refreshPage = () => {
    refetch();

  };

  const goToNew = (key) => {
    setContext(key);
    const path = "/news";
    navigate(path);
  };

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Button onClick={() => refreshPage()}> Refresh </Button>
      <ol>
        <div>
          {data.map((newses) => (
            <div key={newses.id}>
              <Li>
                <NewsTitle onClick={() => goToNew(newses.id)}>
                  {newses.title}
                </NewsTitle>
              </Li>
              <Wrapper>
                <div> {`by ${newses.user} `} </div>
                <div> {` ${newses.time_ago} `} </div>
                <div> {` ${newses.points} points `} </div>
                <div> {` ${newses.comments_count} comments`}</div>
              </Wrapper>
            </div>
          ))}
          
        </div>
      </ol>
    </div>
  );
}

export default New;
