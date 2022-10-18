/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import HeroUploadBuild from "./UploadHero/HeroUploadBuild";
import HeroPreview from "./UploadHero/HeroPreview";
import HeroCover from "./UploadHero/HeroCover";
import ListBuilds from "./UploadHero/ListBuilds";

const HeroDetail = (prop) => {
    const { heroDetail, heroIdPage } = prop;
    // preview build
    const [userDataPreview, setUserDataPreview] = useState("");
    // loader
    const [uploadBuild, setUploadBuild] = useState(false);

    return (
        <>
            <HeroCover
                heroDetail={heroDetail}
                setUploadBuild={setUploadBuild}
            />
            {uploadBuild && (
                <HeroUploadBuild
                    heroDetail={heroDetail}
                    heroIdPage={heroIdPage}
                    setUserDataPreview={setUserDataPreview}
                />
            )}

            {userDataPreview != "" && (
                <HeroPreview userDataPreview={userDataPreview} heroIdPage={heroIdPage}  heroDetail={heroDetail}/>
            )}
            <ListBuilds heroIdPage={heroIdPage} heroDetail={heroDetail}/>
        </>
    );
};

export default HeroDetail;
