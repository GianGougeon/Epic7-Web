import { elementAndRoles } from "./dataProp";

const modifyData = async (data) => {
    // modifica la api agregando el atributo "role" con un array de roles
    const findElement = (el) => {
        const find = elementAndRoles.find((e) => e.name === el);
        return find;
    };
    const newEpic7Api = await data.map((hero) => {
        const icon = hero.assets.icon;
        const image = hero.assets.image;
        const thumbnail = hero.assets.thumbnail;
        // add element icon
        const attribute = findElement(hero.attribute);
        const role = findElement(hero.role);
        const star =
            "https://static.wikia.nocookie.net/epic-seven/images/2/2e/Star.png";
        // =============================================================================================
        // categories es un array de difentes strings
        const categories = [hero.attribute, hero.role];
        // transform number to string
        const stars = hero.rarity.toString();
        return {
            ...hero,
            categories: categories,
            roles: [hero.role],
            attributes: [hero.attribute],
            stars: [stars],
            assets: {
                image,
                thumbnail,
                icons: { icon, attribute, role, star },
            },
        };
    });
    return newEpic7Api;
};
export default modifyData;