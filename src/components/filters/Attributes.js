import React from "react";
const Roles = (props) => {
    const { Epic7Api, setActiveFilter } = props;
    const attributes = Epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.attribute)) {
            acc.push(hero.attribute);
        }
        return acc;
    }, []);
    const handleChange = (role) => (event) => {
        setActiveFilter((prev) => ({
            ...prev,
            [role]: event.target.checked,
        }));
    };
    return (
        <div>
            {attributes.map((role) => (
                <div key={role}>
                    <input type="checkbox" onChange={handleChange(role)} />
                    <label>{role}</label>
                </div>
            ))}
        </div>
    );
};
export default Roles;
