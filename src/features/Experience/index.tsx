'use client';
import { motion } from 'framer-motion';
import { Experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <section className="container flex flex-col items-center w-full">
      <div className="my-8 text-center space-y-2 w-full">
        <h1 className="text-2xl font-semibold italic">
          Experiences & Activities
        </h1>
        <p className="">
          Here are some of the interesting experiences and activities that I
          have participated in
        </p>
      </div>
      <div className="w-full flex justify-center flex-col gap-6 mb-8">
        {Experiences.reverse().map(item => {
          const { id, role, place, duration, description, company } = item;
          return (
            <motion.div
              key={id}
              className="box"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: id * 0.3,
                ease: [0, 0.71, 0.6, 1.01]
              }}
            >
              <div>
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="scroll-m-20 lg:text-xl text-md font-semibold tracking-tight text-blue-400">
                      {role}
                    </h4>
                    <p className="font-semibold tracking-tight text-blue-400">
                      {duration}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="italic font-semibold">{company}</p>
                    <p className="italic font-semibold">{place}</p>
                  </div>
                </div>
                <ul className="mb-6 ml-6 list-disc [&>li]:mt-2">
                  {description.map(item => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default ExperiencePage;
