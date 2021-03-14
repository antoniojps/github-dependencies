export type Token = Partial<{
  name: string | null;
  email: string | null;
  picture: string | null;
  sub: string | null;
  iat: number | null;
  exp: number | null;
  accessToken: string | null;
}>;
