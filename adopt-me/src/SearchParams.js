import React from "react";
import { useState } from "react";

const SearchParams = () => {
  //location inside input is not stored anywhere, so
  //we declare variable to hold its value

  //On any change happens inside react
  //react starts rerendering itself
  //so now it'll always have location Seattle,WA

  //so we have to bound the data typed to the variable
  //if we updated the variable we must update that to the DOM
  //we must wire that by ourself using useState
  //useState is the Hook
  //A hook allows us to keep track of state as indicated
  //by the state part of this
  //a Hook always start with use, like useState, useEffect, useDebugValue..etc

  //Inside useState there is a first or default value
  // now we can remove this line below
  // const location = "Seattle, WA";
  //setLocation will always keep track of location

  const [location, setLocation] = useState("Seattle, WA");

  //now moving to the JSX part we should
  //add onChange event handler
  return (
    //We use className instead of class as class is a reserved word
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            //one-line arrow function
            //we can define a function like
            /**
             * function updateLocation(e)
             * {
             *  setLocation(e.target.value);
             * }
             *  say onChange={updateLocation }
             */
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
          <button> Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
