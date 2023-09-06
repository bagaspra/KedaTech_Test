const maxSubarraySum = require('./maxSubarraySum');

describe('maxSubarraySum', () => {
  it('should return the maximum sum of a subarray with a given length', () => {
    const input1 = [100, 200, 300, 400];
    const num1 = 2;
    expect(maxSubarraySum(input1, num1)).toEqual(700);

    const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const num2 = 4;
    expect(maxSubarraySum(input2, num2)).toEqual(39);

    const input3 = [-3, 4, 0, -2, 6, -1];
    const num3 = 2;
    expect(maxSubarraySum(input3, num3)).toEqual(5);
  });

  it('should return null if the given length is greater than the array length', () => {
    const input4 = [1, 2, 3];
    const num4 = 4;
    expect(maxSubarraySum(input4, num4)).toBeNull();

    const input5 = [];
    const num5 = 1;
    expect(maxSubarraySum(input5, num5)).toBeNull();
  });
});
