//core features of redux : store,dispatch,actions,subscriptions
import { createStore, combineReducers } from "redux";
import produce from "immer";

//action constants
const increment = 'increment';
const decrement = 'decrement'

const incrementReducer = (initalState = { value: 10 }, action) => {
    switch (action.type) {
        case increment:
            return produce(initalState, draft => {
                draft.value += action.payload
            })
        default:
            return initalState;
    }
}

const decrementReducer = (initalState = { value: 10 }, action) => {
    switch (action.type) {
        case increment:
        case decrement:
            return produce(initalState, draft => {
                draft.value -= action.payload
            })
        default:
            return initalState;
    }
}

const reducers = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})

const store = createStore(reducers)

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
// store.dispatch(incActionCreator(4))
// store.dispatch(incActionCreator(4))
store.dispatch({ type: decrement, payload: 2 })
store.dispatch({ type: decrement, payload: 2 })