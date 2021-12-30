import React from 'react';
import ReactDOM from 'react-dom'

const theme = {
    dark: "black"
}
//create context Object

// const ThemeContext = React.createContext('dark')
const { Provider, Consumer } = React.createContext('dark')

//provider who provides data to child component.

const App = () => <div>
    <Provider value={theme}>
        <Page />
    </Provider>
</div>
const Page = props => <>
    <Toolbar />
</>
const Toolbar = props => <div>
    <ThemedButton />
</div>

const ThemedButton = props => <div>
    <Consumer>
        {
            theme => {
                return <Button theme={theme.dark} />
            }
        }
    </Consumer>
</div>
const Button = props => <div>
    <button style={{ color: 'whitesmoke', backgroundColor: props.theme }}>Hello!</button>
</div>




ReactDOM.render(<App />, document.getElementById('root'))
