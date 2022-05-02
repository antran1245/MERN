import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard first_name="Jane" last_name="Doe" age={45} hairColor="Black"/>
      <PersonCard first_name="John" last_name="Smith" age={88} hairColor="Brown"/>
      <PersonCard first_name="Millard" last_name="Fillmore" age={50} hairColor="Brown"/>
      <PersonCard first_name="Maria" last_name="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
