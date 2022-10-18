import Image from "next/image";
import React from "react";
import ReactImageFallback from "react-image-fallback";
import { rarity } from "../../ElementAndRoles";
import { useAuth } from "../../context/AuthContext";
import Router from "next/router";

const HeroCover = (prop) => {
    const { heroDetail, setUploadBuild } = prop;
    const { user } = useAuth();
    const { attribute } = heroDetail.assets.icons;

    return (
        <div className="Hero-Details" key={heroDetail._id}>
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
            {user ? (
                <div>
                    <button
                        className="btn-upload"
                        onClick={() => setUploadBuild(true)}
                    >
                        Publicar Build
                    </button>
                </div>
            ) : (
                <div className="publish-build">
                    <span>¿Quieres publicar una build?</span>
                    <button
                        className="btn-upload"
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
