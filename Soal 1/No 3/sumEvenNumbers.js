function sumEvenNumbers(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === 'object') {
      sum += sumEvenNumbers(obj[key]);
    }
  }

  return sum;
}

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
console.log(sumEvenNumbers(input1));

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' },
};
console.log(sumEvenNumbers(input2));

module.exports = sumEvenNumbers;
