import "./App.css";
import Characters from "./components/Characters";
import Heading from "./components/Heading";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div className="App">
      <Heading />
      <Characters />
      <CharacterDetails />
    </div>
  );
}

export default App;
