/* eslint-disable jest/no-hooks */
import getFileFromS3 from '@src/utils/getFileFromS3';
import AWS from 'aws-sdk';

describe('utility method getFileFromS3', () => {
  beforeEach(() => {
    const s3GetObjectPromise = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue({
        Body: 'test document',
      }),
    });
    jest.spyOn(AWS, 'SSM').mockImplementation().mockImplementation(() => ({
      getObject: s3GetObjectPromise,
    }));
  });
  it('should helper exists', () => {
    expect.hasAssertions();
    expect(getFileFromS3).toBeDefined();
  });
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should return test document', async () => {
  //   expect.hasAssertions();
  //   expect.hasAssertions();
  //   const promiseFn = await getFileFromS3();
  //   expect(promiseFn).toBe('test document');
  // });
});
