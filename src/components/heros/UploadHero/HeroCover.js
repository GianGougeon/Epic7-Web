import Image from "next/image";
import React from "react";
import ReactImageFallback from "react-image-fallback";
import { rarity } from "../../ElementAndRoles";
import { useAuth } from "../../context/AuthContext";
import Router from "next/router";
import styles from "../../../styles/sass/components/hero/heroCoverAnim.module.scss";
import detailStyles from "../../../styles/sass/components/hero/herosDetail.module.scss";

const HeroCover = (prop) => {
    const { heroDetail, setUploadBuild } = prop;
    const { user } = useAuth();
    const { attribute } = heroDetail.assets.icons;

    return (
        <div className={detailStyles.Hero_Details} key={heroDetail._id}>
            <div>
                <ReactImageFallback
                    src={heroDetail.assets.image}
                    fallbackImage="https://toppng.com/public/uploads/thumbnail/epic-seven-logo-11562865023mn7s1k4x0a.png"
                    alt={heroDetail.name}
                ></ReactImageFallback>
                <div>
                    <div>
                        <img
                            src={attribute.img}
                            alt={attribute.name}
                            className="hero-attribute-img"
                        />
                        <h1>{heroDetail.name}</h1>
                    </div>
                    <div className="star">
                        {rarity(heroDetail.rarity, heroDetail.name)}
                    </div>
                </div>
            </div>
            <ul className={styles.background}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            {user ? (
                <div>
                    <button
                        className={detailStyles.btn_upload}
                        onClick={() => setUploadBuild(true)}
                    >
                        Publicar Build
                    </button>
                </div>
            ) : (
                <div className={detailStyles.publish_build}>
                    <p>¿Quieres publicar una build?</p>
                    <button
                        className={detailStyles.btn_upload}
                        onClick={() => Router.push("/login")}
                    >
                        Inicia sesión
                    </button>
                </div>
            )}
        </div>
    );
};

export default HeroCover;
