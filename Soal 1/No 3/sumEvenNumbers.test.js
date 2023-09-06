const sumEvenNumbers = require('./sumEvenNumbers');

describe('sumEvenNumbers', () => {
  it('should return the sum of all even numbers in a nested object', () => {
    const input1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: 'yup',
        },
      },
    };
    expect(sumEvenNumbers(input1)).toEqual(6);

    const input2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' },
    };
    expect(sumEvenNumbers(input2)).toEqual(12);
  });

  it('should return 0 if there are no even numbers in the object', () => {
    const input3 = {
      a: 1,
      b: { b: 3, bb: { b: 5, bb: { b: 7 } } },
      c: { c: { c: 1 }, cc: 'ball', ccc: 'odd' },
      d: 'not a number',
      e: { e: { e: 'string' }, ee: 'car' },
    };
    expect(sumEvenNumbers(input3)).toEqual(0);
  });

  it('should return 0 if the input is an empty object', () => {
    const input4 = {};
    expect(sumEvenNumbers(input4)).toEqual(0);
  });
});
