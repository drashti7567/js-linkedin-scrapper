import getRandomIntInRange from '@src/utils/getRandomIntInRange';

describe('utility method getRandomIntInRange', () => {
  it('should exists', () => {
    expect.hasAssertions();
    expect(getRandomIntInRange).toBeDefined();
  });
  it('should return 0 when both min and max is 0', () => {
    expect.hasAssertions();
    const result = getRandomIntInRange(0, 0);
    expect(result).toStrictEqual(0);
  });
  it('should return number within range of 0 to 5', () => {
    expect.hasAssertions();
    const result = getRandomIntInRange(0, 5);
    expect(result).toBeLessThanOrEqual(5);
  });

  it('should not return number outside range of 0 to 5', () => {
    expect.hasAssertions();
    const result = getRandomIntInRange(0, 5);
    expect(result).not.toBeGreaterThan(5);
  });
});
