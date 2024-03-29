function customSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const sortedArray = customSort(input);
console.log(sortedArray);

module.exports = customSort;
