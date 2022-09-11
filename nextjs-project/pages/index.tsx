import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import Router from 'next/router';

export default function Home() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push('/site');
    }
  });

  return (
    <>
      <Layout>
        <h1>Prilojuha</h1>
        <div>Это сайт из трёх созданных мной приложений</div>
        <div>Я молодец, я написала (почти) всё сама</div>
      </Layout>
    </>
  );
}
