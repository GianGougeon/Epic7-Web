// Element
export const getImagePathElement = (imageName) =>
    `/assets/element/${imageName}.webp`;
// Rol
export const getImagePathRol = (imageName) =>
    `/assets/rol/${imageName}.webp`;
// Set
export const getImagePathSet = (imageName) =>
    `/assets/set/${imageName}.webp`;
// Gear
const getImagePathGear = (gearType, imageName) =>
    `/assets/gear/${gearType}/${imageName}.webp`;
// GearPaths
const gearBasePaths = {
    necklace: "/gear/necklace",
    ring: "/gear/ring",
    boots: "/gear/boots",
};
// CreateGearObject
export const createGearObject = (gearType, gearItems) => {
    return gearItems.map((item) => ({
        id: item.id,
        name: item.name,
        img: getImagePathGear(
            gearType,
            item.name.toLowerCase().replace(/ /g, "_")
        ),
    }));
};
