import scrapeLinkedinProfile from '@src/utils/scrapeLinkedinProfile';

describe('utility method scrapeLinkedinProfile', () => {
  it('should helper exists', () => {
    expect.hasAssertions();
    expect(scrapeLinkedinProfile).toBeDefined();
  });
});
