import React from "react";

const Roles = (props) => {
    const { Epic7Api, handleChange } = props;

    // extrae los roles y sus imagenes
    const roles = Epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.role)) {
            acc.push(hero.role);
        }
        return acc;
    }, []);
    const roleImages = Epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.assets.icons.role.img)) {
            acc.push(hero.assets.icons.role.img);
        }
        return acc;
    }, []);
    // crea un array de objetos con los roles y sus imagenes
    const rolesWithImages = roles.map((role, index) => {
        return {
            role: role,
            image: roleImages[index],
        };
    });

    return (
        <div>
            {rolesWithImages.map((hero) => (
                <div key={hero.role}>
                    <input
                        type="checkbox"
                        onChange={handleChange(hero.role)}
                        name={hero.role}
                        id={hero.role}
                    />
                    <label htmlFor={hero.role}>
                        <img src={hero.image} alt={hero.role} />
                    </label>
                </div>
            ))}
        </div>
    );
};
export default Roles;
