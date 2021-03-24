import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import cacheData from 'memory-cache';
import jwt from 'next-auth/jwt';
import { GraphQLClient } from 'graphql-request';
import {
  getRepositoriesFromLastYear,
  getContents,
  fetchFile,
} from '@github-graphs/services/github/requests';
import { parser } from '@github-graphs/parser-dependencies';
import { sendError } from '../../libs/responses';
import { Token } from '@github-graphs/types';

const secret = process.env.SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const token: Token = await jwt.getToken({ req, secret });
  if (!session || !token?.accessToken) sendError(res, 401);
  try {
    const { accessToken } = token;

    // fetch from cache or proceed
    const cacheKey = `${accessToken}-dependencies`;
    const cachedDependencies = cacheData.get(cacheKey);
    if (cachedDependencies) return res.send(cachedDependencies);

    // fetch repositories user contributed in last year
    const client = new GraphQLClient('https://api.github.com/graphql');
    const repositories = await getRepositoriesFromLastYear(client, accessToken);
    if (repositories.length === 0) sendError(res, 404);

    // fetch repositories files (contents)
    const getContentsPromises = repositories.map((repo) => getContents(repo, accessToken));
    const settledContents = await Promise.allSettled(getContentsPromises);
    const reposContents = settledContents.reduce((acc, result) => {
      if (result.status === 'fulfilled' && result.value) return [...acc, result.value];
      return acc;
    }, []);

    // parse dependencies usage per package manager of all repos
    const parsed = await parser({
      reposContents,
      fetchFile: fetchFile(accessToken),
    });

    // cached for 1 hours to prevent github api rate limits
    cacheData.put(cacheKey, parsed, 1 * 1000 * 60 * 60);
    res.send(parsed);
  } catch (err) {
    sendError(res, 500, err);
  }
  res.end();
};
