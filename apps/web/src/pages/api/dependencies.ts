import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';
import { GraphQLClient } from 'graphql-request';
import { getRepositoriesFromLastYear } from '../../libs/requests';
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
    res.json({
      repositories,
    });
  } catch (err) {
    sendError(res, 500, err.message);
  }
  res.end();
};
