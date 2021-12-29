import React from 'react';
import ReactDOM from 'react-dom';



// const Heading = () => <h1>Hello React!! // error code

//error code
// const Heading = ()=><h1>IBS Digital</h1>
//                      <p>IBS is building next generation Travel Applications</p>

//root element ; div,span,nav,table......
const Heading = () => <div>
    <h1>IBS Digital</h1>
    <p>IBS is building next generation Travel Applications</p>
</div>


// ReactDOM.render(<Heading></Heading>, document.getElementById('root'))
//self closing : because no child elements
ReactDOM.render(<Heading />, document.getElementById('root'))





