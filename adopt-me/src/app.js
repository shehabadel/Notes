import React, { StrictMode, useState } from "react";


//Plugins to install
//Eslint, Babel, Prettier, React
//npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-lugin-react
//npm install -D eslint-plugin-react-hooks

//Creating a react component which is the most basic building block in React
//Which we are going to render using ReactDOM

//JSX -> Check Pet.js
//Hooks -> Check SearchParams.js
//Router and Routes -> Details.js
import Details from './Details';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");


  return (
    //TODO Check Context
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));

//ReactDOM going to render our component App (create an instance of it using createElement) which we defined above
//and put it inside root div
//You cannot pass data from child to parent
//like from Pet to App
//There are several methodologies to do that, but mainly
//you cannot do that, only you can from parent to child

/**
 * npm it is package manager for Node
 * it allows to bring in code from the npm registry
 * which is a bunch of open source modules that can be
 * reused in your project
 *
 * in order to start a project
 * run
 *      npm init
 * at the root of your project
 *
 */
