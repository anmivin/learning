import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import TimerContext from '../components/TimerContext';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [secs, setSecs] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecs(secs + 1);
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <TimerContext.Provider value={{ secs }}>
          <Component {...pageProps} />
        </TimerContext.Provider>
      </QueryClientProvider>
    </Layout>
  );
}
