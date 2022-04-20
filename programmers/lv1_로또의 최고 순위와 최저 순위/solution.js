function getIntersection(set1, set2) {
  return new Set([...set1].filter((element) => set2.has(element)));
}

function getRanking(intersectionSize) {
  if (intersectionSize === 0) {
    return 6;
  }

  return 7 - intersectionSize;
}

function solution(lottos, winNums) {
  const lottosWithoutZero = new Set(lottos.filter((number) => number));
  winNums = new Set(winNums);

  const numOfZeros = 6 - lottosWithoutZero.size;
  const intersection = getIntersection(lottosWithoutZero, winNums);

  const maxRanking = getRanking(intersection.size + numOfZeros);
  const minRanking = getRanking(intersection.size);

  const answer = [maxRanking, minRanking];
  return answer;
}

module.exports = solution;
