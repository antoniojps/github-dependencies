import axios from 'axios';
import { GraphQLClient } from 'graphql-request';
import { PackageJson } from '@github-graphs/types';
import { subYears } from 'date-fns';
import { getSdk } from './';

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

export const getPackageJsonFile = async (
  repository: string,
  accessToken: string
): Promise<PackageJson> => {
  const { data: packageJsonFile } = await axios.get(
    `https://api.github.com/repos/${repository}/contents/package.json`,
    {
      headers: {
        authorization: `bearer ${accessToken}`,
        accept: 'application/vnd.github.v3.raw',
      },
      responseType: 'text',
    }
  );
  return packageJsonFile;
};
