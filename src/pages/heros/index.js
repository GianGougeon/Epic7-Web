import React, { useEffect, useState } from "react";

import Filter from "../../components/heros/filters/Filter";
import Heros from "../../components/heros/Heros";
import Loader from "../../components/Loader";
import styles from "../../styles/sass/components/hero/heros.module.scss";
// hook sort
import { sortData } from "../../components/hooks/useSortHero";
//  storage
import { getCollection } from "../../firebase/config";
import pj from "../../../api.json";

export const Home = () => {
    const [heroList, setHeroList] = useState([]);
    const [loader, setLoader] = useState(true);

    // personajes
    const getHeros = async () => {
        // const data = await getCollection("characters");
        const data = await pj;
        setHeroList(data);
    };
    
    useEffect(() => {
        getHeros();
        setLoader(false);
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
                    <Filter data={heroList} />
                    {/* <Heros filterHeros={filterHeros} /> */}
                </section>
            )}
        </>
    );
};

export default Home;
