import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../components/context/AppContext";
import HeroDetail from "../../components/HeroDetail";
const Heros = () => {
    const router = useRouter();
    const { id } = router.query;
    const { showHero } = useAppContext();


            console.log(showHero);
    return (
        <>
            {showHero.map((heroDetail) => (
                <div key={heroDetail.id}>
                    {heroDetail._id === id ? (
                        <>
                            <HeroDetail heroDetail={heroDetail} />
                        </>
                    ) : null}
                </div>
            ))}
        </>
    );
};
export default Heros;
