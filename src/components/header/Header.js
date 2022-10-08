import Link from "next/link";
import React from "react";

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
                    <Link href="/test">algo</Link>
                </li>
                <li>
                    <Link href="#!">algo</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
