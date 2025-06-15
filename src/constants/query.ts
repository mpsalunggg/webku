import { gql } from '@apollo/client'

export const GET_USER_STATS = gql`
  query GetUserStats($username: String!) {
    user(login: $username) {
      name
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
`
