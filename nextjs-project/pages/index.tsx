import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/site');
  }

  return (
    <Layout>
      <h1>Prilojuha</h1>
      <div>Это сайт из трёх созданных мной приложений</div>
      <div>Я молодец, я написала (почти) всё сама</div>
    </Layout>
  );
}
