import { combineReducers } from "redux";
import { configureStore, createReducer,createAction } from '@reduxjs/toolkit'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
//redux
const initalState = {
    value: 100
}
//createAction behind the scene creates action creator automatically

const increment  = createAction('counter/increment')
const decrement  = createAction('counter/decrement')

//Builder Pattern
const counterReducer = createReducer(initalState, builder => {
    //logic
    builder.addCase(increment, (state, action) => {
        state.value++;
    }).addCase(decrement, (state, action) => {
        state.value--;
    }).addDefaultCase((state, action) => { })
})

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
        <button onClick={() =>onIncrement(increment()) }>+</button>
    </>
}

const App = props => <div>
    <Provider store={store}>
        <Counter />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))