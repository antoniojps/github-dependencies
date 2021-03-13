import type { GraphQLClient } from 'graphql-request';
import { subYears } from 'date-fns';
import { getSdk } from '@github-graphs/services/github';

export const getRepositoriesFromLastYear = async (client: GraphQLClient, accessToken: string) => {
  const github = getSdk(client);
  const now = new Date();
  const yearAgo = subYears(now, 1);

  const {
    viewer: {
      contributionsCollection: { commitContributionsByRepository },
    },
  } = await github.ViewerCommitContributions(
    {
      from: yearAgo.toISOString(),
      to: now.toISOString(),
    },
    { authorization: `bearer ${accessToken}` }
  );

  return commitContributionsByRepository.map((repo) => repo.repository.nameWithOwner);
};
