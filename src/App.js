import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import BottomNavBar from "./Components/BottomNavBar";
import NavBar from "./Components/NavBar";
import Social from "./Components/Social";
import Shooter from "./Components/Shooter";
import CardsGame from "./Components/CardsGame";
import MultiOnline from "./Components/MultiOnline";

function App() {
  const user = null;
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Social} />
          <Route path="/CardsGame" component={CardsGame} />
          <Route patch="/Shooter" component={Shooter} />
          <Route path="/MultiOnline" component={MultiOnline} />
        </Switch>
        <BottomNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
