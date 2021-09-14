import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.js";
import SearchParams from "./SearchParams.js";

//Plugins to install
//Eslint, Babel, Prettier, React
//npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-lugin-react
//npm install -D eslint-plugin-react-hooks

//Creating a react component which is the most basic building block in React
//Which we are going to render using ReactDOM

//JSX -> Check Pet.js
//Hooks -> Check SearchParams.js

const App = () => {
  return (
    <div id="root">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Cocktaiel"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Havanese"></Pet>
      <Pet name="Sudo" animal="Cat" breed="Terrier"></Pet>
      <SearchParams></SearchParams>
    </div>
  );
};

//ReactDOM going to render our component App (create an instance of it using createElement) which we defined above
//and put it inside root div
ReactDOM.render(<App></App>, document.getElementById("root"));
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
