import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { findElement, findRole, rarity } from "./ElemetsIcons";
import Pagination from "./pagination/Pagination";
import { useAppContext } from "./context/AppContext";
import Loader from "./Loader";
import ReactImageFallback from "react-image-fallback";


const Heros = ({ Epic7Api }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { loader } = useAppContext();

    let PageSize = 20;

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return Epic7Api.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize, Epic7Api]);

    
    return (
        <>
            <section>
                {loader ? (
                    <>
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
                                                src={findElement(
                                                    hero.attribute
                                                )}
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
                                        <ReactImageFallback
                                            src={hero.assets.icon}
                                            fallbackImage="https://toppng.com/public/uploads/thumbnail/epic-seven-logo-11562865023mn7s1k4x0a.png"
                                            alt={hero.name}
                                            ></ReactImageFallback>
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
                    </>
                ) : (
                    <Loader />
                    
                )}
            </section>
        </>
    );
};

export default Heros;
