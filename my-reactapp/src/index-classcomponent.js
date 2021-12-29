import React from 'react';
import ReactDOM from 'react-dom';

//component creationg:using es 6 classes
class Heading extends React.Component {
    render() {
        return <h1>Hello React!!!</h1>
    }
}

ReactDOM.render(<Heading></Heading>, document.getElementById('root'))




