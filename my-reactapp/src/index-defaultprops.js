
import React from 'react';
import ReactDOM from 'react-dom'

//component
const Profile = props => {
    return <div>
        <h2>Name : {props.name} </h2>
        <h2>Star: {props.star}</h2>
        <h2>Status :{props.status ? "Active" : "InActive"}</h2>
        <address>City {props.address.city}</address>
        <h2>Friends</h2>
        <ul>
            {
                props.friends.map((friend,index) => {
                    return <li key={index}>{friend}</li>
                })
            }
        </ul>
    </div>
}
//default Props
Profile.defaultProps = {
    name: 'name',
    star: 0,
    status: false,
    address: {
        city: 'city'
    },
    friends: ['friend-0']

}


const App = () => {
    const name = "Subramanian";
    const star = 4.5
    const status = true;
    //object
    const address = {
        city: 'Coimbatore'
    }
    //
    const friends = ["Dodge", "Luke", "Nikson", "Milles"]
    return <div>
        <Profile name={name} star={star} friends={friends} status={status} address={address} />
        <Profile  />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))