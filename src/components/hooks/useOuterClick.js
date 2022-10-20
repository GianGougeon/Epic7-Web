import { useRef, useEffect } from "react";

export const useOuterClick = (callback) => {
    const innerRef = useRef();
    const callbackRef = useRef();

    //callback actual en la ref, antes de que el segundo useEffect lo utilice
    useEffect(() => {
        const timer = setTimeout(() => {
            callbackRef.current = callback;
        }, 200);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);

        // leer el callback más reciente y el nodo dom de innerRef de las referencias
        function handleClick(e) {
            if (
                innerRef.current &&
                callbackRef.current &&
                !innerRef.current.contains(e.target)
            ) {
                callbackRef.current(e);
            }
        }
    }, []);

    return innerRef;
};
