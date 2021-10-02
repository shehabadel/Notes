import { useCallback, useState, useEffect, memo } from "react";

//useCallback is implemented internally
//with useMemo
//While both useMemo and useCallback remember something between renders 
//until the dependancies change, the difference is just what they remember. 
//useMemo will remember the returned value from your function. 
//useCallback will remember your actual function.

//memo checks the properties, and if they
//were the same as last time, they won't be
//rerendered, but if they changed they are going
//to rerender normallyy
const ExpensiveComputationComponent = memo(({ compute, count }) => {
    return (
        <div>
            <h1>computed: {compute(count)}</h1>
            <h4>last re-render {new Date().toLocaleTimeString()}</h4>
        </div>
    )
})
const CallbackComponent = () => {
    const [time, setTime] = useState(new Date());
    const [count, setCount] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 1000);
        return () => clearTimeout(timer);
    });

    const fibonacci = (n) => {
        if (n <= 1) {
            return 1;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    return (
        <div>
            <h1>useCallback Example {time.toLocaleTimeString()}</h1>
            <button onClick={() => setCount(count + 1)}>
                current count: {count}
            </button>
            <ExpensiveComputationComponent
                compute={useCallback(fibonacci, [])}
                count={count}
            >

            </ExpensiveComputationComponent>
        </div>
    )
}
export default CallbackComponent;