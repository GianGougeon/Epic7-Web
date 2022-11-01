import React, { useEffect, useState } from "react";

import Filter from "../../components/heros/filters/Filter";
import Heros from "../../components/heros/Heros";
import Loader from "../../components/Loader";
import styles from "../../styles/sass/components/hero/heros.module.scss";
// hook sort
import { sortData } from "../../components/hooks/useSortHero";
//  storage
import { usefetchStorageData } from "../../components/context/FetchStorageDataContext";

import { getCollection } from "../../firebase/config";

export const Home = () => {
    const {
        saveDataToLocalStorage,
        loadDataFromLocalStorage,
        isLocalStorageEmpty,
    } = usefetchStorageData();
    const [showHero, setShowHero] = useState([]);
    const [filterHeros, setFilterHeros] = useState([]);
    const [loader, setLoader] = useState(true);

    const getHeros = async () => {
        const data = await getCollection("characters");
        saveDataToLocalStorage(data);
        setShowHero(sortData(data));
        setLoader(false);
    };


    const getHerosFromLocalStorage = async () => {
        const data = await loadDataFromLocalStorage();
        setShowHero(sortData(data));
        setLoader(false);
    };

    useEffect(() => {
        if (!isLocalStorageEmpty()) {
            getHerosFromLocalStorage();
        } else {
            getHeros();
        }
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
