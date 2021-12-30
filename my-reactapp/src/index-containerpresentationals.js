import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import produce from 'immer';

//container components
class Counter extends Component {
    //state 
    state = {
        value: 0
    }
    //biz logic
    onIncrement = event => {
        this.setState(prevState => {
            return produce(prevState, draft => {
                draft.value += 1
            });
        })
    };
    //UI
    render() {
        return <>
            <CounterView {...this.state} onIncrement={this.onIncrement} />
        </>
    }
}
//Presentational component
const CounterView = props => {
    return <>
        <h1>State + Props</h1>
        <h2>Value {props.value}</h2>
        <button onClick={props.onIncrement}>+</button>
    </>
}

const App = props => <div>
    <Counter />
</div>;
ReactDOM.render(<App />, document.getElementById('root'))