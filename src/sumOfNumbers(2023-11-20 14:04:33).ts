
function sumOfNumbers() {
  let total = 0;
  function add(number: number) {
    total += number;
    return add;
  }
  add.valueOf = function() {
    return total;
  };
  return add;
}

export default sumOfNumbers;
