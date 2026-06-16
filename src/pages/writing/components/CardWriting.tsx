import { ArrowUpRight, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WritingFrontmatter } from "@/lib/mdx";

interface CardWritingProps {
  writing: WritingFrontmatter;
  isLast?: boolean;
}

const CardWriting = ({ writing, isLast }: CardWritingProps) => {
  const date = new Date(writing.date);
  const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <Link
      to="/writing/$slug"
      params={{ slug: writing.slug }}
      className="group block"
    >
      <article
        className="border-border relative flex gap-6 border-b py-7"
        style={isLast ? { borderBottomWidth: 0 } : undefined}
      >
        <div className="flex w-14 shrink-0 flex-col items-center pt-0.5">
          <span className="text-muted-foreground text-[11px] font-medium tracking-wide">
            {month}
          </span>
          <span className="text-foreground text-[28px] font-medium leading-tight">
            {day}
          </span>
          {!isLast && (
            <div className="bg-border mt-2.5 min-h-6 w-px flex-1" />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-primary text-xs font-medium uppercase tracking-wide">
              {writing.category}
            </span>
            <span className="bg-muted-foreground h-[3px] w-[3px] shrink-0 rounded-full" />
            <span className="text-muted-foreground text-xs">
              {writing.readingTime}
            </span>
          </div>

          <h2 className="text-foreground text-[19px] font-medium leading-snug">
            {writing.title}
          </h2>

          <p className="text-muted-foreground line-clamp-2 max-w-xl text-sm leading-relaxed">
            {writing.description}
          </p>

          {writing.views !== undefined && (
            <div className="text-muted-foreground mt-1 flex items-center gap-1.5 text-xs">
              <Eye className="h-3.5 w-3.5" aria-hidden />
              <span>{writing.views.toLocaleString()} views</span>
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-start pt-0.5">
          <ArrowUpRight className="text-muted-foreground/60 group-hover:text-foreground h-[18px] w-[18px] transition-colors" />
        </div>
      </article>
    </Link>
  );
};

export default CardWriting;