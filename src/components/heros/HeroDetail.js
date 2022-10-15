/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { rarity, findSet } from "../ElementAndRoles";
import ReactImageFallback from "react-image-fallback";
import HeroUploadBuild from "./UploadHero/HeroUploadBuild";
import { useAuth } from "../context/AuthContext";
import HeroPreview from "./UploadHero/HeroPreview";
import HeroCover from "./UploadHero/HeroCover";
import ListBuilds from "./UploadHero/ListBuilds";

const HeroDetail = (prop) => {
    const { heroDetail, heroIdPage } = prop;
    const [userDataBuild, setUserDataBuild] = useState("");
    const { user } = useAuth();

    
    return (
        <div>
            <HeroCover heroDetail={heroDetail}/>
            <HeroUploadBuild
                heroDetail={heroDetail}
                heroIdPage={heroIdPage}
                setUserDataBuild={setUserDataBuild}
            />
            <HeroPreview userDataBuild={userDataBuild}/>
            <ListBuilds />
            
        </div>
    );
};

export default HeroDetail;
