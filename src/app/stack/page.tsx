import { NextPage } from 'next';
import Main from '@/components/common/Main';
import StackPage from '@/features/Stack';
import Template from '@/components/common/Template';

const Stack: NextPage = () => {
  return (
    <Main className="justify-between">
      <StackPage />
    </Main>
  );
};
export default Stack;
