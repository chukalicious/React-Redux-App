import "./App.css";
import { Route, Switch } from "react-router-dom";
import Characters from "./components/Characters";
import Heading from "./components/Heading";
import CharacterDetails from "./components/CharacterDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Heading />
      <Switch>
        <Route path="/characters" render={() => <Characters />} />
        <Route path="/" component={Home} />
      </Switch>

      {/* <Switch> */}
      {/* <Route path="/characters/:id">
        <CharacterDetails />
      </Route> */}
      {/* <Route path="/characters/" render={(props) => <Characters />} /> */}
      {/* <Route path="/" component={App} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
