import AboutPage from "@/pages/about";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { getGithubStats } from "@/pages/home/server";

export const Route = createFileRoute("/about/")({
  head: () => {
    const { meta, links } = seo({
      title: "About - Muhamad Putra Satria",
      description:
        "Learn more about Muhamad Putra Satria, a passionate Frontend Developer specializing in React and modern web technologies. Discover my journey, skills, and what drives my passion for software engineering.",
      keywords:
        "About, Software Engineer, Frontend Developer, React Developer, Web Developer, Biography, Skills, Experience, Muhamad Putra Satria",
      type: "profile",
      path: "/about",
    });
    return { meta, links };
  },
  loader: async () => {
    const { contributions } = await getGithubStats();
    return { contributions };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { contributions } = Route.useLoaderData();
  return <AboutPage contributions={contributions} />;
}
