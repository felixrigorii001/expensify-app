import { createStore } from 'redux';

// Action generators = functions that returns action objects

const add = ({a, b}, c) => {
    return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100 ));

const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
    //incrementBy: ( typeof payload.incrementBy === 'number' ? payload.incrementBy : 1 )
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count  } = {} ) => ( {
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducer
// 1. Reducers asre pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch( action.type ) {

        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy //state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore( countReducer );

const unsubscribe = store.subscribe(() => {
    console.log( store.getState() );
});

//console.log( store.getState() );

// increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5 
// });
store.dispatch( incrementCount({ incrementBy: 5 }) );

store.dispatch( incrementCount() );

//unsubscribe();

//console.log( store.getState() );

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 3
// });

store.dispatch(decrementCount( { decrementBy: 3} ));

//console.log( store.getState() );

store.dispatch(decrementCount());


//console.log( store.getState() );

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch( resetCount() );


// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch( setCount({ count: 101 }));


//console.log( store.getState() );