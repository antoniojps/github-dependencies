import { NextApiResponse } from 'next';
import { AxiosError } from 'axios';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export const sendError = (
  res: NextApiResponse,
  code: number | StatusCodes,
  error?: AxiosError & Error
) => {
  let statusCode = code;

  // use axios response status when axios error
  if (error?.isAxiosError) {
    if (error?.response) {
      statusCode = error.response.status;
    }
  }

  res.status(statusCode);
  res.json({
    status: statusCode,
    message:
      process.env.NODE_ENV === 'production'
        ? getReasonPhrase(statusCode)
        : error?.message || getReasonPhrase(statusCode),
  });
  res.end();
};
