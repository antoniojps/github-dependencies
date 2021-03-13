import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';

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

  if (session && token?.accessToken) {
    res.send([]);
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
