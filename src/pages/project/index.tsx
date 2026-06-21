import { AnimatedLines } from "@/components/common/Background";
import FilterProject from "./components/FilterProject";
import CardProject from "./components/CardProject";
import { useProjectsContext } from "./context/ProjectFilterContext";

const ProjectsPage = () => {
  const { filteredProjects } = useProjectsContext();

  return (
    <main className="bg-background min-h-screen">
      <div className="pt-20">
        <section className="relative px-6 py-12">
          <div className="absolute -top-12 left-1/2 w-full max-w-4xl -translate-x-1/2 transform">
            <AnimatedLines className="opacity-30" />
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <h1 className="font-amatic mb-3 text-6xl font-bold tracking-wide md:text-7xl">
                Projects
              </h1>
              <p className="text-muted-foreground text-lg">
                A collection of things I've built
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {filteredProjects.length ? (
                    filteredProjects.map((project, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <CardProject
                          key={index}
                          project={project}
                          isEven={isEven}
                        />
                      );
                    })
                  ) : (
                    <p className="text-muted-foreground col-span-2 text-center py-12">
                      No projects found matching your criteria.
                    </p>
                  )}
                </div>
              </div>

              <FilterProject />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
