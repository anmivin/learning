import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './New';
import NewData from './CommentList';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export default function Hackers() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/hackers" element={<New />} />
          <Route path="/hackers/news/:id" element={<NewData />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
