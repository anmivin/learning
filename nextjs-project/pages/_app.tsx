import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import TimerContext from '../components/TimerContext';

export default function App({ Component, pageProps }) {
  const [secs, setSecs] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecs(secs + 1);
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <TimerContext.Provider value={{ secs }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TimerContext.Provider>
    </>
  );
}
