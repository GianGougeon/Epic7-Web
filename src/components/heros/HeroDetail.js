/* eslint-disable @next/next/no-img-element */
import React from "react";
import { rarity, findSet } from "../ElementAndRoles";
import ReactImageFallback from "react-image-fallback";
import HeroUploadBuild from "./HeroUploadBuild";
import { useAuth } from "../context/AuthContext";

const HeroDetail = ({ heroDetail }) => {
    const { user } = useAuth();
    console.log(user, "detail");
    return (
        <div>
            <div className="Hero-Details">
                <ReactImageFallback
                    src={heroDetail.assets.image}
                    fallbackImage="https://toppng.com/public/uploads/thumbnail/epic-seven-logo-11562865023mn7s1k4x0a.png"
                    alt={heroDetail.name}
                ></ReactImageFallback>
                <div>
                    <div>
                        <img
                            src={heroDetail.assets.icons.attribute.img}
                            alt={heroDetail.assets.icons.attribute.name}
                            className="hero-attribute-img"
                        />
                        <h1>{heroDetail.name}</h1>
                    </div>
                    <div className="star">
                        {rarity(heroDetail.rarity, heroDetail.name)}
                    </div>
                </div>
                {!user ? <HeroUploadBuild /> : <div>USUARIO NO LOGEADO</div>}
            </div>
            <div className="detail-content">
                <div>
                    <div>
                        <div></div>
                        <h2>Ricardo</h2>
                    </div>
                    <div>
                        <div>
                            <img src={findSet(heroDetail.speed)} />
                            <p>Speed</p>
                        </div>
                        <div>hp res eft speed</div>
                    </div>
                </div>
                <div>
                    <img src="https://media.discordapp.net/attachments/820488735207456779/1023454616656019476/unknown.png" />
                </div>
            </div>
        </div>
    );
};

export default HeroDetail;
