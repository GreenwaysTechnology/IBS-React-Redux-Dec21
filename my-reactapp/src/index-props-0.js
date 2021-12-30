import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Profile__ = props => {
    return <div className="container">
        <h1>Id: {props.id}</h1>
        <h2>Name {props.firstName} {props.lastName}</h2>
        <h2>Status {props.status ? "Available" : "Not Available"}</h2>
        <h2>Contact {props.city} {props.contact.email}</h2>
        <p>Skills</p>
        <ul>
            {
                props.skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })
            }
        </ul>
    </div>
}
const Profile = props => {
    const { id, firstName, lastName, skills, status, city, contact: { email } } = props;
    return <div className="container">
        <h1>Id: {id}</h1>
        <h2>Name {firstName} {lastName}</h2>
        <h2>Status {status ? "Available" : "Not Available"}</h2>
        <h2>Contact {city} {email}</h2>
        <p>Skills</p>
        <ul>
            {
                skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })
            }
        </ul>
    </div>
}

const App = () => {

    const city = "Coimbatore"
    const status = true;
    const contact = {
        email: 'subramanian.md@gmail.com',
        mobile: 1234567890
    }
    const skills = ["React", "Microservices", "Devops"];


    return <div>
        <Profile
            id={1}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
            contact={contact}
            skills={skills}
        />
        <Profile
            id={2}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
            contact={contact}
            skills={skills}

        />
        <Profile
            id={3}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
            contact={contact}
            skills={skills}

        />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))