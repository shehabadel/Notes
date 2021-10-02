import { useReducer } from "react";

//Reducer has a current state, and an action
//for each state. it takes a state and an action
//then return the state at the end

//inside useReducer, we hand it the reducer function
//and an initial state and get back the current state 
//and a dispatch function, you hand it an action item
//and then it calls reducer with the current state 
//and that action item, that's it.

//It is more readable but more complex than using
//useState, but we can use it more in unit test

//logic to make sure num is between 0 and 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 10;
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_R":
            return Object.assign({}, state, { r: limitRGB(state.r + step) });
        case "DECREMENT_R":
            return Object.assign({}, state, { r: limitRGB(state.r - step) });
        case "INCREMENT_G":
            return Object.assign({}, state, { g: limitRGB(state.r + step) });
        case "DECREMENT_G":
            return Object.assign({}, state, { g: limitRGB(state.r - step) });
        case "INCREMENT_B":
            return Object.assign({}, state, { b: limitRGB(state.r + step) });
        case "DECREMENT_B":
            return Object.assign({}, state, { b: limitRGB(state.r - step) });

        default:
            return state;
    }
};
const ReducerComponent = () => {

    const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

    return (
        <div>
            <h1 style={{ color: `RGB(${r},${g},${b})` }}>use Reducer example</h1>
            <h6>R :
                <span>
                    <button onClick={() => dispatch({ type: "INCREMENT_R" })}>➕</button>
                </span>
                <span>
                    <button onClick={() => dispatch({ type: "DECREMENT_R" })}>➖</button>
                </span></h6>
            <h6>G :
                <span>
                    <button onClick={() => dispatch({ type: "INCREMENT_G" })}>➕</button>
                </span>
                <span>
                    <button onClick={() => dispatch({ type: "DECREMENT_G" })}>➖</button>
                </span></h6>
            <h6>B : <span>
                <button onClick={() => dispatch({ type: "INCREMENT_B" })}>➕</button>
            </span>
                <span>
                    <button onClick={() => dispatch({ type: "DECREMENT_B" })}>➖</button>
                </span></h6>
        </div>
    )

};

export default ReducerComponent;