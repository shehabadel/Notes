import Pet from "./Pet";

const Results = ({ pets }) => {
  var internalComponent;
  if (!pets.length) {
    internalComponent = <h2>No Pets found</h2>;
  } else {
    internalComponent = pets.map((pet) => (
      <Pet name={pet.name} animal={pet.animal} breed={pet.breed}></Pet>
    ));
  }
  return <div className="search">{internalComponent}</div>;
};

/*const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            id={pet.id}
          ></Pet>
        ))
      )}
    </div>
  );
};*/

export default Results;
