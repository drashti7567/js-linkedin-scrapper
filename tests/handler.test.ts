/* eslint-disable jest/prefer-expect-assertions */
import { promisify } from 'util';
import { profileExtraction } from '@src/handler';

const handler = promisify(profileExtraction);
describe('service process-profile', () => {
  it('should exists', () => {
    expect.hasAssertions();
    expect(handler).toBeDefined();
  });
});
