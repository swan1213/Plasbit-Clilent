import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './AccordionFooter.css'

export const AccordionFooter = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion-footer">
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>{props.menu.title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content">{props.menu.subMenus.map((subMenu, index) => (
                    <Link to={subMenu.link} key={index}>{subMenu.title}</Link>
                ))}</div>}
            </div>
        </div>
    );
};