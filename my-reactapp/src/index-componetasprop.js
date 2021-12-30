import React from 'react';
import ReactDOM from 'react-dom'

const Page = props => <div>
        {props.children}
</div>

const Header = props => <h1>IBS</h1>

const App = () => <div>
    <Page>
        {/* Component as prop -  child */}
        <Header />
        <p>
            IBS is based on Airline solutions company
        </p>
    </Page>
</div>


ReactDOM.render(<App />, document.getElementById('root'))