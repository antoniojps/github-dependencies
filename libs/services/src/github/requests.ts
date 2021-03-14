import axios from 'axios';
import { GraphQLClient } from 'graphql-request';
import { FetchFile, GithubContents } from '@github-graphs/types';
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

export const getContents = async (
  repository: string,
  accessToken: string
): Promise<GithubContents> => {
  const { data } = await axios.get(`https://api.github.com/repos/${repository}/contents`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  });
  return data;
};

export const fetchFile = (accessToken: string): FetchFile => {
  return async (url, packageManager) => {
    const { data } = await axios.get(url, {
      headers: {
        authorization: `bearer ${accessToken}`,
        accept: 'application/vnd.github.v3.raw',
      },
      responseType: 'text',
    });
    return {
      packageManager,
      file: data,
    };
  };
};
