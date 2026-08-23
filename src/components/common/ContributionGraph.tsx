import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ContributionDay, Contributions } from "@/pages/home/server";

interface ContributionGraphProps {
  contributions: Contributions | null;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const COLUMNS = (count: number) => `repeat(${count}, minmax(0, 1fr))`;

const LEVEL_CLASS = [
  "bg-muted",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/70",
  "bg-primary",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
}

function formatCell(count: number, date: string) {
  const contributions = count === 1 ? "contribution" : "contributions";
  return `${count === 0 ? "No" : count} ${contributions} on ${formatDate(date)}`;
}

/** One label per month, skipping any that would crowd the previous one. */
function monthLabels(weeks: ContributionDay[][]) {
  const labels: { month: string; column: number }[] = [];

  weeks.forEach((week, index) => {
    const month = Number(week[0].date.split("-")[1]) - 1;
    const previous = labels.at(-1);
    if (previous?.month === MONTHS[month]) return;
    if (previous && index - previous.column < 3) return;
    labels.push({ month: MONTHS[month], column: index });
  });

  return labels;
}

const ContributionGraph = ({ contributions }: ContributionGraphProps) => {
  if (!contributions) {
    return (
      <p className="text-muted-foreground py-8 text-center text-sm">
        Contribution data unavailable
      </p>
    );
  }

  const { total, weeks } = contributions;
  const leadingBlanks = 7 - weeks[0].length;

  return (
    <div className="w-full">
      <p className="text-muted-foreground mb-4 text-xs">
        <span className="text-foreground font-medium tabular-nums">
          {total.toLocaleString("en-US")}
        </span>{" "}
        contributions in the last year
      </p>

      <div className="overflow-x-auto">
        <div className="flex min-w-[560px] gap-2">
          <div className="text-muted-foreground grid shrink-0 grid-rows-7 items-center gap-[3px] pt-[18px] text-[9px] leading-none">
            {DAY_LABELS.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>

          <div className="flex-1">
            <div
              className="text-muted-foreground grid h-[18px] gap-[3px] text-[10px] leading-none"
              style={{ gridTemplateColumns: COLUMNS(weeks.length) }}
            >
              {monthLabels(weeks).map(({ month, column }) => (
                <span key={month} style={{ gridColumnStart: column + 1 }}>
                  {month}
                </span>
              ))}
            </div>

            <TooltipProvider>
              <div
                className="grid grid-flow-col grid-rows-7 gap-[3px]"
                style={{ gridTemplateColumns: COLUMNS(weeks.length) }}
              >
                {Array.from({ length: leadingBlanks }, (_, index) => (
                  <span key={`blank-${index}`} className="aspect-square" />
                ))}

                {weeks.flat().map((day) => {
                  const label = formatCell(day.count, day.date);
                  return (
                    <Tooltip key={day.date}>
                      <TooltipTrigger asChild>
                        <span
                          aria-label={label}
                          className={`aspect-square rounded-[2px] ${LEVEL_CLASS[day.level]}`}
                        />
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        sideOffset={4}
                        className="px-2 py-1 text-[11px]"
                      >
                        {label}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="text-muted-foreground mt-4 flex items-center justify-end gap-1.5 text-[10px]">
        <span>Less</span>
        {LEVEL_CLASS.map((className) => (
          <span
            key={className}
            className={`h-2.5 w-2.5 rounded-[2px] ${className}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;
