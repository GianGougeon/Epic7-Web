import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../components/context/AppContext";
import HeroDetail from "../../components/heros/HeroDetail";

const Heros = () => {
    const router = useRouter();
    const { id } = router.query;
    const { showHero } = useAppContext();

    const test = () => {
        showHero.length === 0 ? router.push("/heros") : null;
    };
    useEffect(() => {
        test();
    }, [id]);

    return (
        <>
            <div>
                <div className="background"></div>
            </div>
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
