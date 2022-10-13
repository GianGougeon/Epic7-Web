/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useContext,
    createContext,
    useState,
    useMemo,
    useEffect,
} from "react";
import { elementAndRoles } from "../../data/dataProp";

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
        fetch(process.env.NEXT_PUBLIC_API_URL)
            .then((response) => response.json())
            .then((res) => setEpic7ApiCategories(res.results))
            .catch((err) => console.log(err))
    }, []);

    const modifyData = () => {
        // modifica la api agregando el atributo "role" con un array de roles
        const findElement = (el) => {
            const find = elementAndRoles.find((e) => e.name === el);
            return find;
        };
        const newEpic7Api = epic7ApiCategories.map((hero) => {
            const icon = hero.assets.icon;
            const image = hero.assets.image;
            const thumbnail = hero.assets.thumbnail;
            // add element icon
            const attribute = findElement(hero.attribute);
            const role = findElement(hero.role);
            const star =
                "https://static.wikia.nocookie.net/epic-seven/images/2/2e/Star.png";
            // =============================================================================================
            // categories es un array de difentes strings
            const categories = [hero.attribute, hero.role];
            // transform number to string
            const stars = hero.rarity.toString();
            return {
                ...hero,
                categories: categories,
                roles: [hero.role],
                attributes: [hero.attribute],
                stars: [stars],
                assets: {
                    image,
                    thumbnail,
                    icons: { icon, attribute, role, star },
                },
            };
        });
        return newEpic7Api;
    };

    // =================================================================================================================================================
    useEffect(() => {
        setEpic7Api(modifyData());
        // wait 2 seconds and hide the loader
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, [epic7ApiCategories]);
    const values = useMemo(
        () => ({
            epic7Api,
            loader,
            showHero,
            setShowHero,
            filtro,
            setFiltro,
        }), // States que seran visibles en el contexto.
        [epic7Api, loader, showHero, filtro]
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
