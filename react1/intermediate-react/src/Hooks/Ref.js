import { useState, useRef } from "react";

//If you have a piece of state that
//you want it to survive past different rendering
//cycles. So we use that with Modals.
//So basically, it is a container that doesn't
//get modified from the react lifecycle 
//methods but it actually just kinds of lives
//outside of that.

//Every Ref has a current property
//if we have a handle on an object
//that it doesn't change, the object stays the same

/**
 * useRef returns a mutable ref object whose .current property is
 * initialized to the passed argument (initialValue). 
 * The returned object will persist for the full lifetime of the component.
 */
const RefComponent = () => {
    const [num, setNum] = useState(0);
    const refNum = useRef(0);

    function incrementAndDelay() {
        setNum(num + 1);
        refNum.current++;
        setTimeout(() => {
            alert(`state: ${num} and ref:${refNum.current}`);
        }, 1000);
    }
    return (
        <div>
            <h1>useRef Example</h1>
            <button onClick={incrementAndDelay}>Increment</button>
            <h4>state:{num}</h4>
            <h4>ref:{refNum.current}</h4>
        </div>
    )
}
export default RefComponent;