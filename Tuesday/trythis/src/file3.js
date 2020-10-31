import React from 'react';
import { persons } from "./file2";
import PropTypes from 'prop-types';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person;
    return (
        <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{email}</li>
        </ul>
    )
}

WelcomePerson.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            <WelcomePerson person={persons[0]} />
            <WelcomePerson person={persons[1]} />
            <WelcomePerson person={persons[2]} />
            {persons.map(p => <WelcomePerson key={p.email} person={p}/>)}
        </div>
    );
}



export default MultiWelcome;
