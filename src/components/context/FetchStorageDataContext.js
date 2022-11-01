/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext} from "react";

const fetchStorageDataContext = createContext();

export const usefetchStorageData = () => {
    const context = useContext(fetchStorageDataContext);
    if (!context) throw new Error("There is no fetchStorage provider");
    return context;
};

export function FetchStorageDataAuthProvider({ children }) {
    // recibe un array por parametro y lo guarda en el localStorage, con expiracion de 1 dia
    const saveDataToLocalStorage = (data) => {
        const now = new Date();
        const item = {
            value: data,
            expiration: now.getTime() + 1 * 24 * 60 * 60 * 1000,
        };
        localStorage.setItem("data", JSON.stringify(item));
    };
    // carga los datos del localStorage y los devuelve en un array, sino hay nada devuelve null
    const loadDataFromLocalStorage = async () => {
        const itemStr = localStorage.getItem("data");
        if (!itemStr) return null;
        const item = JSON.parse(itemStr);
        const now = new Date();
        if (now.getTime() > item.expiration) {
            localStorage.removeItem("data");
            return null;
        }
        return item.value;
        
    };
    // limpia el localStorage
    const clearLocalStorage = () => {
        localStorage.clear();
    };
    // detectar si el localStorage tiene datos, retorna true o false
    const isLocalStorageEmpty = () => {
        const itemStr = localStorage.getItem("data");
        if (!itemStr) return true;
        return false;
    };
    return (
        <fetchStorageDataContext.Provider
            value={{
                saveDataToLocalStorage,
                loadDataFromLocalStorage,
                clearLocalStorage,
                isLocalStorageEmpty,
            }}
        >
            {children}
        </fetchStorageDataContext.Provider>
    );
}
