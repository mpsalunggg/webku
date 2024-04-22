'use client';
import { Icon } from '@iconify/react';
import { InterestIcon, StackIcon, UIIcon } from '@/constants/stack';

const StackPage = () => {
  return (
    <section className="container flex flex-col md:gap-8">
      <div className="my-8 text-center space-y-4">
        <h1 className="text-3xl font-semibold italic">Favorite Stack</h1>
        <div className="flex gap-2 justify-center">
          {StackIcon.map(item => (
            <Icon key={item.id} icon={item.icon} fontSize={'30'} />
          ))}
        </div>
      </div>
      <div className="my-8 text-center space-y-4">
        <h1 className="text-3xl font-semibold italic">UI Stack</h1>
        <div className="flex gap-2 justify-center">
          {UIIcon.map(item => (
            <Icon key={item.id} icon={item.icon} fontSize={'30'} />
          ))}
        </div>
      </div>
      <div className="my-8 text-center space-y-4">
        <h1 className="text-3xl font-semibold italic">
          Interest Learning Stack
        </h1>
        <div className="flex gap-2 justify-center">
          {InterestIcon.map(item => (
            <Icon key={item.id} icon={item.icon} fontSize={'30'} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default StackPage;
