import { createContext, useContext, useState } from "react";
const users = [
    {
        firstName: 'Bob',
        lastName: 'Bobberson',
        age: 21,
        suffix: 1,
        email: 'shehabirlx@gmail.com'
    },
    {
        firstName: 'Ahmed',
        lastName: 'Ahmedderson',
        age: 67,
        suffix: 2,
        email: 'ahmedderson@gmail.com'
    }
];

//created a normal userContext
//the parameter inside createContext
//is the default value for the context
const UserContext = createContext([
    users[0],
    (obj) => obj
]);
const ContextComponent = () => {

    const userState = useState({
        firstName: "7amada",
        lastName: "7amaderson",
        age: 76,
        suffix: 1,
        email: "7amadaerson@gmail.com"
    });

    return (
        //provided userState to user context instead of
        //user[0]
        <UserContext.Provider value={userState}>
            <h1>First level</h1>
            <LevelTwo />
        </UserContext.Provider>
    );
};

const LevelTwo = () => {
    return (
        <div>
            <h2>Level Two</h2>
            <LevelThree />
        </div>
    );
};

const LevelThree = () => {
    return (
        <div>
            <h3>Level Three</h3>
            <LevelFour />
        </div>
    )
}

const LevelFour = () => {
    return (
        <div>
            <h4>Level Four</h4>
            <LevelFive />
        </div>
    )
}

const LevelFive = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <h5>{`${user.firstName} ${user.lastName} has ${user.age} years old`}</h5>
            <h5>{`${user.suffix}`}</h5>
            <button onClick={() => {
                user.suffix++;
                //The Object.assign() method only copies enumerable and own properties
                //from a source object to a target object. It uses [[Get]] on the source
                //and [[Set]] on the target, so it will invoke getters and setters.
                //Therefore it assigns properties, versus copying or defining new properties.
                //This may make it unsuitable for merging new properties into a prototype
                //if the merge sources contain getters.

                setUser(Object.assign({ suffix: user.suffix }, user));
            }}> Increment</button>
        </div>
    )
}
export default ContextComponent;