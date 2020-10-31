import React, { useState } from "react";

function MemberTable(props) {
    const members = props;
    const listMembers = members.map((m, index) =>
        <tr key={index}>
            <td>{m.name}</td>
            <td>{m.age}</td>
        </tr >
    )
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>{listMembers}</tbody>
        </table>
    );
}

function MemberDemo(props) {
    const { members } = props;
    return (
        <div>
            <h4>All Members</h4>
            {MemberTable(members)}
        </div>
    );
}

export default function Ex3() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 }];
    const [members] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}
