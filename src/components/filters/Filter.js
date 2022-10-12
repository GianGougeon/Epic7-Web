/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Roles from "./Roles";
import Attributes from "./Attributes";
import Stars from "./Stars";
import FilterText from "./FilterText";

const filterTypes = {
    elementTypes: ["wind", "fire", "light", "dark", "ice"],
    soldierTypes: [
        "warrior",
        "mage",
        "ranger",
        "knight",
        "manuser",
        "assassin",
    ],
    starTypes: [3, 4, 5],
};
const Filter = ({ Epic7Api }) => {
    const { setShowHero } = useAppContext();
    const [activeFilter, setActiveFilter] = useState([]);
    const [searchHero, setSearchHero] = useState("");

    const filtredHeros = useMemo(() => {
        console.log(activeFilter);
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
            }
        };
        const matchesFilter = (hero) => {
            // los 3 filtros juntos
            if (
                (activeFilter.wind ||
                    activeFilter.fire ||
                    activeFilter.light ||
                    activeFilter.dark ||
                    activeFilter.ice) &&
                (activeFilter.warrior ||
                    activeFilter.knight ||
                    activeFilter.mage ||
                    activeFilter.assassin ||
                    activeFilter.ranger ||
                    activeFilter.manauser) &&
                (activeFilter[5] || activeFilter[4] || activeFilter[3])
            ) {
                return (
                    matchesRol(hero) &&
                    matchesAttribute(hero) &&
                    matchesStars(hero)
                );
            }
            // solo roles y estrellas
            else if (
                (activeFilter.wind ||
                    activeFilter.fire ||
                    activeFilter.light ||
                    activeFilter.dark ||
                    activeFilter.ice) &&
                (activeFilter[5] || activeFilter[4] || activeFilter[3])
            ) {
                return matchesAttribute(hero) && matchesStars(hero);
            }
            // solo atributos y estrellas
            else if (
                (activeFilter.warrior ||
                    activeFilter.knight ||
                    activeFilter.mage ||
                    activeFilter.assassin ||
                    activeFilter.ranger ||
                    activeFilter.manauser) &&
                (activeFilter[5] || activeFilter[4] || activeFilter[3])
            ) {
                return matchesRol(hero) && matchesStars(hero);
            }
            // solo roles y atributos
            else if (
                (activeFilter.warrior ||
                    activeFilter.knight ||
                    activeFilter.mage ||
                    activeFilter.assassin ||
                    activeFilter.ranger ||
                    activeFilter.manauser) &&
                (activeFilter.wind ||
                    activeFilter.fire ||
                    activeFilter.light ||
                    activeFilter.dark ||
                    activeFilter.ice)
            ) {
                return matchesRol(hero) && matchesAttribute(hero);
            }
            // solo estrellas y roles
            else if (matchesRol(hero) && matchesStars(hero)) {
                return matchesRol(hero) && matchesStars(hero);
            } else
                return (
                    matchesRol(hero) ||
                    matchesAttribute(hero) ||
                    matchesStars(hero)
                );
        };
        return Epic7Api.filter((hero) =>
            hero.name.toLowerCase().includes(searchHero.toLowerCase())
        ).filter(matchesFilter);
    }, [activeFilter, Epic7Api, searchHero]);

    const handleChange = (x) => (event) => {
        setActiveFilter((prev) => ({
            ...prev,
            [x]: event.target.checked,
        }));
    };

    useEffect(() => {
        setShowHero(filtredHeros);
    }, [Epic7Api, filtredHeros]);

    return (
        <>
            <div className="filter container">
                <div>
                    <div>
                        <div>
                            <Roles
                                Epic7Api={Epic7Api}
                                setActiveFilter={setActiveFilter}
                                handleChange={handleChange}
                            />
                        </div>
                        <div>
                            <Attributes
                                Epic7Api={Epic7Api}
                                setActiveFilter={setActiveFilter}
                                handleChange={handleChange}
                            />
                        </div>
                        <div>
                            <Stars
                                Epic7Api={Epic7Api}
                                setActiveFilter={setActiveFilter}
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <FilterText
                    setSearchHero={setSearchHero}
                    searchHero={searchHero}
                />
            </div>
        </>
    );
};

export default Filter;
