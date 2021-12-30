import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends Component {

    state = {
        error: null,
        isLoaded: false,
        todos: []
    }

    render() {
        const { error, isLoaded, todos } = this.state;
        if (error) {
            return <div>Error : {error.message}</div>
        }
        else if (!isLoaded) {
            return <div>Loading....</div>
        } else {
            return <>
                <ul>
                    {todos.map((todo, index) => {
                        return <li key={index}>
                            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
                        </li>
                    })}
                </ul>
            </>
        }


    }
    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        
        fetch(url).then(async (response) => {
            const todos = await response.json();
            this.setState(prevState => {
                return {
                    error: prevState.error,
                    isLoaded: true,
                    todos: todos
                }
            })
        }, error => {
            this.setState(prevState => {
                return {
                    error: error,
                    isLoaded: true,
                    todos: prevState.todos
                }
            })
        })
    }


}

const App = props => <div>
    <TodoApp />
</div>
ReactDOM.render(<App />, document.getElementById('root'))