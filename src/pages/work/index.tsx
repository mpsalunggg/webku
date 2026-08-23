import { AnimatedLines } from "@/components/common/Background";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { workExperiences, activities } from "@/constants/work";

const WorkPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <div className="pt-20">
        <section className="relative py-12">
          <div className="absolute -top-12 left-1/2 w-full max-w-4xl -translate-x-1/2 transform">
            <AnimatedLines className="opacity-30" />
          </div>

          <div className="page-container">
            <div className="mb-16">
              <h1 className="font-amatic mb-3 text-6xl font-bold tracking-wide md:text-7xl">
                Work & Activity
              </h1>
              <p className="text-muted-foreground text-lg">
                Professional journey and contributions
              </p>
            </div>

            <div className="space-y-16">
              <ExperienceTimeline items={workExperiences} heading="Work Experience" />
              <ExperienceTimeline items={activities} heading="Activities" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkPage;
