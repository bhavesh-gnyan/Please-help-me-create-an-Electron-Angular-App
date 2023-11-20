
function sumOfNumbers(initialValue: number = 0) {
  let currentSum = initialValue;
  function add(value: number) {
    currentSum += value;
    return add;
  }
  add.toString = function() {
    return currentSum;
  };
  return add;
}

// Usage example:
// const sum = sumOfNumbers(0)(1)(2)(3);
// console.log(sum.toString()); // Outputs: 6
