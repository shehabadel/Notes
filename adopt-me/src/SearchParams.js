import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
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
   *useEffect allows you to say "do a render of this component first so the user can see something then as soon as the render is done,
    then do something (the something here being an effect.) In our case, we want the user to see our UI first then
    we want to make a request to the API so we can that initial list of pets.
   */
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breedList] = useBreedList(animal);

  //this gonna have an array of all pets coming back from the api
  const [pets, setPet] = useState([]);

  //now using useEffect hook and add all async code
  useEffect(() => {
    requestPets();
    //second parameter indicates how many times or how should I recall the effect
    //for example if we put [animal], then it will rerender whenever animal changes
    //empty array means it calls only once
  }, []);

  async function requestPets() {
    console.log("Here again");
    //they match our useState hooks variables, where they take the value inside them and make a get request
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    //holding the jsonResponse inside pets variable
    setPet(jsonResponse.pets);
  }
  //now moving to the JSX part we should
  //add onChange event handler
  return (
    //We use className instead of class as class is a reserved word
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
            {breedList.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </form>
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
//Trying wrapping the component in a function scope
function newFunction(pets) {
  return (
    <div>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        ></Pet>
      ))}
    </div>
  );
}
