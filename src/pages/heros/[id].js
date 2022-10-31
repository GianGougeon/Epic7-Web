import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeroDetail from "../../components/heros/HeroDetail";
import { getCollection } from "../../firebase/config";

const Heros = () => {
    const router = useRouter();
    const { id } = router.query;
    // const { showHero } = useAppContext();
    const [showHero , setShowHero] = useState([]);

    useEffect(() => {
        const getIcons = async () => {
            const data = await getCollection("characters");
            setShowHero(data);
        };
        getIcons();
    }, [id]);


    return (
        <>
            {showHero.map((heroDetail) => (
                <>
                    {heroDetail._id === id ? (
                        <>
                            <HeroDetail heroDetail={heroDetail} heroIdPage={id} />
                        </>
                    ) : null}
                </>
            ))}
        </>
    );
};
export default Heros;
