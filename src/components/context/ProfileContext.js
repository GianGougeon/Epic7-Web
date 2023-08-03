/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useState } from "react";

const profileContext = createContext();

export const useProfileContext = () => {
    const context = useContext(profileContext);
    if (!context) throw new Error("There is no fetchStorage provider");
    return context;
};

export function ProfileContextProvider({ children }) {
    // const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(false);
    const [currentSection, setCurrentSection] = useState("info");

    return (
        <profileContext.Provider
            value={{
                currentSection,
                setCurrentSection,
            }}
        >
            {children}
        </profileContext.Provider>
    );
}
