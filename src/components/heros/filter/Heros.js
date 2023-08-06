import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import Pagination from "../../pagination/Pagination";
import styles from "./../../../styles/sass/components/hero/heros.module.scss";
import Link from "next/link";

const Heros = (prop) => {
    const {
        data,
        star,
        element,
        rol,
        handleElementChange,
        filterPropsByKeyword,
    } = prop;

    let PageSize = 16;

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, data]);

    // Cambiar a la primera página cuando se cambie el filtro
    useEffect(() => {
        setCurrentPage(1);
    }, [handleElementChange]);

    // Map de estrellas
    const rarity = (star, count) => {
        let stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(
                <Image
                    key={i}
                    width={23}
                    height={23}
                    src={star}
                    alt="Star-5"
                ></Image>
            );
        }
        return stars;
    };

    return (
        <>
            <div className={styles.heros}>
                {currentTableData.map((hero) => (
                    <Link href={`/heros/${hero._id}`} key={hero._id}>
                        <div>
                            <div className={styles.hero_rol}>
                                <div>
                                    <picture>
                                        <img
                                            src={filterPropsByKeyword(
                                                rol,
                                                hero.role
                                            )}
                                            alt={hero.name}
                                        ></img>
                                    </picture>
                                    <h2>{hero.name}</h2>
                                </div>
                                <div className={styles.hero_attribute}>
                                    <Image
                                        width={23}
                                        height={23}
                                        src={filterPropsByKeyword(
                                            element,
                                            hero.attribute
                                        )}
                                        alt={hero.attribute}
                                        className="hero-attribute-img"
                                    ></Image>
                                    <div className={styles.star} key="stars">
                                        {rarity(star, hero.rarity)}
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
                ))}
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
};

export default Heros;
