import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "./context/AppContext";
import Roles from "./filters/Roles";
import Attributes from "./filters/Attributes";
const Filter = ({ Epic7Api }) => {
    const { setShowHero, showHero } = useAppContext();
    const [activeFilter, setActiveFilter] = useState([]);

    // =================================================================================================================================================
    const filtredHeros = useMemo(() => {
        const hasCategoryFilter = Object.values(activeFilter).includes(true);
        const matchesRol = (hero) => {
            if (hasCategoryFilter) {
                return hero.roles.some(
                    (category) => activeFilter[category] === true
                );
            } else return true;
        };
        const matchesAttribute = (hero) => {
            if (hasCategoryFilter) {
                return hero.attributes.some(
                    (category) => activeFilter[category] === true
                );
            } else return true;
        };
        const matchesStars = (hero) => {
            if (hasCategoryFilter) {
                return hero.stars.some(
                    (category) => activeFilter[category] === true
                );
            } else return true;
        };
        // si se filtra por roles y atributos, se filtra por roles y atributos, si no, se filtra por roles o atributos o estrellas
        const matchesFilter = (hero) => {
            if (
                (activeFilter.wind === true ||
                    activeFilter.fire === true ||
                    activeFilter.light === true ||
                    activeFilter.dark === true ||
                    activeFilter.ice === true) &&
                (activeFilter.warrior === true ||
                    activeFilter.knight === true ||
                    activeFilter.mage === true ||
                    activeFilter.assassin === true ||
                    activeFilter.ranger === true ||
                    activeFilter.manauser === true)
                //     &&
                // (activeFilter["5"] === false ||
                //     activeFilter["4"] === false ||
                //     activeFilter["3"] === false)
            ) {
                return (
                    matchesRol(hero) && matchesAttribute(hero)
                    // &&
                    // matchesStars(hero)
                );
            } else
                return (
                    matchesRol(hero) || matchesAttribute(hero)
                    // ||
                    // matchesStars(hero)
                );
        };
        return Epic7Api.filter(matchesFilter);
    }, [activeFilter, Epic7Api]);

    useEffect(() => {
        console.log(Epic7Api);
        setShowHero(filtredHeros);
    }, [Epic7Api, filtredHeros, setShowHero]);

    return (
        <>
            <div>
                <form className="filter">
                    <div>
                        <Roles
                            Epic7Api={Epic7Api}
                            setActiveFilter={setActiveFilter}
                        />
                    </div>
                    <div>
                        <Attributes
                            Epic7Api={Epic7Api}
                            setActiveFilter={setActiveFilter}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Filter;
