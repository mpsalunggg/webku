import { Card } from '@/components/ui/card';
import { OurProjects } from '@/constants/project';

const ProjectPage = () => {
  return (
    <section className="container">
      <div className="my-8 text-center space-y-2">
        <h1 className="text-2xl font-semibold italic">Our Projects</h1>
        <p>
          Here are some of the results of my learning about programming,
          hopefully it can inspire others. You can check my <span>github</span>
        </p>
      </div>
      <div className="flex justify-center flex-col gap-6 mb-8">
        {OurProjects.map(item => (
          <Card
            key={item.id}
            className="relative w-full flex min-h-92 rounded-xl transition-all hover:shadow-lg"
          >
            <div
              className="rounded-t-lg min-w-96 bg-white bg-cover bg-center shadow-lg h-52"
              style={{
                backgroundImage: `url('${item.image}')`
              }}
            />
            <div className="p-4 max-w-full space-y-2">
              <h1 className="text-xl font-semibold italic">{item.title}</h1>
              <p className="line-clamp-4">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default ProjectPage;
