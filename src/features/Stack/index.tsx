'use client';
import { InterestIcon, StackIcon, UIIcon } from '@/constants/stack';
import CardStack from '@/components/display/CardStack';

const StackPage = () => {
  return (
    <section className="container flex flex-col md:gap-8">
      <CardStack title="Favorite Stack" data={StackIcon} />
      <CardStack title="UI Stack" data={UIIcon} />
      <CardStack title="Interest Stack" data={InterestIcon} />
    </section>
  );
};
export default StackPage;
