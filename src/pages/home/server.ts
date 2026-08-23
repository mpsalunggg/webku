import { createServerFn } from "@tanstack/react-start";

const GITHUB_USERNAME = "mpsalunggg";

const USER_STATS_QUERY = `
  query GetUserStats($username: String!) {
    user(login: $username) {
      name
      avatarUrl
      totalRepositories: repositories(ownerAffiliations: OWNER) {
        totalCount
      }
      totalFollowers: followers {
        totalCount
      }
      totalCommit: contributionsCollection {
        totalCommitContributions
      }
      totalPullRequest: contributionsCollection {
        totalPullRequestContributions
      }
      calendar: contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

/** GitHub buckets each day itself; its own palette is hardcoded green, so we keep the bucket and drop the color. */
const LEVELS: Record<string, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export interface GithubStats {
  name: string;
  avatarUrl: string;
  repositories: number;
  followers: number;
  commits: number;
  pullRequests: number;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  weeks: ContributionDay[][];
}

interface GithubStatsResult {
  githubStats: GithubStats | null;
  contributions: Contributions | null;
}

const TTL = 15 * 60 * 1000;
let cache: { at: number; value: GithubStatsResult } | null = null;

export const getGithubStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<GithubStatsResult> => {
    if (cache && Date.now() - cache.at < TTL) return cache.value;

    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
          query: USER_STATS_QUERY,
          variables: { username: GITHUB_USERNAME },
        }),
      });

      const { data, errors } = await response.json();
      if (!response.ok || errors?.length || !data?.user) {
        throw new Error(
          errors?.[0]?.message ?? `GitHub responded ${response.status}`,
        );
      }

      const user = data.user;
      const calendar = user.calendar.contributionCalendar;

      const value: GithubStatsResult = {
        githubStats: {
          name: user.name,
          avatarUrl: user.avatarUrl,
          repositories: user.totalRepositories.totalCount,
          followers: user.totalFollowers.totalCount,
          commits: user.totalCommit.totalCommitContributions,
          pullRequests: user.totalPullRequest.totalPullRequestContributions,
        },
        contributions: {
          total: calendar.totalContributions,
          weeks: calendar.weeks.map((week: { contributionDays: any[] }) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
              level: LEVELS[day.contributionLevel] ?? 0,
            })),
          ),
        },
      };

      cache = { at: Date.now(), value };
      return value;
    } catch (error) {
      console.error("Error loading GitHub stats:", error);
      return { githubStats: null, contributions: null };
    }
  },
);
