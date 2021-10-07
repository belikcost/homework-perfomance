import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Header } from "./Header";

import avatar from '../../assets/images/avatar.png'
import './Layout.scss';



export const Layout = ({ pages, children, onDeletePage, onCreatePage }) => {
    const [isMenuOpening, setIsMenuOpening] = useState(() => false);

    const handleMenu = () => {
        setIsMenuOpening(!isMenuOpening);
    };

    const onDelete = (e, pageId) => {
        e.preventDefault();
        onDeletePage(pageId);
    };

    return (
        <div className="layout">
            <Header handleMenu={handleMenu}/>
            <div className="layout__body">
                <div className={`menu${isMenuOpening ? ' menu_active' : ''}`}>
                    <div className="client-info">
                        <img src={avatar} alt="Аватар"/>
                        <div className="client-info__body">
                            <p className="client-info__name">Клиент Клиентов</p>
                            <p>Домен клиента</p>
                        </div>
                    </div>
                    <div className="menu__pages">
                        <div>
                            {pages.map(page => (
                                <NavLink
                                    to={`/${page.id}`}
                                    className="menu_link"
                                    activeClassName="menu_link-hovered"
                                    key={page.id}
                                >
                                    <div className="menu_link-content">
                                        <svg viewBox="0 0 30 30" className="menu_icon">
                                            <g>
                                                <path
                                                    d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"/>
                                            </g>
                                        </svg>
                                        <div className="menu_link-content-text">
                                            {page.title}
                                        </div>
                                    </div>
                                    <div className="layout_row">
                                        <svg
                                            onClick={(e) => onDelete(e, page.id)}
                                            viewBox="0 0 30 30"
                                            className="menu_hidden-icon"
                                        >
                                            <path
                                                d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"/>
                                        </svg>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                        <div className="layout__new-page" onClick={onCreatePage}>
                            <svg viewBox="0 0 16 16" className="layout__new-page-icon">
                                <path
                                    d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"/>
                            </svg>
                            <p>New page</p>
                        </div>
                    </div>
                </div>
                <div className={`layout__content${isMenuOpening ? ' layout_bg-dark' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};