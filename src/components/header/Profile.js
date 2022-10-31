import React, { useState, useEffect } from "react";
import styles from "../../styles/sass/base/header/profile.module.scss";
import Router from "next/router";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { useOuterClick } from "../hooks/useOuterClick";
import { FaUserCircle } from "react-icons/fa";
const Profile = (props) => {
    const { setExpand, user, logout } = props;

    const innerRef = useOuterClick(() => {
        setExpand(false);
    });
    // Handle logout function
    const handleLogout = async () => {
        try {
            await logout();
            setExpand(false);
            Router.push("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div ref={innerRef} className={styles.card}>
            <div className={styles.cardContent}>
                <div>
                    {user ? (
                        user?.photoURL ? (
                            <>
                                <img
                                    src={user?.photoURL}
                                    alt="user-image"
                                ></img>
                            </>
                        ) : (
                            <FaUserCircle />
                        )
                    ) : (
                        <FaUserCircle />
                    )}
                    <div>
                        <span>{user?.displayName || "Usuario"}</span>
                        <span>{user?.email}</span>
                    </div>
                </div>
                <div>
                    <ul>
                        <Link href={"/profile"}>
                            <li onClick={() => setExpand(false)}>
                                <CgProfile />
                                Perfil
                            </li>
                        </Link>
                        <Link href={"/profile"}>
                            <li onClick={() => setExpand(false)}>
                                <BsFillGearFill />
                                Configuracion
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <ul>
                        {user ? (
                            <li onClick={handleLogout}>
                                <AiOutlineLogout /> Cerrar Sesion
                            </li>
                        ) : (
                            <Link href={"/login"}>
                                <li>
                                    <AiOutlineLogin
                                        className={styles.AiOutlineLogin}
                                    />{" "}
                                    Iniciar Sesion
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
