import React from "react";
const Stars = (props) => {
    const { showHero, handleChange } = props;

    // extrae el numero de raresa y su imagen  
    const stars = showHero.reduce((acc, hero) => {
        if (!acc.includes(hero.rarity)) {
            acc.push(hero.rarity);
        }
        return acc;
    }, []);
    // 
    const starImage = showHero.reduce((acc, hero) => {
        if (!acc.includes(hero.assets.icons.star)) {
            acc.push(hero.assets.icons.star);
        }
        return acc;
    }, []);
    // crea un array de objetos con los roles y sus imagenes siempre es la misma
    const starsWithImages = stars.map((star) => {
        return {
            star: star,
            image: starImage,
        };
    });

    
    return (
        <div>
            {starsWithImages.map((hero) => (
                <div key={hero.star}>
                <input
                    type="checkbox"
                    onChange={handleChange(hero.star)}
                    name={hero.star}
                    id={hero.star}
                />
                <label htmlFor={hero.star}>
                    <span>{hero.star}</span>
                    <img
                        src={hero.image}
                        alt={"Star"}
                    />
                </label>
            </div>
            ))}
        </div>
    );
};
export default Stars;
