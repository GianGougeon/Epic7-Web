import React from "react";
const Stars = (props) => {
    const { Epic7Api, setActiveFilter } = props;
    const stars = Epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.rarity)) {
            acc.push(hero.rarity);
        }
        return acc;
    }, []);

    // si estan desactivados los checkbox de estrellas 3 4 5, se seleccionan todos
    const handleChanges = (role) => {
        if (!role.target.checked) {
            setActiveFilter((prev) => ({
                ...prev,
                3: true,
                4: true,
                5: true,
            }));
        } else {
            setActiveFilter((prev) => ({
                ...prev,
                [role.target.name]: role.target.checked,
            }));
        }
    };

    
    return (
        <div>
            {stars.map((role) => (
                <div key={role}>
                    <input
                        type="checkbox"
                        id={role}
                        name={role}
                        value={role}
                        onChange={() =>handleChange(role)}

                    />
                    <label>{role}</label>
                </div>
            ))}
        </div>
    );
};
export default Stars;
