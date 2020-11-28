import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Characters from "./components/Characters";
import Heading from "./components/Heading";
import CharacterDetails from "./components/CharacterDetails";
import Home from "./components/Home";
import Episodes from "./components/Episodes";

function App(props) {
  return (
    <div className="App">
      <Heading />
      <Switch>
        <Route exact path="/characters/:id">
          <CharacterDetails details={props.characters} />
        </Route>
        <Route path="/episodes" render={(props) => <Episodes />} />
        <Route path="/characters" render={(props) => <Characters />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};
export default connect(mapStateToProps, {})(App);
