import React, { useState, useRef } from "react";

import { Chevron } from "./Chevron";
import './Accordion.css'

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
        <div className="accordion_text">
            <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">{props.obj.title}</p>
                {props.arrow && <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />}
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion_content text_white"
            >
                {props.obj.content.map((text, index) => (
                    <div className="text" key={index}>
                        <div>{text} </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
