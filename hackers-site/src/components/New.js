import styled from 'styled-components';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Context from '../TheContext';
import {useQuery} from 'react-query';

const NewsTitle = styled.div `
background-color: GreenYellow;
padding: 10px;
`
const Wrapper = styled.div `
display: flex;
justify-content: flex-start;

`

function New() {
    const[context, setContext] = useContext(Context);
    const navigate = useNavigate(); 
    
    

    const {isLoading, error, data, refetch} = useQuery(['newses'], 
    async () => { 
      const res = await axios.get('https://api.hnpwa.com/v0/newest/1.json')
      return res.data },
      {
        enable: false,
      },
      {
        
        refetchInterval: 60000,
      }
      );
  
    const refreshPage = () => {
       refetch();
        
      console.log('jj')};
 
    const goToNew = (key) => {
        setContext(key);
        console.log(key);
        const path = '/news'; 
        navigate(path);
    }

    if (error) return <h1>OH SHIT</h1>;
    if (isLoading) return <h1>Loading...</h1>;
       
    
    return (
      <div>
        
        <button onClick={() => refreshPage()}> Refresh </button>
        <div> 
                                  
            {
              data.map((newses) =>
                  <div key={newses.id} >
                                
                  <NewsTitle onClick={() => goToNew(newses.id)}>{newses.title}</NewsTitle>
                  <Wrapper>
                    <div>{newses.points} points &nbsp;</div>
                    <div>by {newses.user} &nbsp;</div>
                    <div>{newses.time_ago}</div>
                  </Wrapper>
                            </div>
                        )
                    } 
              
                  </div>
                 
              
                
            </div>
      
    
    );
  }

export default New