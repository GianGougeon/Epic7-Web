import React from "react";
const Roles = (props) => {
    const { Epic7Api, handleChange } = props;

    // extrae los attributos y sus imagenes
    const attributes = Epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.attribute)) {
            acc.push(hero.attribute);
        }
        return acc;
    }, []);
    const attributeImages = Epic7Api.reduce((acc, hero) => {
        if (!acc.includes(hero.assets.icons.attribute.img)) {
            acc.push(hero.assets.icons.attribute.img);
        }
        return acc;
    }, []);
    // crea un array de objetos con los attributos y sus imagenes
    const attributesWithImages = attributes.map((attribute, index) => {
        return {
            attribute: attribute,
            image: attributeImages[index],
        };
    });

    return (
        <div>
            {attributesWithImages.map((att) => (
                <div key={att.attribute}>
                    <input
                        type="checkbox"
                        onChange={handleChange(att.attribute)}
                        name={att.attribute}
                        id={att.attribute}
                    />
                    <label htmlFor={att.attribute}>
                        <img src={att.image} alt={att.attribute} />
                    </label>
                </div>
            ))}
        </div>
    );
};
export default Roles;
