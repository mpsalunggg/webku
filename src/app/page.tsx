import { NextPage } from 'next';
import HomePage from '@/features/Home';
import Main from '@/components/common/Main';
import Template from '../components/common/Template';
import Profile from '@/components/display/About';

const Home: NextPage = () => {
  return (
    <Main>
      <HomePage />
      <Profile />
    </Main>
  );
};

export default Home;
