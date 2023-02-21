import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { getImg } from "../../../../utils/helpers";


import { Chevron } from "./Chevron";
import "./Accordion.css";

export const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
        <div className="accordion__section">
            <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.menu.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </div>
            <div ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content">
                <div className="accordion__text">
                    {props.menu.subMenus.map((subMenu, index) => {
                        if(subMenu.link.includes('cardholder')){
                            return (
                                <li key={index}>
                                    <Link to={subMenu.link} onClick={props.toggleHandler}>
                                        <img src={getImg(subMenu.icon)} alt="subMenu" />
                                        <span>{subMenu.title}</span>
                                    </Link>
                                    <a href={subMenu.link} target="_blank" rel="noreferrer">
                                        {subMenu.title}
                                    </a>
                                </li>
                            )
                        }
                        else{
                            return (
                                <li key={index}>
                                    <Link to={subMenu.link} onClick={props.toggleHandler}>
                                        <img src={getImg(subMenu.icon)} alt="subMenu" />
                                        <span>{subMenu.title}</span>
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
