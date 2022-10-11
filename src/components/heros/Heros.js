import Image from "next/image";
import React, { useState, useMemo } from "react";
import { findElement, findRole, rarity } from "../ElementAndRoles";
import Pagination from "../pagination/Pagination";
import { useAppContext } from "../context/AppContext";
import ReactImageFallback from "react-image-fallback";
import Link from "next/link";

const Heros = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { showHero } = useAppContext();

    let PageSize = 16;

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return showHero.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, showHero]);

    return (
        <>
            <section>
                <div className="heros container2">
                    {currentTableData.map((hero) => (
                        <Link href={`/heros/${hero._id}`} key={hero._id}> 
                            <div>
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
                                        <div className="star" key="stars">
                                            {rarity(hero.rarity, hero.name)}
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <ReactImageFallback
                                        src={hero.assets.thumbnail}
                                        fallbackImage="https://toppng.com/public/uploads/thumbnail/epic-seven-logo-11562865023mn7s1k4x0a.png"
                                        alt={hero.name}
                                    ></ReactImageFallback>
                                </picture>
                            </div>
                        </Link>
                    ))}
                </div>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={showHero.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </section>
        </>
    );
};

export default Heros;
