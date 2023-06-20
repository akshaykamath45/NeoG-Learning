const numList = [
  { type: 'odd', payload: 1 },
  { type: 'odd', payload: 3 },
  { type: 'odd', payload: 55 },
  { type: 'even', payload: 22 },
  { type: 'even', payload: 44},
]


function oddAndEvenReducer(acc,value){
    if(value.type==="even"){
        return{...acc,even:acc.even+value.payload}
    }
    return{...acc,odd:acc.odd+value.payload}
}

const initialAccumulator={odd:0,even:0};

console.log(numList.reduce(oddAndEvenReducer,initialAccumulator));


function reducer(state, action) {
  if (action.type === 'even') {
    return { ...state, even: state.even + action.payload }
  }
  return { ...state, odd: state.odd + action.payload }
}



// Dry run
// 1 ; acc: { odd: 0, even: 0 }, value: { type: 'odd', payload: 1 }
// 2 ; acc: { odd: 1, even: 0 }, value: { type: 'odd', payload: 3 }
// 3 ; acc: { odd: 4, even: 0 }, value: { type: 'odd', payload: 55 }
// 4 ; acc: { odd: 59, even: 0 }, value: { type: 'even', payload: 22 }
// 5 ; acc: { odd: 59, even: 22 }, value: { type: 'even', payload: 44 }
// 6 { odd: 59, even 66 }
