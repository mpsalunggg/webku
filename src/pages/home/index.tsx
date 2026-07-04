import { Fragment, useState } from "react";
import { AnimatedLines } from "@/components/common/Background";
import { GET_USER_STATS } from "@/constants/query";
import { useQuery } from "@apollo/client/react";
import { ArrowRight, Linkedin, LocateIcon, Mail } from "lucide-react";

interface GitHubStats {
  user: {
    name: string;
    avatarUrl: string;
    totalRepositories: { totalCount: number };
    totalFollowers: { totalCount: number };
    totalCommit: { totalCommitContributions: number };
    totalPullRequest: { totalPullRequestContributions: number };
  };
}

const Home = () => {
  const [copied, setCopied] = useState(false);
  const { data } = useQuery<GitHubStats>(GET_USER_STATS, {
    variables: { username: "mpsalunggg" },
  });

  function handleCopy() {
    navigator.clipboard?.writeText("putrasatria893@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Fragment>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        <AnimatedLines variant="hero" className="opacity-60" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-6xl">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <span className="inline-flex items-center gap-2 font-amatic text-2xl md:text-3xl tracking-[0.2em] text-muted-foreground">
                Hello, i&apos;m Putra
                <span className="animate-bounce inline-block">👋</span>
              </span>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.25s", animationFillMode: "both" }}
            >
              <h1 className="mb-4 mt-5 font-amatic text-7xl font-bold tracking-wide text-balance md:text-8xl lg:text-[6rem] lg:leading-[0.9] text-foreground">
                I&apos;m a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-primary via-primary/70 to-foreground bg-clip-text text-transparent">
                    Software Engineer
                  </span>
                  <span className="animate-highlight-sweep absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-linear-to-r from-primary via-primary/70 to-foreground md:h-1.5" />
                </span>
                <br />
              </h1>
            </div>

            <div
              className="animate-fade-in-up max-w-xl"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed tracking-tight">
                Passionate about exploring new technologies and sharing
                knowledge through creative solutions.
              </p>
            </div>
          </div>
        </div>

        <AnimatedLines variant="floating" className="opacity-40" />
      </section>
      <section
        id="contact"
        className="flex flex-col justify-center mx-auto max-w-6xl gap-3"
      >
        <div className="flex flex-col gap-3">
          <p className="font-amatic text-2xl tracking-[0.2em] text-muted-foreground">
            Get in touch
          </p>

          <h2 className="font-amatic text-5xl font-[1000] tracking-wide text-foreground md:text-6xl lg:text-7xl">
            Let&apos;s <span className="italic font-light">Connect</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed tracking-tight">
            Always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-sm transition-colors">
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <div className="flex items-center gap-3">
              <img
                src={data?.user.avatarUrl}
                alt="Profile"
                className="w-9 h-9 rounded-xl"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {data?.user.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  @mpsalunggg · GitHub
                </p>
              </div>
            </div>
            <a
              href={`https://github.com/mpsalunggg`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              View profile →
            </a>
          </div>

          <div className="grid grid-cols-4 border-t border-border">
            {[
              {
                label: "Repositories",
                value: data?.user.totalRepositories.totalCount,
              },
              {
                label: "Followers",
                value: data?.user.totalFollowers.totalCount,
              },
              {
                label: "Commits",
                value: data?.user.totalCommit.totalCommitContributions,
              },
              {
                label: "Pull Requests",
                value:
                  data?.user.totalPullRequest.totalPullRequestContributions,
              },
            ].map((s, i) => (
              <div
                key={s.label}
                className={[
                  "px-4 py-4 text-center hover:bg-muted/50 transition-colors",
                  i < 3 ? "border-r border-border" : "",
                ].join(" ")}
              >
                <p className="text-xl font-semibold text-foreground leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={handleCopy}
            className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4 text-left hover:border-primary/40 hover:shadow-sm hover:bg-accent/30 transition-colors cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground shrink-0">
              <Mail />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                Email
              </p>
              <p className="text-xs font-medium text-foreground break-all">
                putrasatria893@gmail.com
              </p>
              <p
                className={`text-[10px] mt-1.5 font-medium ${copied ? "text-emerald-500" : "text-muted-foreground/50"}`}
              >
                {copied ? "✓ Copied!" : "Click to copy"}
              </p>
            </div>
          </button>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4 no-underline hover:border-primary/40 hover:shadow-sm hover:bg-accent/30 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground shrink-0">
              <Linkedin />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                LinkedIn
              </p>
              <p className="text-xs font-medium text-foreground">
                Connect with me
              </p>
              <div className="flex items-center gap-1 mt-1.5">
                <p className="text-[10px] text-muted-foreground/50">
                  View profile
                </p>
                <span className="text-muted-foreground/50">
                  <ArrowRight />
                </span>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4 hover:border-primary/40 hover:shadow-sm hover:bg-accent/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground shrink-0">
              <LocateIcon />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                Location
              </p>
              <p className="text-xs font-medium text-foreground">
                South Tangerang, Indonesia
              </p>
              <p className="text-[10px] text-muted-foreground/50 mt-1.5">
                GMT +7
              </p>
            </div>
          </div>
        </div>
        <div className="border-border mt-16 border-t py-16">
          <div className="text-center mx-auto max-w-6xl">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Mps
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
