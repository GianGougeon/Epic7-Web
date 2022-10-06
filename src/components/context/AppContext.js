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
    const [epic7ApiCategories, setEpic7ApiCategories] = useState([]);
    const [loader, setLoader] = useState(true);
    const [showHero, setShowHero] = useState([]);
    const [filtro, setFiltro] = useState([]);

    //ComponentDidMouunt
    useEffect(() => {
        setLoader(true);
        fetch("https://api.epicsevendb.com/hero")
            .then((response) => response.json())
            .then((res) => setEpic7ApiCategories(res.results))
            .catch((err) => console.log(err))
            .finally(() => setLoader(false));
    }, []);

    // modificar epic7Api agregando el atributo "role" con un array de roles
    useEffect(() => {
        const newEpic7Api = epic7ApiCategories.map((hero) => {
            // categories es un array de difentes strings
            const categories = [hero.attribute, hero.role];
            // transform number to string
            const stars = hero.rarity.toString();
            // transforma el numero 5 a "cinco" y el numero 4 a "cuantro"
            return { ...hero, categories: categories, roles: [hero.role], attributes: [hero.attribute], stars: [stars] };
        });
        setEpic7Api(newEpic7Api);
    }, [epic7ApiCategories]);

    //
    const values = useMemo(
        () => ({
            epic7Api,
            loader,
            showHero,
            setShowHero,
            filtro,
            setFiltro,
        }), // States que seran visibles en el contexto.
        [epic7Api, loader, showHero, setShowHero, filtro, setFiltro]
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
