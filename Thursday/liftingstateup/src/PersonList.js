import React from 'react';
import PropTypes from 'prop-types';

const PersonList = (props) => {

    const {persons, deletePerson, editPerson} = props;
  

    return (
        <div>
            <h4>Total persons: {persons.length}</h4>
            <table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((p, index) => (
                        <tr key={p.id}>
                            <td>{index}</td>
                            <td>{p.name}</td>
                            <td>
                                <a href="xx" onClick={(e) => { e.preventDefault(); editPerson(p) }}>edit</a> / 
                                <a href="xx" onClick={(e) => { e.preventDefault(); deletePerson(p) }}>delete</a>
                            </td>

                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    );
};
export default PersonList;

PersonList.propTypes = {
    persons: PropTypes.array
}
