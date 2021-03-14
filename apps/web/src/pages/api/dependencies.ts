import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';
import { GraphQLClient } from 'graphql-request';
import {
  getRepositoriesFromLastYear,
  getPackageJsonFile,
} from '@github-graphs/services/github/requests';
import { parser } from '@github-graphs/parser-dependencies/npm';
import { sendError } from '../../libs/responses';

const secret = process.env.SECRET;

type Token = Partial<{
  name: string | null;
  email: string | null;
  picture: string | null;
  sub: string | null;
  iat: number | null;
  exp: number | null;
  accessToken: string | null;
}>;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const token: Token = await jwt.getToken({ req, secret });
  if (!session || !token?.accessToken) sendError(res, 401);
  try {
    const client = new GraphQLClient('https://api.github.com/graphql');
    const repositories = await getRepositoriesFromLastYear(client, token.accessToken);
    const getPackageJsonsPromises = repositories.map((repo) =>
      getPackageJsonFile(repo, token.accessToken)
    );
    const settledResults = await Promise.allSettled(getPackageJsonsPromises);
    const packageJsonFiles = settledResults.reduce((acc, result) => {
      if (result.status === 'fulfilled' && result.value) return [...acc, result.value];
      return acc;
    }, []);

    res.json({
      dependencies: parser(packageJsonFiles),
    });
  } catch (err) {
    sendError(res, 500, err);
  }
  res.end();
};
