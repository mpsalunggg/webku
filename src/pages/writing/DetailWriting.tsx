import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "@tanstack/react-router";
import { mdxComponents } from "@/components/common/MDXComponents";
import { AnimatedLines } from "@/components/common/Background";
import TableOfContents, {
  type Heading,
} from "@/components/common/TableOfContents";
import { WritingFrontmatter } from "@/lib/mdx";
import Comments from "@/components/common/Comments";

interface DetailWritingProps {
  frontmatter: WritingFrontmatter;
  slug: string;
}

const DetailWriting = ({ frontmatter, slug }: DetailWritingProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const MDXComponent = lazy(() =>
    import(`../../content/writings/${slug}.mdx`).then((module) => ({
      default: module.default,
    })),
  );

  useEffect(() => {
    const extractHeadings = () => {
      const article = document.querySelector("article");
      if (!article) return;

      const elements = article.querySelectorAll("h1, h2");
      const extracted: Heading[] = Array.from(elements)
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          text: el.textContent?.replace(/\s*#\s*$/, "").trim() ?? "",
          level: parseInt(el.tagName.replace("H", ""), 10),
        }));
      setHeadings(extracted);
    };

    const timeout = setTimeout(extractHeadings, 300);
    return () => clearTimeout(timeout);
  }, [slug]);

  return (
    <main className="bg-background min-h-screen">
      <div className="pt-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-12">
          <div className="mb-8">
            <Link
              to="/writing"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Writing
            </Link>
          </div>

          <div className="flex gap-12">
            <article className="min-w-0 flex-1">
              <header className="mb-12">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-primary text-xs font-medium uppercase tracking-wide">
                    {frontmatter.category}
                  </span>
                  <span className="bg-muted-foreground h-[3px] w-[3px] shrink-0 rounded-full" />
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{frontmatter.readingTime}</span>
                  </div>
                  <span className="bg-muted-foreground h-[3px] w-[3px] shrink-0 rounded-full" />
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={frontmatter.date}>
                      {new Date(frontmatter.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                <h1 className="font-amatic mb-5 max-w-[95%] origin-top-left -rotate-1 text-6xl font-bold leading-[1.05] md:text-7xl">
                  {frontmatter.title}
                </h1>

                <p className="font-serif text-muted-foreground mb-7 max-w-xl text-lg leading-relaxed md:text-xl">
                  {frontmatter.description}
                </p>

                <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{frontmatter.views ?? 0} views</span>
                </div>
              </header>

              <AnimatedLines variant="section" className="-mt-8" />

              <div className="prose prose-slate dark:prose-invert max-w-none mb-96">
                <MDXProvider components={mdxComponents}>
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center py-12">
                        <div className="text-muted-foreground">Loading...</div>
                      </div>
                    }
                  >
                    <MDXComponent />
                  </Suspense>
                </MDXProvider>
                <div className="mt-16 border-t border-border pt-10">
                  <h2 className="text-xl font-semibold mb-6">Comments</h2>
                  <Comments />
                </div>
              </div>
            </article>

            <aside className="hidden w-64 shrink-0 xl:block">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailWriting;
