import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import Log from '@dazn/lambda-powertools-logger';
import scrapeLinkedinProfile from './utils/scrapeLinkedinProfile';
import getCookie from './utils/getCookie';

export const profileExtraction: APIGatewayProxyHandler = async (event): Promise <APIGatewayProxyResult> => {
  const requestBody = JSON.parse(event?.body);
  const { url } = requestBody || {};

  if (!url) {
    return {
      statusCode: 200,
      body: '',
    };
  }

  let linkedinProfile;
  try {
    const { cookieFile } = await getCookie();
    const scrapedProfile = await scrapeLinkedinProfile(url, cookieFile);
    linkedinProfile = scrapedProfile;
  } catch (error) {
    Log.error(error);
    throw new Error(error);
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(linkedinProfile),
  };
};
