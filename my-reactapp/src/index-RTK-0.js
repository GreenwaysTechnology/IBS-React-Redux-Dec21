import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'
import produce from "immer";
import { useSelector, useDispatch } from "react-redux";
//redux
const initalState = {
    value: 100
}
const counterReducer = (state = initalState, action) => {
    //logic
    switch (action.type) {
        case 'counter/increment':
            console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value += action.payload;
            });
        default:
            return state;
    }
}
const reducers = combineReducers({
    increment: counterReducer
})

// const store = createStore(reducers)
const store = configureStore({
    reducer: reducers
})

const Counter = props => {
    const value = useSelector(state => {
        return state.increment.value
    });
    const onIncrement = useDispatch();
    return <>
        <h1>Counter-React-Redux</h1>
        <h2>Value {value}</h2>
        <button onClick={() => onIncrement({ type: 'counter/increment' })}>+</button>
    </>
}

const App = props => <div>
    <Provider store={store}>
        <Counter />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))