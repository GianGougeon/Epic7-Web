/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useAppContext } from "./../../components/context/AppContext";

const test = () => {
    const { epic7Api } = useAppContext();
    const [activeFilterr, setActiveFilterrs] = React.useState([]);

    // Botones para filtrar por rol
    const roles = epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.role)) {
            acc.push(hero.role);
        }
        return acc;
    }, []);

   function handleChange(role) {
        setActiveFilterrs((prev) => ({
            ...prev,
            [role]: !activeFilterr[role],
        }));
    }

    return (
        <div>
            <h1>test</h1>
            {roles.map((role) => (
                <div key={role}>
                    <input type="button" 
                        onClick={handleChange(role)}
                     />
                    <label>{role}</label>
                </div>
            ))}
        </div>
    );
};

export default test;


