import styled from 'styled-components';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Context from '../TheContext';
import {useQuery} from 'react-query';


const NewsTitle = styled.div `
background-color: PaleGreen;
padding: 10px;
`;
const Wrapper = styled.div `
display: flex;
justify-content: flex-start;
padding-left: 50px;

`;

const TheButton = styled.button `

border: thick double Cyan;
width: 100px;
height: 30px;
&:hover {
  cursor: pointer;
}
`;

const TheLi = styled.li `
padding: 10px;

&:hover {
  cursor: pointer;
}

`;

function New() {
    const[context, setContext] = useContext(Context);
    const navigate = useNavigate(); 
   
    const {isLoading, error, data: first, refetch} = useQuery(['newses'], 
    async () => { 
      
        const res = await axios.get('https://api.hnpwa.com/v0/newest/1.json');
        return res.data
            
       },
      {
        
        refetchInterval: 60000,
      }
      );
      

      const { data: second} = useQuery(['newses'], 
        async () => { 
      
        const res = await axios.get('https://api.hnpwa.com/v0/newest/2.json');
        return res.data
            
       },
       {
         
         refetchInterval: 60000,
       }
    
      );
      
     
      const { data: third } = useQuery(['newses'], 
      async () => { 
      
        const res = await axios.get('https://api.hnpwa.com/v0/newest/3.json');
        return res.data
            
       },
       {
         
         refetchInterval: 60000,
       }
    
      );
      
      
      const { data: fourth } = useQuery(['newses'], 
    async () => { 
      
        const res = await axios.get(`https://api.hnpwa.com/v0/newest/4.json?_limit=10`);
        return res.data
            
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
        
        <TheButton onClick={() => refreshPage()}> Refresh </TheButton>
        <ol>
        <div> 
            {
              first.map((newses) =>
              <div key={newses.id} >
                   <TheLi>           
                  <NewsTitle onClick={() => goToNew(newses.id)}>{newses.title}</NewsTitle>
                  </TheLi>
                  <Wrapper>
                    <div>by {newses.user} &nbsp;</div>
                    <div>{newses.time_ago} &nbsp;</div>
                    <div>{newses.points} points &nbsp;</div>
                    <div>{newses.comments_count}&nbsp; comments</div>
                  </Wrapper>
                            </div>
                            
                        )
                    } 
                    {
              second.map((newses) =>
              
                  <div key={newses.id} >
                                
                                <TheLi> <NewsTitle onClick={() => goToNew(newses.id)}>{newses.title}</NewsTitle></TheLi>
                  <Wrapper>
                    <div>{newses.points} points &nbsp;</div>
                    <div>by {newses.user} &nbsp;</div>
                    <div>{newses.time_ago}&nbsp;</div>
                    <div>{newses.comments_count}&nbsp; comments</div>
                  </Wrapper>
                            </div>
                            
                        )
                    }
                    {
              third.map((newses) =>
              
                  <div key={newses.id} >
                                
              <TheLi><NewsTitle onClick={() => goToNew(newses.id)}>{newses.title}</NewsTitle></TheLi>
                  <Wrapper>
                    <div>{newses.points} points &nbsp;</div>
                    <div>by {newses.user} &nbsp;</div>
                    <div>{newses.time_ago}&nbsp;</div>
                    <div>{newses.comments_count}&nbsp; comments</div>
                  </Wrapper>
                            </div> 
                        )
                    }
                    {
              fourth.map((newses) =>
              
                  <div key={newses.id} >
                                
                                <TheLi><NewsTitle onClick={() => goToNew(newses.id)}>{newses.title}</NewsTitle></TheLi>
                  <Wrapper>
                    <div>{newses.points} points &nbsp;</div>
                    <div>by {newses.user} &nbsp;</div>
                    <div>{newses.time_ago}&nbsp;</div>
                    <div>{newses.comments_count}&nbsp; comments</div>
                  </Wrapper>
                            </div>
                        )
                    }
              
                  </div>
                
                 </ol>
                
            </div>
         
    );
  }

export default New