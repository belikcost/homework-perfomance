import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

import logo from '../../assets/images/logo.png';
import './Header.scss';


export const Header = ({ handleMenu }) => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);

    }

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="Логотип"/>
                <h1 className="header__logo-text">RC.APP</h1>
            </Link>
            <Search
                value={searchValue}
                onChange={onChangeSearchValue}
                className="header__search"
            />
            <div>
                <svg className="header_icon" viewBox="0 0 14 14" onClick={handleMenu}>
                    <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"/>
                </svg>
            </div>
        </header>
    );
}