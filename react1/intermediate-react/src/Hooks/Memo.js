import { useMemo, useState } from "react";

function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
}
//Use memo only used for optimazation or things that requires massive computation
//it does not recompute the element that we apply useMemo on since we do not want 
//to recompute massive functions on slight changes
//for example when pressing on h1 it changes to red or green
//without useMemo it'll take alot of time since we will have to render again and recompute
//the fibonacci series again.
const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const fib = useMemo(() => fibonacci(num), [num]);
    const [isGreen, setGreen] = useState(false)
    return (
        <div>
            <h1 onClick={() => setGreen(!isGreen)} style={{ color: isGreen ? "green" : "red" }}>Use Memo Example</h1>
            <h2>Fibonacci of {num} is {fib} </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
        </div>
    )

}

export default MemoComponent;