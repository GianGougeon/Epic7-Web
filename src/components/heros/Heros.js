import Image from "next/image";
import React, { useState, useMemo } from "react";
import { findElement, findRole, rarity } from "../ElementAndRoles";
import Pagination from "../pagination/Pagination";
import ReactImageFallback from "react-image-fallback";
import styles from "./../../styles/sass/components/hero/heros.module.scss";
import Link from "next/link";
import RenderIfVisible from "react-render-if-visible";

const Heros = (prop) => {
    const { filterHeros } = prop;
    const [currentPage, setCurrentPage] = useState(1);

    let PageSize = 16;

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filterHeros.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, filterHeros]);

    return (
        <>
            <div className={styles.heros}>
                {currentTableData.map((hero) => (
                    <RenderIfVisible
                        key={hero.id}
                        defaultHeight={false}
                        stayRendered={true}
                        visibleOffset={PageSize}
                    >
                        <Link href={`/heros/${hero._id}`}>
                            <div>
                                <div className={styles.hero_rol}>
                                    <div>
                                        <picture>
                                            <img
                                                src={findRole(hero.role)}
                                                alt={hero.name}
                                            ></img>
                                        </picture>
                                        <h2>{hero.name}</h2>
                                    </div>
                                    <div className={styles.hero_attribute}>
                                        <Image
                                            width={23}
                                            height={23}
                                            src={findElement(hero.attribute)}
                                            alt={hero.attribute}
                                            className="hero-attribute-img"
                                        ></Image>
                                        <div
                                            className={styles.star}
                                            key="stars"
                                        >
                                            {rarity(hero.rarity, hero.name)}
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <div>
                                        <img
                                            src={hero.assets.thumbnail}
                                            className={styles.hero_img}
                                            alt={hero.name}
                                        ></img>
                                    </div>
                                </picture>
                            </div>
                        </Link>
                    </RenderIfVisible>
                ))}
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={filterHeros.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
};

export default Heros;
