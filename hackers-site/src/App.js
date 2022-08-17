import { StyledComponent } from 'styled-components';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import New from './components/New';
import NewData from './components/NewData';
import Context from './TheContext';
import {QueryClient, QueryClientProvider} from 'react-query';



const queryClient = new QueryClient();
function App() {
  const [context, setContext] = useState('');
  
 
  return (
    <>
     <QueryClientProvider client={queryClient}>
    <div>Hackers news</div>
    <Context.Provider value={[context, setContext]}>
    <BrowserRouter>
    
    <nav>
      <li><Link to='/'>Main</Link></li>
      <li><Link to='/news'>New data</Link></li>
    </nav>
        
    
    <Routes>
      
      <Route exact path='/' element={<New/>}/>
      <Route exact path='/news' element={<NewData/>}/>
      
    </Routes>
    
              
  

</BrowserRouter> 

    </Context.Provider>

    </QueryClientProvider>
    </>
  );
}

export default App;

