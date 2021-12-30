import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import produce from "immer";

class Review extends Component {
    //data: is encapsulated inside object, pointed by state variable
    state = {
        like: 0, // inital state 
        dislike: 10
    }
    //event listener : event is just variable points to Synthentic Event Object 
    onIncrement = event => {
        //pure function to update the state.
        this.setState((prevState) => {
            //return immutable state
            // return {
            //    like: prevState.like + 1
            // }
            // return Object.assign({}, prevState, { like: prevState.like + 1 })

            //return { ...prevState, like: prevState.like + 1 }
            return produce(prevState, draft => {
                draft.like += 1
            })
        })
    }
    render() {
        console.log(this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Likes  {this.state.like} Dislikes : {this.state.dislike}</h2>
            <button onClick={this.onIncrement} >Like</button>
            <button onClick={() => {
                this.setState((prevState) => ({
                    ...prevState, dislike: prevState.dislike + 1
                }))
            }} >Dislike</button>

        </div>
    }
}
const App = () => <div>
    <Review />
</div>
ReactDOM.render(<App />, document.getElementById('root'))