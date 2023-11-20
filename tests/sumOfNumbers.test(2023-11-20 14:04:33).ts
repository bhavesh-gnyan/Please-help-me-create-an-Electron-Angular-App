
import sumOfNumbers from '../src/sumOfNumbers';

describe('sumOfNumbers', () => {
  it('should sum numbers using closure and chaining', () => {
    const sum = sumOfNumbers();
    expect(+sum(1)(2)(3)).toBe(6);
    expect(+sum(5)(-1)(2)).toBe(6);
  });

  it('should handle no input as zero', () => {
    const sum = sumOfNumbers();
    expect(+sum).toBe(0);
  });
});
