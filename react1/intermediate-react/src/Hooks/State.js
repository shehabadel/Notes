import { useState } from "react";

//useState is the most basic hook
//allows you to hold on a state
//true in useState is the default value
//so when it is first rendered it will be true

const StateComponent = () => {
    function increment(counter) {
        console.log("hey")
        return counter++;
    }
    var [counter, setCounter] = useState(0);
    const [isGreen, setIsGreen] = useState(true);
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
            <button onClick={() => setCounter(increment(counter))}>
                ➕
            </button>
        </div>
    );
}

export default StateComponent;