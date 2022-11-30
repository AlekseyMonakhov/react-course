import React from "react";
import {NavLink} from "react-router-dom";
import "./header.css";

type headerLink = {
    pageName: string,
    path: string,
}

const navLinks: headerLink[] = [
    {pageName: "Home", path: "/"},
    {pageName: "Battle", path: "/battle"},
    {pageName: "Popular", path: "/popular"},
];

const Header = () => {
    return (
        <header>
            <nav>
                {navLinks.map((navLink: headerLink) => (
                    <NavLink
                        key={navLink.pageName}
                        className={({isActive}) => (isActive ? "active" : undefined)}
                        to={navLink.path}
                        end
                    >
                        {navLink.pageName}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
