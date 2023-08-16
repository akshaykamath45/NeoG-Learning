const numList1 = [1, 3, 55, 22, 44];
function oddAndEvenSumReducer1(acc, value) {
  if (value % 2 === 0) {
    return { ...acc, even: acc.even + value };
  } else {
    return { ...acc, odd: acc.odd + value };
  }
}

const numList2 = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 23 },
  { type: "even", payload: 44 },
];
function oddAndEvenSumReducer2(acc, value) {
  if (value.type == "even") {
    return { ...acc, even: acc.even + value.payload };
  } else {
    return { ...acc, odd: acc.odd + value.payload };
  }
}

// Dry run
// 1 ; acc: { odd: 0, even: 0 }, value: { type: 'odd', payload: 1 }
// 2 ; acc: { odd: 1, even: 0 }, value: { type: 'odd', payload: 3 }
// 3 ; acc: { odd: 4, even: 0 }, value: { type: 'odd', payload: 55 }
// 4 ; acc: { odd: 59, even: 0 }, value: { type: 'even', payload: 22 }
// 5 ; acc: { odd: 59, even: 22 }, value: { type: 'even', payload: 44 }
// 6 { odd: 59, even 66 }

function reducer(state, action) {
  if (action.type == "even") {
    return { ...state, even: state.even + action.payload };
  } else {
    return { ...state, odd: state.odd + action.payload };
  }
}

function switchCaseReducer(state, action) {
  switch (action.type) {
    case "odd":
      return { ...state, odd: state.odd + action.payload };
    case "even":
      return { ...state, even: state.even + action.payload };
  }
}

const initialAccumulator = { odd: 0, even: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: count + 1 };

    case "DECREMENT":
      return { count: count - 1 };
  }
}

// Dry run  // + - // Define state, action pair             // state
// 1: +  state: { count: 0 }, action: { type: 'INCREMENT' } // { count: 1 }
// 2: +  state: { count: 1 }, action: { type: 'INCREMENT' } // { count: 2 }
// 3: -  state: { count: 2 }, action: { type: 'DECREMENT' } // { count: 1 }
// 4: +  state: { count: 1 }, action: { type: 'INCREMENT' } // { count: 2 }
// 5: +  state: { count: 2 }, action: { type: 'INCREMENT' } // { count: 3 }

//replace acc by state
//replace value by action

const oddAndEvenSum1 = numList1.reduce(
  oddAndEvenSumReducer1,
  initialAccumulator
);
console.log(oddAndEvenSum1);

const oddAndEvenSum2 = numList2.reduce(switchCaseReducer, initialAccumulator);
console.log(oddAndEvenSum2);
