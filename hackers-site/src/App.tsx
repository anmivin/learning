import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './components/New';
import NewData from './components/NewData';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/news/:id" element={<NewData />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
