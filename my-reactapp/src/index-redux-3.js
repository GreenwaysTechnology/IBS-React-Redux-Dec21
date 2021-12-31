//core features of redux : store,dispatch,actions,subscriptions
import { createStore } from "redux";
import produce from "immer";

//action constants
const increment = 'increment';
const decrement ='decrement'

//reducer : It is pure function,should return always immutble data.
//reducer is function having two args - initial state, action
const counterReducer = (initalState = { value: 0 }, action) => {
    switch (action.type) {
        case increment:
            return produce(initalState, draft => {
                draft.value += action.payload
            })
        case decrement:
            return produce(initalState, draft => {
                draft.value -= action.payload
            })
        default:
            return initalState;
    }
}

const store = createStore(counterReducer)

//subscribe listener:
store.subscribe(() => {
    console.log(store.getState())
})

//request sending
//action 
let incrementAction = {
    type: increment,
    payload: 5
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)

store.dispatch({ type: decrement ,payload:3 })