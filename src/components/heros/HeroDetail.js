/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import HeroUploadBuild from "./UploadHero/HeroUploadBuild";
import HeroPreview from "./UploadHero/HeroPreview";
import HeroCover from "./UploadHero/HeroCover";
import ListBuilds from "./UploadHero/ListBuilds";
import { updateDoc, doc, setDoc, onSnapshot } from "firebase/firestore";

const HeroDetail = (prop) => {
    const { heroDetail, heroIdPage } = prop;
    // preview build
    const [userDataPreview, setUserDataPreview] = useState("");
    // loader
    const [uploadBuild, setUploadBuild] = useState(false);

    console.log(heroDetail);
    return (
        <div>
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
                <HeroPreview userDataPreview={userDataPreview} heroIdPage={heroIdPage} />
            )}
            <ListBuilds heroIdPage={heroIdPage} heroDetail={heroDetail}/>
        </div>
    );
};

export default HeroDetail;
