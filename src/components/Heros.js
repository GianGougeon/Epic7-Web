import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { findElement, findRole, rarity } from "./ElemetsIcons";
import Pagination from "./pagination/Pagination";
const Heros = ( {Epic7Api} ) => {
    let PageSize = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return Epic7Api.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize, Epic7Api]);

    return (
        <>
            <section>
                <div className="heros container2">
                    {currentTableData.map((hero) => (
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
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={Epic7Api.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </section>
        </>
    );
};

export default Heros;
