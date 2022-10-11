import { elementAndRoles, sets } from "../data/dataProp";
import Image from "next/image";

const findElement = (heroEl) => {
    return elementAndRoles.find((el) => el.name === heroEl).img;
};
const findRole = (heroRole) => {
    return elementAndRoles.find((el) => el.name === heroRole).img;
};

const rarity = (data, alt) => {
    let arr = [];
    for (let i = 0; i < data; i++) {
        arr.push(
            <div>
                <Image
                    src="https://static.wikia.nocookie.net/epic-seven/images/2/2e/Star.png"
                    alt={alt}
                    width={20}
                    height={20}
                ></Image>
            </div>
        );
    }
    return arr;
};

const findSet = (data) => {
    return sets.find((el) => el.setsItems === data).img;
};


export { findElement, findRole, rarity, findSet };
