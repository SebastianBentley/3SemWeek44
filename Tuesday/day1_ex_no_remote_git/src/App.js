import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import  {person, males, females } from "./file2";
import MultiWelcome from "./file3";


function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <Ex1/>
      <h2>Ex 2</h2>
      <Ex2 person={person}/>
      <h2>Ex 3</h2>
      <MultiWelcome/>

    </div>
  );
}

function Ex1() {
  return (<div>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    <p>{upper("please uppercase me")}</p>
  </div>)
}

function Ex2(props) {
  const { firstName, email } = props.person;
  const people1 = [...males, ...females]
  const people2 = [...males, "Kurt", "Janne", ...females, "Tina"]
  const personV2 = {...props.person, friends: people1, phone: 123456}
  console.log(people1)
  console.log(people2)
  console.log(personV2)

  return <p>{firstName} {email}</p>

}


export default App;
