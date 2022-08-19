import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Context from "../NewsItemContext";
import { useQuery } from "react-query";

const NewTitle = styled.div`
  padding: 10px;
  background-color: PaleGreen;
  font-size: 20px;
  border: 2 solid black;
`;
const Wrapp = styled.div`
  display: flex;
  justify-content: flex-start;

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

const Div = styled.div`
  padding: 10px;
  text-align: right;
  font-size: 15px;
`;
function New() {
  const [context, setContext] = useContext(Context);
  /* const [newID, setNewID] = useState(context) */
  
  const test = 32515067; //чтобы проверить древо комментов, подставить вместо param

  const { isLoading, error, data, refetch } = useQuery(
    ["onenew"],
    async () => {
      const res = await axios.get(
        `https://api.hnpwa.com/v0/item/${context}.json`
      );
      return res.data;
    },
    {
      refetchOnMount: true,
      refetchInterval: 60000,
      refetchIntervalInBackground: true
    }
  );

  const refreshPage = () => {
    refetch();
  };

  const [isHidden, setIsHidden] = useState(true);

  const Comments = ({ items }) => (
    <React.Fragment>
      {items.map((commentItem) => (
        <div key={commentItem.id}>
          <h3>{commentItem.user}</h3>
          <div>
            {commentItem.content.split("<p>").join(" ").split("&#x27;").join("`")}
          </div>
          <div>{commentItem.time_ago}</div>
          <button onClick={() => setIsHidden((state) => !state)}>
            {isHidden ? "v" : "^"}
          </button>
          <ul>
            {commentItem.comments !== [] && !isHidden ? (
              <Comments items={commentItem.comments} />
            ) : null}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );

  if (error) return <h1>OH SHIT</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Button onClick={() => refreshPage()}> Refresh </Button>
      <Div> The URL for this: {data.url} </Div>
      <div>
        <NewTitle> {data.title}</NewTitle>
        <Wrapp>
          <div>by &nbsp;{data.user}</div>
          <div>&nbsp;{data.time_ago}</div>
          <div>&nbsp;{data.comments_count}&nbsp;comments</div>
        </Wrapp>
      </div>

      <ComSec>Comment section</ComSec>

      <Comments items={data.comments} />
    </div>
  );
}

export default New;
