function getCombination(array) {
  return array.reduce(
    (acc, v, i) => acc.concat(array.slice(i + 1).map((w) => [v, w])),
    []
  );
}

function solution(numbers) {
  const sums = new Set();

  const combination = getCombination(numbers);
  combination.forEach((element) => sums.add(element[0] + element[1]));

  const sortedSums = [...sums].sort((a, b) => a - b);
  return sortedSums;
}

module.exports = solution;
