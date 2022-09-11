import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { findElement } from "../ElementAndRoles";
const FilterElement = ({ Epic7Api }) => {
    const [attribute, setAttribute] = useState([]);
    const { setShowHero } = useAppContext();

    const roleData = () => {
        // find all roles and images
        const roles = Epic7Api.map((el) => el.attribute);
        const uniqueRoles = [...new Set(roles)];
        const roleImages = uniqueRoles.map((el) => findElement(el));
        const roleData = uniqueRoles.map((el, i) => {
            return {
                name: el,
                img: roleImages[i],
            };
        });
        return roleData;
    };

    const handleChange = (e) => {
        const { name, checked } = e.target;

        if (name === "allSelect") {
            let tempUser = attribute.map((user) => {
                return { ...user, isChecked: checked };
            });

            setAttribute(tempUser);
            setShowHero(Epic7Api);
        } else {
            let tempUser = attribute.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setAttribute(tempUser);
            const showHeroRole = tempUser.filter(
                (hero) => hero.isChecked === true
            );
            // check si coicide rol con el rol del heroe
            const showHeroRoleHeros = showHeroRole.map((hero) => hero.name);
            const showHeroRoleFilter = Epic7Api.filter((hero) =>
                showHeroRoleHeros.includes(hero.attribute)
            );
            setShowHero(showHeroRoleFilter);
        }
    };

    const roleMap = roleData();
    useEffect(() => {
        setAttribute(roleMap);
    }, [Epic7Api]);

    return (
        <>
            <div>
                <form>
                    <div>
                        <div className="form-check-filterRole">
                            <input
                                type="checkbox"
                                id="allSelect"
                                className="form-check-filterRole-input"
                                name="allSelect"
                                checked={
                                    !attribute.some(
                                        (user) => user?.isChecked !== true
                                    )
                                }
                                onChange={handleChange}
                            />
                            <label
                                className="form-check-filterRole-label"
                                htmlFor="allSelect"
                            >
                                All
                            </label>
                        </div>

                        {attribute.map((user, index) => (
                            <div className="form-check-filterRole" key={index}>
                                <input
                                    type="checkbox"
                                    className="form-check-filterRole-input"
                                    name={user.name}
                                    id={user.name}
                                    checked={user?.isChecked || false}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor={user.name}
                                    className="form-check-filterRole-label"
                                >
                                    <img src={user.img} alt={user.name}></img>
                                </label>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </>
    );
};

export default FilterElement;
