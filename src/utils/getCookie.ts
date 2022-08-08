// @ts-nocheck
import * as fs from 'fs';
import AWS from 'aws-sdk';
import Log from '@dazn/lambda-powertools-logger';

const S3 = new AWS.S3();

const getCookie = async () => {
  const isLocal = process.env.IS_LOCAL || false;
  const isOffline = process.env.IS_OFFLINE || false;

  if (!isLocal && !isOffline) {
    return await getFileFromS3();
  } else {
    const localCookiePath = process.env.localCookiePath;
    const cookieFile = fs.readFileSync(localCookiePath + process.env.cookieFile);
    return { cookieFile };
  }
}

const getFileFromS3 = async (): Promise<s3Files> => {
  const srcKey = process.env.cookieFile;
  const s3Params = {
    Bucket: process.env.s3CookieBucket,
    Key: srcKey,
  };
  let cookieFile;
  try {
    const data = await S3.getObject(s3Params).promise();
    cookieFile = data.Body.toString('utf-8');
  } catch (error) {
    throw new Error(error);
  }

  return { cookieFile, srcKey };
};

export default getCookie;