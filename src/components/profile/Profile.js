import { useAuth } from "../../components/context/AuthContext";
import React, { useState } from "react";
import ListPublished from "./ListPublished";
import Info from "./Info";
import styles from "../../styles/sass/components/profile/profile.module.scss";
// styles

const Profile = () => {
    const [currentSection, setCurrentSection] = useState("info");
    const { user, updateProfileUser, findUserAlreadyExist } = useAuth();


    console.log(user);

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
                        id="listPublished"
                        value="listPublished"
                        onClick={() => setCurrentSection("listPublished")}
                    />
                    <label htmlFor="listPublished">
                        Lista de builds publicadas
                    </label>
                </div>

                {currentSection === "info" && (
                    <Info user={user} updateProfileUser={updateProfileUser} />
                )}
                {currentSection === "listPublished" && <ListPublished />}
            </div>
        </>
    );
};

export default Profile;
