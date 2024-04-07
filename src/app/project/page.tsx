import { NextPage } from 'next';
import { FC } from 'react';
import ProjectPage from '@/features/Project';
import Main from '@/components/common/Main';

const Project: FC<NextPage> = () => {
  return (
    <Main>
      <ProjectPage />
    </Main>
  );
};
export default Project;
