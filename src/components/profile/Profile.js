import React, { useState, useEffect } from "react";
import { useAuth } from "../../components/context/AuthContext";

import ListPublished from "./ListPublished";
import Info from "./Info";
// styles
import styles from "../../styles/sass/components/profile/profile.module.scss";
import Avatar from "./Avatar";
// data
import { getCollection } from "../../firebase/config";

const Profile = () => {
    const { user, updateProfileUserImage } = useAuth();
    const [currentSection, setCurrentSection] = useState("info");
    const [data, setData] = useState([]);
    // avatar selected

    useEffect(() => {
        const getIcons = async () => {
            const data = await getCollection("characters");
            setData(data);
        };
        getIcons();
    }, []);

    return (
        <>
            <div className={styles.profile_details}>
                <div>
                    <input
                        type="radio"
                        name="profile"
                        id="info"
                        value="info"
                        onClick={() => setCurrentSection("info")}
                        defaultChecked={true}
                    />
                    <label htmlFor="info">Información</label>
                    <input
                        type="radio"
                        name="profile"
                        id="avatar"
                        value="avatar"
                        onClick={() => setCurrentSection("avatar")}
                    />
                    <label htmlFor="avatar">Cambiar Avatar</label>
                    <input
                        type="radio"
                        name="profile"
                        id="listPublished"
                        value="listPublished"
                        onClick={() => setCurrentSection("listPublished")}
                    />
                    <label htmlFor="listPublished">
                        Lista de builds publicadas
                    </label>
                </div>

                {currentSection === "info" && (
                    <Info user={user}/>
                )}
                {currentSection === "listPublished" && <ListPublished />}
                {currentSection === "avatar" && (
                    <Avatar
                        data={data}
                        updateProfileUserImage={updateProfileUserImage}
                    />
                )}
            </div>
        </>
    );
};

export default Profile;
