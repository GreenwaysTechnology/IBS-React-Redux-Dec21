import { combineReducers } from "redux";
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import logger from 'redux-logger'

//redux
const initalState = {
    value: 100,
}

//api
// A mock function to mimic making an async request for data
function fetchCount(amount = 1) {
    //here we write async api calls
    return new Promise((resolve) =>
        setTimeout(() => resolve(amount), 500)
    );
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response
    }
);
const counterSlice = createSlice({
    name: 'counter', //based on name , reducers, actions will be generated
    initialState: initalState,
    reducers: {
        //reducer name will be the below function name
        increment(state, action) {
            state.value++; // immutable immer logic
        },
        extraReducers: (builder) => {
            builder
                .addCase(incrementAsync.pending, (state) => {
                    console.log('loading')
                    state.status = 'loading';

                })
                .addCase(incrementAsync.fulfilled, (state, action) => {
                    console.log('idle')
                    state.status = 'idle';
                    state.state += action.payload;
                });
        }
    }
})
//actions and reducers
const { increment } = counterSlice.actions;
console.log(counterSlice.actions)

const reducers = combineReducers({
    increment: counterSlice.reducer
})

//middleware integration

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
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
        <button onClick={() => onIncrement(incrementAsync(99))} >
            Add Async
        </button>
    </>
}

const App = props => <div>
    <Provider store={store}>
        <Counter />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))