import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Context from '../TheContext';
import { useQuery } from "react-query";


const NewTitle = styled.div `
padding: 10px; 
background-color: PaleGreen;
font-size: 20px;
boarder: 2 solid black;
`
const Wrapp = styled.div `
display: flex;
justify-content: flex-start;

padding: 5px 5px 5px 50px;
`

const ComSec = styled.div `
font-weight: 600;
background-color: lightpink;
padding: 5px;
`
const TheButton = styled.button `
border: thick double Cyan;
width: 100px;
height: 30px;
&:hover {
  cursor: pointer;
}
`;

const TheDiv = styled.div `
 padding: 10px;
 text-align: right;
 font-size: 15px;
`
function New() {
    
  const[context, setContext] = useContext(Context);
  const param = context;
    
  const {isLoading, error, data, refetch} = useQuery(['onenew'], 
  async ({context}) => { 
    const res = await axios.get(`https://api.hnpwa.com/v0/item/${param}.json`)
    return res.data },          
      {
        refetchOnMount: true,
        refetchInterval: 60000,
        refetchIntervalInBackground: true,
      });
      
  const refreshPage = () => {
    refetch();
  }

  const [isHidden, setIsHidden] = useState(true);

  const Comments = ({ items }) => (
    <React.Fragment>
      {items.map(n => (
        <div key={n.id}>
          <h3>{n.user}</h3>
          <div>{n.content.split('<p>').join(' ').split('&#x27;').join('`')}</div>
          <div>{n.time_ago}</div>
          <button onClick={()=> setIsHidden(state => !state)}>{isHidden ? 'v':'^'}</button>
          <ul>{n.comments !==[] && !isHidden ?  <Comments items={n.comments} /> : null}</ul>
        </div>
      ))}
    </React.Fragment>
  );

    if (error) return <h1>OH SHIT</h1>;
    if (isLoading) return <h1>Loading...</h1>;
  
    return (
      <div>
        <TheButton onClick={() => refreshPage()}> Refresh </TheButton>
        <TheDiv> The URL for this: {data.url} </TheDiv>
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

export default New 