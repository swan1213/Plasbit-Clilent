import React, { useState, useRef, useEffect } from 'react'
import { Trans as T } from 'react-i18next';
import { getImg } from '../../../utils/helpers';


export const Card = (props) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(
            active === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    useEffect(() => {
        setHeight(
            active === "active" ? `${content.current.scrollHeight}px` : "0px"
        );
    }, [props.isLimit])

    return (
        <div className="card_container">
            <img src={getImg(props.card.img)} alt="" />
            <div className="right_container">
                <div className="card_title text_white">{props.card.title}</div>
                <div className="detail_container">
                    <div className="details">
                        {(props.isLimit === "limit") &&
                            props.card.limits.filter((limit) => limit.show === true)
                                .map((limit, index) => (
                                    <div className="detail text_white" key={index}>
                                        <span>{limit.text} </span>
                                        <span>{limit.value}</span>
                                    </div>
                                ))}
                        {(props.isLimit === "fee") &&
                            props.card.fees.filter((fee) => fee.show === true)
                                .map((fee, index) => (
                                    <div className="detail text_white" key={index}>
                                        <span>{fee.text} </span>
                                        <span>{fee.value}</span>
                                    </div>
                                ))}
                        <div className="detail_content" ref={content} style={{ maxHeight: `${height}` }}>
                            {(props.isLimit === "limit") &&
                                props.card.limits.filter((limit) => limit.show === false)
                                    .map((limit, index) => (
                                        <div className="detail" key={index}>
                                            <span>{limit.text} </span>
                                            <span>{limit.value}</span>
                                        </div>
                                    ))}
                            {(props.isLimit === "fee") &&
                                props.card.fees.filter((fee) => fee.show === false)
                                    .map((fee, index) => (
                                        <div className="detail" key={index}>
                                            <span>{fee.text} </span>
                                            <span>{fee.value}</span>
                                        </div>
                                    ))}
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn text_white" onClick={toggleAccordion}><T>cardPage.third.button.2</T></button>
                        <a href={`${process.env.REACT_APP_URL}signup`} className="btn text_white active"><T>cardPage.third.button.3</T></a>
                    </div>
                </div>
            </div>
        </div>
    )
}