import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeroDetail from "../../components/heros/HeroDetail";
import { getCollection } from "../../firebase/config";
import { usefetchStorageData } from "../../components/context/FetchStorageDataContext";

const Heros = () => {
    const {
        saveDataToLocalStorage,
        loadDataFromLocalStorage,
        isLocalStorageEmpty,
    } = usefetchStorageData();
    const router = useRouter();
    const { id } = router.query;
    // const { showHero } = useAppContext();
    const [showHero, setShowHero] = useState([]);
    const [loader, setLoader] = useState(false);

    const getHerosFromLocalStorage = async () => {
        const data = await loadDataFromLocalStorage();
        setShowHero(data);
        saveDataToLocalStorage(data);
    };

    const getHeros = async () => {
        const data = await getCollection("characters");
        setShowHero(data);
    };

    useEffect(() => {
        setLoader(true);
        if (!isLocalStorageEmpty()) {
            getHerosFromLocalStorage();
            setLoader(false);
        } else {
            setLoader(false);
            getHeros();
        }
    }, [id]);

    return (
        <>
            {showHero.map((heroDetail) => (
                <>
                    {heroDetail._id === id ? (
                        <>
                            <HeroDetail
                                heroDetail={heroDetail}
                                heroIdPage={id}
                                loader={loader}
                            />
                        </>
                    ) : null}
                </>
            ))}
        </>
    );
};
export default Heros;
