import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

const id = 1;
const name = "subramanian";
const status = true;
const address = {
    city: 'coimbatore'
}
const skills = ["React", "Microservices", "Devops"];

const Profile = () => <div>
    <h1>Profile Details</h1>
    <p>Id {id}</p>
    <p>Name {name}</p>
    <p>Status {status ? "Available" : "Not Available"}</p>
    <p>City {address.city}</p>
    <p>Skills</p>
    <ul>
        {
            skills.map((skill, index) => {
                return <li key={index}>{skill}</li>
            })
        }
    </ul>

</div>

const App = () => <div className="container">
    <Profile />
    <Profile />
    <Profile />
    <Profile />

</div>

ReactDOM.render(<App />, document.getElementById('root'));

