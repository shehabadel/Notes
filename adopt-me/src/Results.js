import Pet from "./Pet";

/*const Results = ({ pets }) => {
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
*/
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;