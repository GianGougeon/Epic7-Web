import Image from 'next/image';
import React from 'react'
import ReactImageFallback from "react-image-fallback";
import { rarity } from "../../ElementAndRoles";

const HeroCover = ({heroDetail}) => {
  return (
    <div className="Hero-Details">
                <div>
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
                </div>
                <div>
                    <button>
                        <span>Subir Build</span>
                    </button>
                </div>
            </div>
  )
}

export default HeroCover