//Component creation : functions pattern
import React from 'react';
import ReactDOM from 'react-dom';

//component creationg:using functions

// function Heading() {
//     //should return jsx
//     return <h1>Hello React!!</h1>
// }
// const Heading = () => {
//     return <h1>Hello React!!</h1>
// }
const Heading = () => <h1>Hello React!!</h1>

//render the component : imperative way via function call
// ReactDOM.render(Heading(),document.getElementById('root'))
//render the component : Declarative way
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))




