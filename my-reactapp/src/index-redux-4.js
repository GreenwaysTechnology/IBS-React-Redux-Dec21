//react with redux   : Redux,Binding,React
import { createStore,combineReducers } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'
import produce from "immer";

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
    increment:counterReducer
})

const store = createStore(reducers)
/////////////////////////////////////////////////////////////////////////////////////
//react - mapper code 
//extracting state from the redux and supply as prop to react: state as prop

function mapStateToProps(appState){
    console.log('appState',appState)
    //extractor
    //state.value or
    //incase multi reducer
    //state.reducer.value
    return {
      //key:value // reactprop:reduxstate
      value : appState.increment.value
    }
}



/////////////////////////////////////////////////////////////////////////////////////
//React : Higher Order Component from the Normal Component.
//Higher order component is the represention of fp called Higher order function.
//if you are oo developer you might aware the design pattern called "Decorator design pattern" :  decorates the object from existing object.
//Higher order component is decorated component : {Redux + React}
//connect is the function which helps to create HOC.

//Normal Component
const Counter = props => {
    console.log(props)

    const onIncrement = evt => {
        props.dispatch({ type: 'counter/increment' })
    }
    return <>
        <h1>Counter-React-Redux</h1>
        <h2>Value {props.value}</h2>
        <button onClick={onIncrement}>+</button>
    </>
}
//hoc 
const CounterHOC = connect(mapStateToProps)(Counter)


const App = props => <div>
    <Provider store={store}>
        <CounterHOC />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))









