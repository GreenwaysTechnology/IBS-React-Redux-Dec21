import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

// a is just variable, its value would be object
//a = {name:'subramanian'}
// function Greeter(a){
//     return <h3>{a.message} {a.name} </h3>
// }

// function Greeter(props){
//     return <h3>{props.message} {props.name} </h3>
// }
const Greeter = props => <h3>{props.message} {props.name} </h3>

const App = () => <div className="container">
    {/* {
         Greeter("Ram") 
      } */}
    {/*  name="Subramanian" - property=value */}
    <Greeter name="Subramanian" message="Hai" />
    <Greeter name="Subramanian" message="Hello" />
    <Greeter name="Subramanian" message="Greet" />

</div>

ReactDOM.render(<App />, document.getElementById('root'));

