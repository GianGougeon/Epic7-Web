import Image from "next/image";
import React, { useEffect, useState } from "react";
import { findElement, findRole, rarity } from "./ElemetsIcons";
const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.epicsevendb.com/hero")
            .then((response) => response.json())
            .then((data) => setData(data.results));
    }, []);


    return (
        <>
            <section>
                <div className="heros">
                    {data.map((hero) => (
                        <div key={hero.id}>
                            <div className="hero-rol">
                                <div>
                                    <picture>
                                        <img
                                            style={{ width: "23px" }}
                                            src={findRole(hero.role)}
                                            alt={hero.name}
                                        ></img>
                                    </picture>
                                    <h2>{hero.name}</h2>
                                </div>
                                <div className="hero-attribute">
                                    <Image
                                        width={23}
                                        height={23}
                                        src={findElement(hero.attribute)}
                                        alt={hero.attribute}
                                        className="hero-attribute-img"
                                    ></Image>
                                    <div className="star">
                                        {rarity(
                                            hero.rarity,
                                            hero.id,
                                            hero.name
                                        )}
                                    </div>
                                </div>
                            </div>
                            <picture>
                                <img
                                    src={hero.assets.icon}
                                    alt={hero.name}
                                ></img>
                            </picture>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Api;
