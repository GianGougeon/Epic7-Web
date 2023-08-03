import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "../../styles/sass/base/header/header.module.scss";

export const MenuProfile = ({ user, expand, setExpand }) => {
    const [getUser, setGetUser] = useState();
    //await user photoURL
    useEffect(() => {
        const getUser = async () => {
            setGetUser(await user?.photoURL);
        };
        getUser();
    }, [user]);

    return (
        <div className={styles.menuProfile}>
            {user?.photoURL ? (
                <img src={getUser} onClick={() => setExpand(!expand)} />
            ) : (
                <FaUserCircle onClick={() => setExpand(!expand)} />
            )}
        </div>
    );
};
