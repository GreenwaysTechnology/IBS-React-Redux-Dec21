import React from 'react';
import ReactDOM from 'react-dom'

const Greeter = props => {
    //override the name prop : Mutation
    // props.name = "foo";
    return <h1>
        Hello {props.name}!
    </h1>
}

const App = () => <div>
    <Greeter name="Subramanian" />
</div>


ReactDOM.render(<App />, document.getElementById('root'))
