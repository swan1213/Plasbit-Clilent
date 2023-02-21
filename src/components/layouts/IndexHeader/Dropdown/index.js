import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import { useDetectOutsideClick ,getImg } from '../../../../utils/helpers'
import "./dropdown.css";

export const Dropdown = (props) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    return (
        <div>
            <div className="menu-container"
                ref={dropdownRef}
                onMouseOver={() => setIsActive(true)}>
                <li className="menu-trigger">
                    <button style={{ color: props.color }}>{props.menu.title} <span> &#9660;</span></button>
                </li>
              <nav className={`menu ${isActive ? 'active' : 'inactive'} ${props.menu?.alignLeft && 'align-left'}`}>
                    <ul>
                        {props.menu.subMenus.map((subMenu, index) => {
                            if(subMenu.link.includes('cardholder')){
                                return (
                                    <li key={index}>
                                        <a href={subMenu.link} target="_blank" rel="noreferrer">
                                            <img src={getImg(subMenu.icon)} alt="subMenuIcon" />
                                            <span>{subMenu.title}</span>
                                        </a>
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li key={index}>
                                        <Link to={subMenu.link} onClick={() => setIsActive(!isActive)}>
                                            <img src={getImg(subMenu.icon)} alt="subMenuIcon"/>
                                            <span>{subMenu.title}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}