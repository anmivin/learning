import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Context from '../TheContext';
import { useQuery } from "react-query";

const NewTitle = styled.div `
background-color: GreenYellow;
`
const Wrapp = styled.div `
display: flex;
justify-content: flex-start;

`

const ComSec = styled.div `
background-color: lightpink;

`

const ComItem = styled.div `
padding: 0 50px;
display: flex;
justify-content: flex-start;
`


function New() {
    
    const[context, setContext] = useContext(Context);
    const param = context;
    
    const {isLoading, error, data} = useQuery(['onenew'], 
    async ({context}) => { 
      const res = await axios.get(`https://api.hnpwa.com/v0/item/${param}.json`)
      return res.data },
     );
    
    
    if (error) return <h1>OH SHIT</h1>;
    if (isLoading) return <h1>Loading...</h1>;
  
    return (
      <div>
        <div> Работает вообще? </div>
          <div>
            <NewTitle> {data.title}&nbsp; is on URL &nbsp;{data.url}</NewTitle>
              <Wrapp>
                <div>by &nbsp;{data.user}</div>
                <div>&nbsp;{data.time_ago}</div>
                <div>&nbsp;{data.comments_count}&nbsp;comments</div>
              </Wrapp>
              
              </div>
              <ComSec>
                <div>Comment section</div>
                {
                  data.comments.map((comment) => 
                  <ComItem key={comment.id}>
                    <div>{comment.content}
                      <div>{comment.user}</div>
                      <div>{comment.time_ago}</div>
                      <div>{comment.comments_count}</div>
                    </div>
                  </ComItem>
                   )
                }
                </ComSec>
            

            
          
        
        </div>
      
    
    );
  }

export default New