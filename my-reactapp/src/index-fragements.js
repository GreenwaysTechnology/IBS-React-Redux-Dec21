import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'

//Grid Component : using tables
/**
 * <table>
 *   <thead> </thead>
 *   <tr><td></td></tr>
 *   <tr><td></td></tr>
 *   <tr><td></td></tr>
 * </table>
 */
const Grid = props => {
    return <table border="1">
        <thead >
            <Columns />

        </thead>
        <GridBody users={props.datasource} />
    </table>
}


const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map((user, index) => {
                    return <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}
const Columns = props => {
    // return <React.Fragment>
    //     <td>Name</td>
    //     <td>Location</td>
    // </React.Fragment>
    //     return <Fragment>
    //     <td>Name</td>
    //     <td>Location</td>
    // </Fragment>
    return <>
        <td>Name</td>
        <td>Location</td>
        <td>Email</td>

    </>
}

const Page = props => <div>
    {props.children}
</div>
const USERS = [
    { id: 1, name: 'subramaian', email: 'subu@gmail.com' },
    { id: 2, name: 'Dodge', email: 'dodge@gmail.com' }
]
const App = () => <div>
    <Page>
        <Grid datasource={USERS} />
    </Page>
</div>


ReactDOM.render(<App />, document.getElementById('root'))