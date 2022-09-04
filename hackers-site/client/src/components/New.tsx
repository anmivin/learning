import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { NewsListItem } from "../types";

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
const Button = styled.button`
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
`;
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

  /*   const { isLoading, error, data, refetch } = useQuery<NewsListItem[], Error>(
    ["newses"],

    async (): Promise<NewsListItem[]> => {
      const res1 = await axios.get<NewsListItem[]>(
        "https://api.hnpwa.com/v0/newest/1.json"
      );
      const res2 = await axios.get<NewsListItem[]>(
        "https://api.hnpwa.com/v0/newest/2.json"
      );
      const res3 = await axios.get<NewsListItem[]>(
        "https://api.hnpwa.com/v0/newest/3.json"
      );
      const res4 = await axios.get<NewsListItem[]>(
        "https://api.hnpwa.com/v0/newest/4.json"
      );
      const newsList = [...res1.data, ...res2.data, ...res3.data, ...res4.data];
      return newsList.slice(0, 100);
    },
    { refetchInterval: 60000 }
  ); */

  const { isLoading, error, data, refetch } = useQuery<NewsListItem[], Error>(
    ["newses"],
    async () => {
      const res = await axios.get<NewsListItem[]>("http://localhost:5000/");
      return res.data;
    },
    {
      refetchInterval: 60000,
    }
  );
  const refreshPage = () => {
    refetch();
  };

  const goToNew = (key: number) => {
    navigate(`/news/${key}`);
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
                <NewsTitle onClick={() => goToNew(newses.id)}>
                  {newses.title}
                </NewsTitle>
                <NewsInfo>
                  by {newses.user} | {newses.time_ago} | {newses.points} points
                  | {newses.comments_count} comments
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
