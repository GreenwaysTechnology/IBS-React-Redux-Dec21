import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

const Movie = props => {
    return <div>
        {/* <MovieDetails
            title={props.title}
            review={props.review}
            actor={props.actor}
            director={props.director}
        /> */}
        {/* Spread Operator which passes the entire property in one short */}
        <MovieDetails {...props} />
    </div>
}
const MovieDetails = props => <div>
    <h1>Title  {props.title}</h1>
    <Actor actor={props.actor} />
    <Director director={props.director} />
    <Review review={props.review} />
</div>

const Actor = props => {
    return <h2>Actor :  {props.actor.name}</h2>
}
const Director = props => {
    return <h2>Director :  {props.director.name}</h2>
}


const Review = props => {
    return <div>
        <User user={props.review.user} />
        <Language languages={props.review.languages} />
        <Comment comment={props.review.comment} />
    </div>
}
const User = props => {
    return <div>
        <h4>User {props.user.name}</h4>
        <Avatar url={props.user.imgUrl} />
    </div>
}
const Avatar = props => <img height="50" width="50" src={props.url} />


const Language = props => {
    return <div>
        <LanguageList languages={props.languages} />
    </div>
};
const LanguageList = props => <ul>
    {
        props.languages.map((lng, index) => {
            return <li key={index}>{lng}</li>
        })
    }
</ul>
const Comment = props => {
    return <div>
        <h3>{props.comment.text}</h3>
    </div>
}

const review = {
    user: {
        name: 'Subramanian',
        imgUrl: logo
    },
    languages: ['english', 'tamil', 'hindi'],
    comment: {
        text: 'It is really good!',
        date: new Date()
    }
}
const actor = {
    name: 'Dodge'
}
const director = {
    name: 'Miles'
}
const App = () => <div>
    <Movie title="The Hunter" actor={actor} director={director} review={review} />
</div>


ReactDOM.render(<App />, document.getElementById('root'))