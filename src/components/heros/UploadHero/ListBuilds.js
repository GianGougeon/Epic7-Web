import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { findSet } from "../../ElementAndRoles";
// loader
import ReactLoading from "react-loading";

import styles from "../../../styles/sass/components/hero/herosDetail.module.scss";
import stylesU from "../../../styles/sass/components/hero/heroUpload.module.scss";

const ListBuilds = (prop) => {
    const { heroIdPage, heroDetail, setLoader, loader } = prop;
    const [buildsList, setBuildsList] = useState([]);

    // get publishedBuilds from firebase
    const getPublishedBuilds = async () => {
        try {
            const publishedBuilds = collection(db, "buildsPublished");
            const publishedBuildsSnapshot = await getDocs(publishedBuilds);
            const publishedBuildsList = publishedBuildsSnapshot.docs.map(
                (doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })
            );
            // filter builds by heroId
            const filteredBuilds = publishedBuildsList.filter(
                (build) => build.heroInfo._id === heroIdPage
            );
            setBuildsList(filteredBuilds);
            setLoader(true);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getPublishedBuilds();
    }, [heroIdPage]);

    const date = (uploadDate) => {
        const date = new Date(uploadDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    // separar nombre del mail
    const name = (email) => {
        const name = email.split("@");
        return name[0];
    };

    return (
        <>
            {loader ? (
                buildsList.length ? (
                    buildsList.map((build) => (
                        <div className={styles.detail_content} key={build.id}>
                            <div>
                                <div>
                                    <div>
                                        <img
                                            src={
                                                build.userInfo.photoURL ||
                                                heroDetail.assets.icons.icon
                                            }
                                            alt={
                                                build.userInfo.nickname ||
                                                name(build.userInfo.email)
                                            }
                                        ></img>
                                    </div>
                                    <h2>
                                        {build.userInfo.nickname ||
                                            name(build.userInfo.email)}
                                    </h2>
                                </div>
                                <div>
                                    <div>
                                        <img
                                            src={findSet(
                                                build.heroInfo.sets.setName.name
                                            )}
                                        />
                                        <p>
                                            {build.heroInfo.sets.setName.name}
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src={findSet(
                                                build.heroInfo.sets.setName2
                                                    .name
                                            )}
                                        />
                                        <p>
                                            {build.heroInfo.sets.setName2.name}
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src={findSet(
                                                build.heroInfo.sets.setName3
                                                    .name
                                            )}
                                        />
                                        <p>
                                            {build.heroInfo.sets.setName3.name}
                                        </p>
                                    </div>
                                    {/* Stats */}
                                    <hr></hr>
                                    <div>
                                        <img
                                            src={
                                                build.heroInfo.statsPiece.collar
                                                    .img
                                            }
                                            alt={
                                                build.heroInfo.statsPiece.collar
                                                    .img
                                            }
                                        ></img>
                                        <p>
                                            {
                                                build.heroInfo.statsPiece.collar
                                                    .name
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src={
                                                build.heroInfo.statsPiece.anillo
                                                    .img
                                            }
                                            alt={
                                                build.heroInfo.statsPiece.anillo
                                                    .img
                                            }
                                        ></img>
                                        <p>
                                            {
                                                build.heroInfo.statsPiece.anillo
                                                    .name
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src={
                                                build.heroInfo.statsPiece.botas
                                                    .img
                                            }
                                            alt={
                                                build.heroInfo.statsPiece.botas
                                                    .img
                                            }
                                        ></img>
                                        <p>
                                            {
                                                build.heroInfo.statsPiece.botas
                                                    .name
                                            }
                                        </p>
                                    </div>
                                    <hr></hr>

                                    <div>
                                        <p>{date(build.uploadDate)}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {build.heroInfo.buildImage != "" ? (
                                    <img src={build.heroInfo.buildImage} />
                                ) : (
                                    <div>
                                        <span>Imagen no encontrada</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ color: "#eee" }}>No hay nada</p>
                )
            ) : (
                <div
                    className={`${stylesU.Upload_Build} ${stylesU.uploading}`}
                    style={{ height: "100vh", backgroundColor: "transparent" }}
                >
                    <ReactLoading type="spinningBubbles" color="#2D2540" />
                </div>
            )}
        </>
    );
};

export default ListBuilds;
