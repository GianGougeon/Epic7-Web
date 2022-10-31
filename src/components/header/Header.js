import Link from "next/link";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import styles from "../../styles/sass/base/header/header.module.scss";
import Profile from "./Profile";
import { useAuth } from "../context/AuthContext";
const Header = () => {
    const { user, logout } = useAuth();
    const [expand, setExpand] = useState(false);

    return (
        <header className={styles.header}>
            <Link href="/">
                <div className={styles.logo}>
                    <span> E7B </span>
                    <span> Epic seven builds </span>
                </div>
            </Link>
            <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
            <label className={styles.menuIcon} htmlFor="menu-btn">
                <span className={styles.navicon} />
            </label>
            <div className={styles.menuProfile}>
                {user?.photoURL ? (
                    <img
                        src={user?.photoURL}
                        onClick={() => setExpand(!expand)}
                    />
                ) : (
                    <FaUserCircle onClick={() => setExpand(!expand)} />
                )}
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/heros">Heroes</Link>
                </li>
                <li>
                    <Link href="/test">Caza</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <div onClick={() => setExpand(!expand)}>
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            onClick={() => setExpand(!expand)}
                        />
                    ) : (
                        <FaUserCircle onClick={() => setExpand(!expand)} />
                    )}
                    {expand ? (
                        <IoMdArrowDropdown className={styles.arrowExpand} />
                    ) : (
                        <IoMdArrowDropleft className={styles.arrowExpand} />
                    )}
                </div>
            </ul>
            {expand && (
                <Profile setExpand={setExpand} user={user} logout={logout} />
            )}
        </header>
    );
};

export default Header;
