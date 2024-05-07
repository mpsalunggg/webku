import Main from '@/components/common/Main';
import Template from '@/components/common/Template';
import ExperiencePage from '@/features/Experience';
import { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <Main>
      <Template key="experience">
        <ExperiencePage />
      </Template>
    </Main>
  );
};
export default Experience;
