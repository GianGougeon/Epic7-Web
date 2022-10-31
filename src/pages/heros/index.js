import React, { useEffect, useState } from "react";

import Filter from "../../components/filters/Filter";
import Heros from "../../components/heros/Heros";
import Loader from "../../components/Loader";
import styles from "../../styles/sass/components/hero/heros.module.scss";

import { getCollection } from "../../firebase/config";

export const Home = () => {
    const [showHero, setShowHero] = useState([]);
    const [filterHeros, setFilterHeros] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const getIcons = async () => {
            const data = await getCollection("characters");
            // ordena alfabeticamente y prioriza a los heroes 5 estrellas
            const sortData = data.sort((a, b) => {
                if (a.rarity === b.rarity) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                }
                return b.rarity - a.rarity;
            });
            setShowHero(sortData);
            setLoader(false);
        };
        getIcons();
    }, []);

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <section
                    className={`${styles.heros_section} container2`}
                    style={{ marginTop: 80 }}
                >
                    <div>
                        <h1>Heroes</h1>
                    </div>
                    <Filter
                        setFilterHeros={setFilterHeros}
                        showHero={showHero}
                    />
                    <Heros filterHeros={filterHeros} />
                </section>
            )}
        </>
    );
};

export default Home;
