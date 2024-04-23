import { Card } from '@/components/ui/card';

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
      <div></div>
      <div className="flex justify-center flex-col gap-6">
        <Card className="relative w-full p-1 min-h-92 rounded-xl">
          <div
            className="rounded-t-lg w-96 bg-white bg-cover bg-center shadow-lg h-52"
            style={{
              backgroundImage: `url('${'https://upload.wikimedia.org/wikipedia/id/thumb/2/2d/Situs_Web.PNG/640px-Situs_Web.PNG'}')`
            }}
          />
        </Card>
        <Card className="relative w-full p-1 min-h-92 rounded-xl">
          <div
            className="rounded-t-lg w-96 bg-white bg-cover bg-center shadow-lg h-52"
            style={{
              backgroundImage: `url('${'https://upload.wikimedia.org/wikipedia/id/thumb/2/2d/Situs_Web.PNG/640px-Situs_Web.PNG'}')`
            }}
          />
        </Card>
        <Card className="relative w-full p-1 min-h-92 rounded-xl">
          <div
            className="rounded-t-lg w-96 bg-white bg-cover bg-center shadow-lg h-52"
            style={{
              backgroundImage: `url('${'https://upload.wikimedia.org/wikipedia/id/thumb/2/2d/Situs_Web.PNG/640px-Situs_Web.PNG'}')`
            }}
          />
        </Card>
      </div>
    </section>
  );
};
export default ProjectPage;
