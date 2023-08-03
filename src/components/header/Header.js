import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/sass/base/header/header.module.scss";
import Profile from "./Profile";
import { useAuth } from "../context/AuthContext";
import { Expand } from "./Expand";
import { MenuProfile } from "./MenuProfile";
import { MobileBtn } from "./MobileBtn";

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
            <MobileBtn />
            <MenuProfile user={user} expand={expand} setExpand={setExpand} />
            <ul className={styles.menu}>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/heros">Heroes</Link>
                </li>
                <li>
                    <Link href="">Caza</Link>
                </li>
                <li>
                    <Link href="">About</Link>
                </li>
                <Expand expand={expand} setExpand={setExpand} user={user} />
            </ul>
            {expand && (
                <Profile setExpand={setExpand} user={user} logout={logout} />
            )}
        </header>
    );
};

export default Header;
