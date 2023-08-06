import {
    getImagePathElement,
    getImagePathRol,
    getImagePathSet,
    createGearObject,
    getPathStar,
} from "../utils/getImagePath";

const element = [
    { name: "fire", img: getImagePathElement("Fire") },
    { name: "ice", img: getImagePathElement("Ice") },
    { name: "light", img: getImagePathElement("Light") },
    { name: "dark", img: getImagePathElement("Dark") },
    { name: "wind", img: getImagePathElement("Wind") },
];

const rol = [
    { name: "warrior", img: getImagePathRol("warrior") },
    { name: "mage", img: getImagePathRol("Mage") },
    { name: "assassin", img: getImagePathRol("Thief") },
    { name: "ranger", img: getImagePathRol("Ranger") },
    { name: "manauser", img: getImagePathRol("Soulweaver") },
    { name: "knight", img: getImagePathRol("Knight") },
];


const sets = [
    { id: 1, name: "Speed", img: getImagePathSet("set_speed") },
    { id: 2, name: "Hit", img: getImagePathSet("set_acc") },
    { id: 3, name: "Critical", img: getImagePathSet("set_cri") },
    { id: 4, name: "Attack", img: getImagePathSet("set_att") },
    { id: 5, name: "Health", img: getImagePathSet("set_max_hp") },
    { id: 6, name: "Defense", img: getImagePathSet("set_def") },
    { id: 7, name: "Resistance", img: getImagePathSet("set_res") },
    { id: 8, name: "Destruction", img: getImagePathSet("set_cri_dmg") },
    { id: 9, name: "Lifesteal", img: getImagePathSet("set_vampire") },
    { id: 10, name: "Counter", img: getImagePathSet("set_counter") },
    { id: 11, name: "Unity", img: getImagePathSet("set_coop") },
    { id: 12, name: "Immunity", img: getImagePathSet("set_immune") },
    { id: 13, name: "Penetration", img: getImagePathSet("set_penetrate") },
    { id: 14, name: "Rage", img: getImagePathSet("set_rage") },
    { id: 15, name: "Revenge", img: getImagePathSet("set_revenge") },
    { id: 16, name: "Torrent", img: getImagePathSet("set_torrent") },
    { id: 17, name: "Protection", img: getImagePathSet("set_shield") },
    { id: 18, name: "Injury", img: getImagePathSet("set_injury") },
];

const gear = {
    boots: createGearObject("boots", [
        { id: 1, name: "Speed" },
        { id: 2, name: "Attack" },
        { id: 3, name: "Attack%" },
        { id: 4, name: "Health" },
        { id: 5, name: "Health%" },
        { id: 6, name: "Defense%" },
        { id: 7, name: "Defense" },
    ]),
    necklace: createGearObject("necklace", [
        { id: 8, name: "Critical Hit Rate" },
        { id: 9, name: "Critical Hit Damage" },
        { id: 10, name: "Health" },
        { id: 11, name: "Health%" },
        { id: 12, name: "Attack" },
        { id: 13, name: "Attack%" },
        { id: 14, name: "Defense" },
        { id: 15, name: "Defense%" },
    ]),
    ring: createGearObject("ring", [
        { id: 16, name: "Attack" },
        { id: 17, name: "Attack%" },
        { id: 18, name: "Health" },
        { id: 19, name: "Health%" },
        { id: 20, name: "Defense" },
        { id: 21, name: "Defense%" },
        { id: 22, name: "Effect Resistance" },
    ]),
};

const star = getPathStar();

export { element, rol, sets, gear, star };
