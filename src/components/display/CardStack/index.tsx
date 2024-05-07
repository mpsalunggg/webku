import { FC } from 'react';
import { CardStackProps } from '@/types';
import { Icon } from '@iconify/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

const CardStack: FC<CardStackProps> = ({ title, data }) => {
  return (
    <div className="my-8 text-center space-y-4">
      <h1 className="text-3xl font-semibold italic">{title}</h1>
      <div className="flex gap-2 justify-center">
        {data.map(item => (
          <TooltipProvider key={item.id}>
            <Tooltip>
              <TooltipTrigger>
                <Icon key={item.id} icon={item.icon} fontSize={'30'} />
              </TooltipTrigger>
              <TooltipContent>{item.title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
export default CardStack;
