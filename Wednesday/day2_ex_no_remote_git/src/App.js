import './App.css';
import Ex1 from './Ex1';
import { GetJokes, DadJokes } from './Ex2';
import Ex3 from './ListDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ex1 initCount={parseInt(localStorage.getItem("count"))} amount={5} />
        <GetJokes />
        <DadJokes />
        <Ex3 />
      </header>
    </div>
  );
}

export default App;
