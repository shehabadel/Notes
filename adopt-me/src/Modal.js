import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
    const elRef = useRef(null);
    //elRef of Ref is a container for state
    //that you want to survive past render cycles
    //for example, we have this elRef current equals
    //to document.createElement('div')
    //we only want one div, we we dont want to create
    //a new div on every rerender. we want to exactly
    //have one div all the time until the modal is disposed
    //
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }
    //whenever you get created, insert it to the dom,
    //and whenever you are done, remove me from the dom
    //this prevents memory leaks, otherwise we'd be leaking
    //divs every single time 
    useEffect(() => {
        modalRoot.appendChild(elRef.current);

        //clean up after we are done
        return () => modalRoot.removeChild(elRef.current);

        //we only want it to happen once so we used an empty array
    }, []);

    //TODO Check createPortal?
    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;