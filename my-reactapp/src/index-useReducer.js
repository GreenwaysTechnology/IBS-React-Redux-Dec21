import React, { useReducer } from 'react';
import ReactDOM from 'react-dom'
import produce from 'immer';

//biz logic : reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return produce(state, draft => {
                draft.count += 1
            })
        case 'decrement':
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}


const Counter = props => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
}

const App = props => {
    return <Counter />
}

ReactDOM.render(<Counter />, document.getElementById('root'));