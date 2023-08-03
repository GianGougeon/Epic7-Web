import React, { useState, useEffect } from "react";
import { useAuth } from "../../components/context/AuthContext";
import { useProfileContext } from "../../components/context/ProfileContext";
import ProfileSelector from "./ProfileSelector";
import ListPublished from "./ListPublished";
import Info from "./Info";
// styles
import styles from "../../styles/sass/components/profile/profile.module.scss";
import Avatar from "./Avatar";
// data
import { getCollection } from "../../firebase/config";
import { usefetchStorageData } from "../../components/context/FetchStorageDataContext";
// sort
import { sortData } from "../../components/hooks/useSortHero";

const Profile = () => {
    const {
        saveDataToLocalStorage,
        loadDataFromLocalStorage,
        isLocalStorageEmpty,
    } = usefetchStorageData();

    const { user, updateProfileUserImage } = useAuth();
    
    const { currentSection, setCurrentSection } = useProfileContext();

    const [data, setData] = useState([]);
    // get data from firebase
    const getHeros = async () => {
        const data = await getCollection("characters");
        setData(sortData(data));
        saveDataToLocalStorage(data);
    };
    // get from storage
    const getHerosFromLocalStorage = async () => {
        const data = await loadDataFromLocalStorage();
        setData(sortData(data));
    };

    useEffect(() => {
        if (!isLocalStorageEmpty()) {
            getHerosFromLocalStorage();
        } else {
            getHeros();
        }
    }, []);

    return (
        <>
            <div className={styles.profile_details}>
                <div>
                    <ProfileSelector
                        setCurrentSection={setCurrentSection}
                        select="info"
                        selectInfo="Información"
                        defaultChecked={true}
                    />
                    <ProfileSelector
                        setCurrentSection={setCurrentSection}
                        select="avatar"
                        selectInfo="Cambiar Avatar"
                        defaultChecked={false}
                    />
                    <ProfileSelector
                        setCurrentSection={setCurrentSection}
                        select="listPublished"
                        selectInfo="Lista de builds publicadas"
                        defaultChecked={false}
                    />
                </div>
                {currentSection === "info" && <Info user={user} />}
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
