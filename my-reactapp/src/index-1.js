//core features of redux : store,dispatch,actions,subscriptions
import { createStore } from "redux";
import produce from "immer";

//action constants
const increment = 'increment';
const decrement = 'decrement'

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

//action creator 
const incActionCreator = payload => ({
    type: increment,
    payload
})

store.dispatch(incActionCreator(4))
store.dispatch(incActionCreator(4))
store.dispatch(incActionCreator(4))
store.dispatch({ type: decrement, payload: 3 })