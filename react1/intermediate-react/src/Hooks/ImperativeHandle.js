/**
Usually when you use useRef you are given the instance value of the component the ref is attached to. 
This allows you to interact with the DOM element directly.

useImperativeHandle is very similar, but it lets you do two things:
It gives you control over the value that is returned. Instead of returning the instance element, you explicitly state 
what the return value will be. It allows you to replace native functions (such as blur, focus, etc) 
with functions of your own, thus allowing side-effects to the normal behavior, or a different behavior altogether. 
Though, you can call the function whatever you like. There could be many reasons you want might to do either of the above; 
you might not want to expose native properties to the parent or maybe you want to change the behavior of a native function. 
There could be many reasons. However, useImperativeHandle is rarely used.

useImperativeHandle customizes the instance value that is exposed to parent components when using ref
 */

import { useState, useRef, useImperativeHandle, forwardRef } from "react";

const ElaborateInput = forwardRef(
    ({ hasError, placeholder, value, update }, ref) => {
        const inputRef = useRef();
        useImperativeHandle(ref, () => {
            return {
                focus() {
                    inputRef.current.focus();
                }
            };
        });
        return (
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => update(e.target.value)}
                placeholder={placeholder}
                style={{
                    padding: "5px 15px",
                    borderWidth: "3px",
                    borderStyle: "solid",
                    borderColor: hasError ? "crimson" : "#999",
                    borderRadius: "5px",
                    margin: "0 10px",
                    textAlign: "center"
                }}
            />
        );
    }
);

const ImperativeHandleComponent = () => {
    const [city, setCity] = useState("Seattle");
    const [state, setState] = useState("WA");
    const [error, setError] = useState("");
    const cityEl = useRef();
    const stateEl = useRef();

    function validate() {
        // lol I found it on StackOverflow : https://stackoverflow.com/a/25677072
        if (
            !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(
                city
            )
        ) {
            setError("city");
            cityEl.current.focus();
            return;
        }

        if (!/^[A-Z]{2}$/.test(state)) {
            setError("state");
            stateEl.current.focus();
            return;
        }

        setError("");
        alert("valid form!");
    }

    return (
        <div>
            <h1>useImperativeHandle Example</h1>
            <ElaborateInput
                hasError={error === "city"}
                placeholder={"City"}
                value={city}
                update={setCity}
                ref={cityEl}
            />
            <ElaborateInput
                hasError={error === "state"}
                placeholder={"State"}
                value={state}
                update={setState}
                ref={stateEl}
            />
            <button onClick={validate}>Validate Form</button>
        </div>
    );
};

export default ImperativeHandleComponent;
