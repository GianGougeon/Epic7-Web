import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <header className="header">
            <Link href="/">
                <a className="logo">E7B</a>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon" />
            </label>
            <ul className="menu">
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/heros">Heroes</Link>
                </li>
                <li>
                    <Link href="/test">Hunts</Link>
                </li>
                <li>
                    <Link href="/register">register</Link>
                </li>
                <li>
                    <Link href="/login">login</Link>
                </li>
                <li>
                    <Link href="/profile">
                        <CgProfile />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
