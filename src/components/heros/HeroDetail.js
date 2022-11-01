/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import HeroUploadBuild from "./UploadHero/HeroUploadBuild";
import HeroPreview from "./UploadHero/HeroPreview";
import HeroCover from "./UploadHero/HeroCover";
import ListBuilds from "./UploadHero/ListBuilds";

import styles from './../../styles/sass/components/hero/herosDetail.module.scss'

const HeroDetail = (prop) => {
    const { heroDetail, heroIdPage } = prop;
    const [loader, setLoader] = useState(false);
    // preview build
    const [userDataPreview, setUserDataPreview] = useState("");
    // loader
    const [uploadBuild, setUploadBuild] = useState(false);

    return (
        <section className={styles.hero_section}>
            {loader ? (
                <HeroCover
                    heroDetail={heroDetail}
                    setUploadBuild={setUploadBuild}
                />
            ) : null}
            {uploadBuild && (
                <HeroUploadBuild
                    heroDetail={heroDetail}
                    heroIdPage={heroIdPage}
                    setUserDataPreview={setUserDataPreview}
                />
            )}

            {userDataPreview != "" && (
                <HeroPreview
                    userDataPreview={userDataPreview}
                    heroIdPage={heroIdPage}
                    heroDetail={heroDetail}
                />
            )}
            <ListBuilds
                heroIdPage={heroIdPage}
                heroDetail={heroDetail}
                setLoader={setLoader}
                loader={loader}
            />
        </section>
    );
};

export default HeroDetail;
