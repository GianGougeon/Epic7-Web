import React from "react";

const HeroDetail = ({ heroDetail }) => {

    return (
        <>
        <div className="background background--full"></div>
            <div>{heroDetail.attribute}</div>
            <div>{heroDetail.zodiac}</div>
            <img src={heroDetail.assets.image}></img>
        </>
    );
};

export default HeroDetail;
