import { FC } from 'react';
import { NextPage } from 'next';
import HomePage from '@/features/Home';
import Main from '@/components/common/Main';
import Template from '../components/common/Template';

const Home: FC<NextPage> = () => {
  return (
    <Main className="justify-between">
      <Template key="home">
        <HomePage />
      </Template>
    </Main>
  );
};

export default Home;
