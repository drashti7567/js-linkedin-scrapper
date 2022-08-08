import notifySlack from '@src/utils/notifySlack';

describe('utility method notifySlack', () => {
  it('should exists', () => {
    expect.hasAssertions();
    expect(notifySlack).toBeDefined();
  });
});
