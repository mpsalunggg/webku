import { Card } from '@/components/ui/card';
import { OurProjects } from '@/constants/project';

const ProjectPage = () => {
  return (
    <section className="container flex flex-col items-center">
      <div className="my-8 text-center space-y-2 w-2/3">
        <h1 className="text-2xl font-semibold italic">Our Projects</h1>
        <p>
          Here are some of the results of my learning about programming,
          hopefully it can inspire others. You can check my{' '}
          <span className="underline italic text-blue-400 cursor-pointer">
            github
          </span>
        </p>
      </div>
      <div className="flex justify-center flex-col gap-6 mb-8">
        {OurProjects.map(item => (
          <Card
            key={item.id}
            className="relative w-full lg:flex lg:min-h-92 rounded-xl transition-all hover:shadow-lg cursor-pointer"
          >
            <div
              className="rounded-t-lg lg:min-w-96 w-full bg-white bg-cover bg-top shadow-lg lg:h-48 h-40 rounded-lg"
              style={{
                backgroundImage: `url('${item.image}')`
              }}
            />
            <div className="p-5 max-w-full space-y-2">
              <h1 className="text-xl font-semibold italic cursor-pointer">
                {item.title}
              </h1>
              <p className="line-clamp-3 cursor-pointer">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default ProjectPage;
