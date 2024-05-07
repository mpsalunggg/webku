import { NextPage } from 'next';
import ProjectPage from '@/features/Project';
import Main from '@/components/common/Main';
import Template from '@/components/common/Template';

const Project: NextPage = () => {
  return (
    <Main>
      <Template key="project">
        <ProjectPage />
      </Template>
    </Main>
  );
};
export default Project;
