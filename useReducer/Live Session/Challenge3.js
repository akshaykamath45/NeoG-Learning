const numList = [
  { type: 'odd', payload: 1 },
  { type: 'odd', payload: 3 },
  { type: 'odd', payload: 55 },
  { type: 'even', payload: 22 },
  { type: 'even', payload: 44},
]

function reducer(state,action){
    switch(action.type){
        case "even":{
            return{...state,even:state.even+action.payload};
        }
        case "odd":{
            return{...state,odd:state.odd+action.payload};
        }
        default:
            return acc;
        
    }
}

const state={odd:0,even:0}

console.log(numList.reduce(reducer,state))



// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: count + 1 }

//     case 'DECREMENT':
//       return { count: count - 1 }
//   }
// }

// Dry run  // + - // Define state, action pair             // state
// 1: +  state: { count: 0 }, action: { type: 'INCREMENT' } // { count: 1 }
// 2: +  state: { count: 1 }, action: { type: 'INCREMENT' } // { count: 2 }
// 3: -  state: { count: 2 }, action: { type: 'DECREMENT' } // { count: 1 }
// 4: +  state: { count: 1 }, action: { type: 'INCREMENT' } // { count: 2 }
// 5: +  state: { count: 2 }, action: { type: 'INCREMENT' } // { count: 3 }
