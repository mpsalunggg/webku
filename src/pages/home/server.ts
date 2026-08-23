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
    }
  }
`;

export interface GithubStats {
  name: string;
  avatarUrl: string;
  repositories: number;
  followers: number;
  commits: number;
  pullRequests: number;
}

export const getGithubStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ githubStats: GithubStats | null }> => {
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
      return {
        githubStats: {
          name: user.name,
          avatarUrl: user.avatarUrl,
          repositories: user.totalRepositories.totalCount,
          followers: user.totalFollowers.totalCount,
          commits: user.totalCommit.totalCommitContributions,
          pullRequests: user.totalPullRequest.totalPullRequestContributions,
        },
      };
    } catch (error) {
      console.error("Error loading GitHub stats:", error);
      return { githubStats: null };
    }
  },
);
