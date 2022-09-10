import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../../components/vaincomp/Layout';
import New from './New';
import NewData from './news';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export default function Hackers() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/hackers" element={<New />} />
            <Route path="/hackers/news/:id" element={<NewData />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Layout>
  );
}
