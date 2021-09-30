import { useState } from "react";

//useState is the most basic hook
//allows you to hold on a state
//true in useState is the default value
//so when it is first rendered it will be true

//for setCounter problem, it is preferred to use useReducer hook
const StateComponent = ({ initialCounter }) => {
    var [counter, setCounter] = useState(initialCounter);
    const [isGreen, setIsGreen] = useState(true);

    //in order to pass a function inside useState
    //wrap the setState inside a function and pass it
    //inside as in line 34
    function increment() {
        return setCounter(counter + 1);
    }
    return (
        <div>
            <h2>Use State Examples</h2>
            <h3
                onClick={() => setIsGreen(!isGreen)}
                style={
                    { color: isGreen ? "limegreen" : "red" }
                }
            >
                useState Example
            </h3>
            <h3>
                {counter}
            </h3>
            <button onClick={() => setCounter(initialCounter)}>Reset</button>
            <button onClick={increment}>
                ➕
            </button>
        </div>
    );
}

export default StateComponent;