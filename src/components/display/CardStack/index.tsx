import { FC } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { CardStackProps } from '@/types';
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
          <motion.div
            key={item.id}
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: item.id * 0.1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Icon key={item.id} icon={item.icon} fontSize={'30'} />
                </TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default CardStack;
