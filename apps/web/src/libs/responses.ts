import { NextApiResponse } from 'next';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export const sendError = (res: NextApiResponse, code: number | StatusCodes, message?: string) => {
  res.status(code);
  res.json({
    status: code,
    message:
      process.env.NODE_ENV === 'production'
        ? getReasonPhrase(code)
        : message || getReasonPhrase(code),
  });
  res.end();
};
