import { NextPage } from 'next';
import HomePage from '@/features/Home';
import Main from '@/components/common/Main';
import Template from '../components/common/Template';

const Home: NextPage = () => {
  return (
    <Main>
      <HomePage />
    </Main>
  );
};

export default Home;
