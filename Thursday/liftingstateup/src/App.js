import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./PersonList"
import NewPerson from "./NewPerson"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const initialData = [
    { id: uuidv4(), name: "Peter" },
    { id: uuidv4(), name: "Ole" },
    { id: uuidv4(), name: "Jan" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(newPerson.name)

  const addPerson = person => {
    if (person.id === "") { // id=-1 Indicates a new object
      person.id = uuidv4();
      persons.push(person);
    } else {//if id != "", it's an existing person. Find it and add changes
      let personEdit = persons.find(p => p.id === person.id);
      personEdit.name = person.name;
      setNewPerson({ ...personEdit })
      return;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", name: "" })
  };

  console.log("IDIDIDIDI: " + newPerson.id)

  const deletePerson = person => {
    console.log(person.id)
    var index = persons.indexOf(person);
    if (index > -1) {
      persons.splice(index, 1);
    }
    setPersons([...persons]);
  }
  

  return (
    <div className="container outer">


      <div className="row">
        <div className="col-3 allPersons">
          <PersonList persons={persons} deletePerson={deletePerson} editPerson={addPerson} />
        </div>
        <div >
          <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
