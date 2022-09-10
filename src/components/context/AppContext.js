import React, {
    useContext,
    createContext,
    useState,
    useMemo,
    useEffect,
} from "react";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
    const [epic7Api, setEpic7Api] = useState([]);

    //ComponentDidMouunt
    useEffect(() => {
        fetch("https://api.epicsevendb.com/hero")
            .then((response) => response.json())
            .then((res) => setEpic7Api(res.results));
    }, []);

    //
    const values = useMemo(
        () => ({
          epic7Api, // States que seran visibles en el contexto.
        }),
        [epic7Api]
    ); // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
    const context = useContext(AppContext);

    if (!context) {
        console.error("Error deploying App Context!!!");
    }

    return context;
}

export default useAppContext;
