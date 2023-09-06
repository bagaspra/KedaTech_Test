const customSort = require('./sort');

describe('customSort', () => {
  it('should sort an array in descending order', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];

    const result = customSort(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const input = [];
    const expectedOutput = [];

    const result = customSort(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle an array with a single element', () => {
    const input = [42];
    const expectedOutput = [42];

    const result = customSort(input);

    expect(result).toEqual(expectedOutput);
  });
});
