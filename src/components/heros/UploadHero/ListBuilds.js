import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { findSet } from "../../ElementAndRoles";
// loader
import ReactLoading from "react-loading";

const ListBuilds = (prop) => {
    const { heroIdPage, heroDetail } = prop;
    const [buildsList, setBuildsList] = useState([]);
    const [loader, setLoader] = useState(false);

    // get pendingBuilds from firebase
    const getPendingBuilds = async () => {
        const pendingBuilds = collection(db, "pendingBuilds");
        const pendingBuildsSnapshot = await getDocs(pendingBuilds);
        const pendingBuildsList = pendingBuildsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(pendingBuildsList);
        // filter pendingBuilds by heroIdPage
        const filteredPendingBuilds = pendingBuildsList.filter(
            (build) => build.heroInfo._id === heroIdPage
        );
        console.log(filteredPendingBuilds);
        setBuildsList(filteredPendingBuilds);
        setLoader(true);
    };
    useEffect(() => {
        getPendingBuilds();
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
                buildsList.map((build) => (
                    <>
                        <div className="detail-content">
                            <div>
                                <div>
                                    <div>
                                        <img
                                            src={build.userInfo.photoURL || heroDetail.assets.icons.icon}
                                            alt={build.userInfo.nickname || name(build.userInfo.email)}
                                        ></img>
                                    </div>
                                    <h2>{build.userInfo.nickname || name(build.userInfo.email)}</h2>
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
                                <img src={build.heroInfo.buildImage} />
                            </div>
                        </div>
                    </>
                ))
            ) : (
                <div
                    className="Upload-Build uploading"
                    style={{ height: "75vh", backgroundColor: "transparent" }}
                >
                    <ReactLoading type="spinningBubbles" color="#2D2540" />
                </div>
            )}
        </>
    );
};

export default ListBuilds;
