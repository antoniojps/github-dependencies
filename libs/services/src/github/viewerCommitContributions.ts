import gql from 'graphql-tag';

export const GITHUB_VIEWER_COMMIT_CONTRIBUTIONS = gql`
  query ViewerCommitContributions($from: DateTime!, $to: DateTime!) {
    viewer {
      login
      contributionsCollection(from: $from, to: $to) {
        commitContributionsByRepository(maxRepositories: 100) {
          repository {
            nameWithOwner
          }
        }
      }
    }
  }
`;
