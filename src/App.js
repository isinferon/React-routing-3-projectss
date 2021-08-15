import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Translate />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Dropdown
              label="Select color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
