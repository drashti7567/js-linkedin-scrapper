// @ts-nocheck
import Log from '@dazn/lambda-powertools-logger';
import scrapedin from 'scrapedin';

const scrapeLinkedinProfile = async (url: string, cookies: string) : Promise <void | string> => {
  const options = {
    cookies: JSON.parse(cookies),
    puppeteerArgs: {
      args: ['--no-sandbox', '--single-process'],
    },
  };
  try {
    const profileScraper = await scrapedin(options);
    const res = await profileScraper(decodeURIComponent(url));
    return res;
  } catch (error) {
    Log.error(error.message);
    throw new Error(error);
  }
};

export default scrapeLinkedinProfile;
