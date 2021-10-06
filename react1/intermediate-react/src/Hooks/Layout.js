import { useState, useLayoutEffect, useRef } from "react";

//it mainly captures the components updates
//acts like componentDidUpdate() from class components

//ref acts like we are always refering to this area
//yasta by-act as a reference to the component bas

const LayoutCompoment = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const el = useRef();

    useLayoutEffect(() => {
        setHeight(el.current.clientHeight);
        setWidth(el.current.clientWidth);
    }, []);

    return (
        <div>
            <h1>Use Layout Effect</h1>
            <h2>textarea width: {width}px</h2>
            <h2>textarea height: {height}px</h2>
            <textarea style={{ maxWidth: "75%" }} onClick={() => { setWidth(0) }} ref={el}></textarea>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default LayoutCompoment;