import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["dog", "cat", "bat", "fish", "animalia"];
const BREEDS = ["Pug", "arnold", "dave", "shawky", "bondo2"];
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

  /**
   * Hooks use Tuples structure
   * const locationTuple = useState("Seattle, WA");
   * const locattion= locationTuple[0];
   * const setLocation= locationTuple[1]
   */

  /**
   *
   * ----------useEffects Hooks----------
   *
   */
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("xddd");
  const [breed, setBreed] = useState("Pug");

  //this gonna have an array of all pets coming back from the api
  const [pets, setPet] = useState([]);

  //now using useEffect hook and add all async code
  useEffect(() => {
    requestPets();
  });

  async function requestPets() {
    //they match our useState hooks variables, where they take the value inside them and make a get request
    var headers = {};
    const response = await fetch(
      `http://pets-v2.dev.apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const jsonResponse = await response.json();
  }
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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            value={breed}
          >
            <option></option>
            {BREEDS.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
