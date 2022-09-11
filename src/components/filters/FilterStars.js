/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { findElement } from "../ElementAndRoles";
import { rarity } from "../ElementAndRoles";

const FilterStars = ({ Epic7Api }) => {
    const [stars, setStars] = useState([]);
    const { setShowHero } = useAppContext();

    const starData = () => {
        // find all roles and images
        const stars = Epic7Api.map((el) => el.rarity);
        const uniqueStars = [...new Set(stars)];
        const starImages = uniqueStars.map((el) => rarity(el));
        const starData = uniqueStars.map((el, i) => {
            return {
                name: el,
            };
        });
        return starData;
    };

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = stars.map((user) => {
                return { ...user, isChecked: checked };
            });

            setStars(tempUser);
            setShowHero(Epic7Api);
        } else {
            let tempUser = stars.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setStars(tempUser);
            const showHeroRole = tempUser.filter(
                (hero) => hero.isChecked === true
            );
            // check si coicide rol con el rol del heroe
            const showHeroRoleHeros = showHeroRole.map((hero) => hero.name);
            const showHeroRoleFilter = Epic7Api.filter((hero) =>
                showHeroRoleHeros.includes(hero.role)
            );
            setShowHero(showHeroRoleFilter);
            console.log(findElement("fire"));
        }
    };

    const starMap = starData();
    useEffect(() => {
        setStars(starMap);
    }, [Epic7Api]);

    return (
        <>
            <div>
                <form>
                    <div>
                        <div className="form-check-filter-Stars">
                            <input
                                type="checkbox"
                                id="allSelect"
                                className="form-check-filter-Stars-input"
                                name="allSelect"
                                checked={
                                    !stars.some(
                                        (user) => user?.isChecked !== true
                                    )
                                }
                                onChange={handleChange}
                            />
                            <label
                                className="form-check-filter-Stars-label"
                                htmlFor="allSelect"
                            >
                                All
                            </label>
                        </div>
                        {stars.map((user, index) => (
                            <div
                                className="form-check-filter-Stars"
                                key={index}
                            >
                                <input
                                    type="checkbox"
                                    className="form-check-filter-Stars-input"
                                    name={user.name}
                                    id={user.name}
                                    checked={user?.isChecked || false}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor={user.name}
                                    className="form-check-filter-Stars-label"
                                >
                                    <img
                                        src={
                                            "https://static.wikia.nocookie.net/epic-seven/images/2/2e/Star.png"
                                        }
                                        alt={user.name}
                                    ></img>
                                    {user.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </>
    );
};

export default FilterStars;
