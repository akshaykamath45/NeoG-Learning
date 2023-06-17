function oddAndEvenSumReducer(acc, value) {
  if (value % 2 === 0) {
    return { ...acc, even: acc.even + value };
  }
  return { ...acc, odd: acc.odd + value };
}

const initialAccumulator = { odd: 0, even: 0 };

numList.reduce(oddAndEvenSumReducer, initialAccumulator);
