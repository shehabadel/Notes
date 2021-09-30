import { useState, useEffect } from "react";

//useEffect is basically concerned with
//scheduling something to happen after
//the first render, and we can tell it
//how often that I want to rend or be called
//there after.
//We use it mainly regarding anything that happens
//outside the rerender life cycle
//like requesting from an api..etc
//anything that you want to schedule it to happen, that
//is not gonna be inside of arender cycle
const EffectComponent = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() =>
            setTime(new Date()), 1000);
        return () => clearTimeout(timer);
    }, [time]);
    return (
        <div>
            <h1>use Effect Example: {time.toLocaleTimeString()}</h1>
        </div>
    );
};
export default EffectComponent;