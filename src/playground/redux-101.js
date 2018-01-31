import {createStore} from 'redux';

// Action Generators
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});


const store = createStore((state = {count: 0}, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;
        case 'DECREMENT':
            return {
                 count: state.count - action.decrementBy
            }
            break;
        case 'RESET':
            return {
                    count: 0
                }
            break;
        case 'SET':
            return {
                    count: action.count
                }
            break;            
        default:
        return state;
            break;
    }    
});

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
 })


 // store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 5}));
store.dispatch(decrementCount());
store.dispatch(setCount({count: 101}));
