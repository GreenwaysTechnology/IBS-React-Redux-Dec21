import React, { useState } from 'react';
import ReactDOM from 'react-dom'


//Function + state + setState.
const CounterApp = props => {
    //state:
    const [value, setValue] = useState(0)
    const onIncrement = evt => {
        setValue(prvValue => {
            return prvValue + 1
        })
    }
    return <>
        <h1>Counter App</h1>
        <h2>Value : {value}</h2>
        <button onClick={onIncrement}>+</button>
    </>
}

const App = props => <div>
    <CounterApp />
</div>
ReactDOM.render(<App />, document.getElementById('root'))