import { combineReducers } from "redux";
import { configureStore, createReducer, createAction, createSlice } from '@reduxjs/toolkit'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
//redux
const initalState = {
    value: 100
}

const counterSlice = createSlice({
    name: 'counter', //based on name , reducers, actions will be generated
    initialState: initalState,
    reducers: {
        //reducer name will be the below function name
        increment(state, action) {
            state.value++; // immutable immer logic
        }
    }
})
//actions and reducers
const { increment } = counterSlice.actions;
console.log('reducer', counterSlice.reducer)


const reducers = combineReducers({
    increment: counterSlice.reducer
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
        <button onClick={() => onIncrement(increment())}>+</button>
    </>
}

const App = props => <div>
    <Provider store={store}>
        <Counter />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))