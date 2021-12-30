
import React from 'react';
import ReactDOM from 'react-dom'

const PremiumUser = props => <div>
    <h1>You are PremiumUser</h1>
</div>

const GuestUser = props => <div>
    <h1>You are Guest</h1>
</div>
const Page__ = props => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <PremiumUser />
    } else {
        return <GuestUser />
    }
}

const Page___ = props => {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <PremiumUser /> : <GuestUser />
}
const Page = ({ isLoggedIn }) => isLoggedIn ? <PremiumUser /> : <GuestUser />

Page.defaultProps = {
    isLoggedIn: false
}

const isLoggedIn = true
const App = () => <div>
    <Page isLoggedIn={isLoggedIn} />
</div>


ReactDOM.render(<App />, document.getElementById('root'))