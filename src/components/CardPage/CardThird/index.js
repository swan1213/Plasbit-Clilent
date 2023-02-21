import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';
import { Card } from './Card';
import { CardMobile } from './CardMobile';
import './Third.css';

const cards = [
    {
        "title": <T>cardPage.third.cards.0.title</T>,
        "img": "card/card-grey.png",
        "limits": [
            {
                "text": <T>cardPage.third.cards.0.limits.0.text</T>,
                "value": <T>cardPage.third.cards.0.limits.0.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.0.limits.1.text</T>,
                "value": <T>cardPage.third.cards.0.limits.1.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.0.limits.2.text</T>,
                "value": <T>cardPage.third.cards.0.limits.2.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.0.limits.3.text</T>,
                "value": <T>cardPage.third.cards.0.limits.3.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.limits.4.text</T>,
                "value": <T>cardPage.third.cards.0.limits.4.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.limits.5.text</T>,
                "value": <T>cardPage.third.cards.0.limits.5.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.limits.6.text</T>,
                "value": <T>cardPage.third.cards.0.limits.6.value</T>,
                "show": false
            }
        ],
        "fees": [
            {
                "text": <T>cardPage.third.cards.0.fees.0.text</T>,
                "value": <T>cardPage.third.cards.0.fees.0.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.0.fees.1.text</T>,
                "value": <T>cardPage.third.cards.0.fees.1.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.0.fees.2.text</T>,
                "value": <T>cardPage.third.cards.0.fees.2.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.0.fees.3.text</T>,
                "value": <T>cardPage.third.cards.0.fees.3.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.fees.4.text</T>,
                "value": <T>cardPage.third.cards.0.fees.4.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.fees.5.text</T>,
                "value": <T>cardPage.third.cards.0.fees.5.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.fees.6.text</T>,
                "value": <T>cardPage.third.cards.0.fees.6.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.fees.7.text</T>,
                "value": <T>cardPage.third.cards.0.fees.7.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.0.fees.8.text</T>,
                "value": <T>cardPage.third.cards.0.fees.8.value</T>,
                "show": false
            }
        ]
    },
    {
        "title": <T>cardPage.third.cards.1.title</T>,
        "img": "card/card-blue.png",
        "limits": [
            {
                "text": <T>cardPage.third.cards.1.limits.0.text</T>,
                "value": <T>cardPage.third.cards.1.limits.0.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.1.limits.1.text</T>,
                "value": <T>cardPage.third.cards.1.limits.1.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.1.limits.2.text</T>,
                "value": <T>cardPage.third.cards.1.limits.2.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.1.limits.3.text</T>,
                "value": <T>cardPage.third.cards.1.limits.3.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.4.text</T>,
                "value": <T>cardPage.third.cards.1.limits.4.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.5.text</T>,
                "value": <T>cardPage.third.cards.1.limits.5.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.6.text</T>,
                "value": <T>cardPage.third.cards.1.limits.6.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.7.text</T>,
                "value": <T>cardPage.third.cards.1.limits.7.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.8.text</T>,
                "value": <T>cardPage.third.cards.1.limits.8.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.9.text</T>,
                "value": <T>cardPage.third.cards.1.limits.9.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.limits.10.text</T>,
                "value": <T>cardPage.third.cards.1.limits.10.value</T>,
                "show": false
            }
        ],
        "fees": [
            {
                "text": <T>cardPage.third.cards.1.fees.0.text</T>,
                "value": <T>cardPage.third.cards.1.fees.0.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.1.fees.1.text</T>,
                "value": <T>cardPage.third.cards.1.fees.1.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.1.fees.2.text</T>,
                "value": <T>cardPage.third.cards.1.fees.2.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.1.fees.3.text</T>,
                "value": <T>cardPage.third.cards.1.fees.3.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.4.text</T>,
                "value": <T>cardPage.third.cards.1.fees.4.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.5.text</T>,
                "value": <T>cardPage.third.cards.1.fees.5.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.6.text</T>,
                "value": <T>cardPage.third.cards.1.fees.6.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.7.text</T>,
                "value": <T>cardPage.third.cards.1.fees.7.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.8.text</T>,
                "value": <T>cardPage.third.cards.1.fees.8.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.9.text</T>,
                "value": <T>cardPage.third.cards.1.fees.9.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.10.text</T>,
                "value": <T>cardPage.third.cards.1.fees.10.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.11.text</T>,
                "value": <T>cardPage.third.cards.1.fees.11.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.12.text</T>,
                "value": <T>cardPage.third.cards.1.fees.12.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.1.fees.13.text</T>,
                "value": <T>cardPage.third.cards.1.fees.13.value</T>,
                "show": false
            }
        ]
    },
    {
        "title": "PlasBit Metal",
        "img": "card/card-black.png",
        "limits": [
            {
                "text": <T>cardPage.third.cards.2.limits.0.text</T>,
                "value": <T>cardPage.third.cards.2.limits.0.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.2.limits.1.text</T>,
                "value": <T>cardPage.third.cards.2.limits.1.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.2.limits.2.text</T>,
                "value": <T>cardPage.third.cards.2.limits.2.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.2.limits.3.text</T>,
                "value": <T>cardPage.third.cards.2.limits.3.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.4.text</T>,
                "value": <T>cardPage.third.cards.2.limits.4.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.5.text</T>,
                "value": <T>cardPage.third.cards.2.limits.5.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.6.text</T>,
                "value": <T>cardPage.third.cards.2.limits.6.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.7.text</T>,
                "value": <T>cardPage.third.cards.2.limits.7.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.8.text</T>,
                "value": <T>cardPage.third.cards.2.limits.8.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.9.text</T>,
                "value": <T>cardPage.third.cards.2.limits.9.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.10.text</T>,
                "value": <T>cardPage.third.cards.2.limits.10.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.limits.11.text</T>,
                "value": <T>cardPage.third.cards.2.limits.11.value</T>,
                "show": false
            }
        ],
        "fees": [
            {
                "text": <T>cardPage.third.cards.2.fees.0.text</T>,
                "value": <T>cardPage.third.cards.2.fees.0.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.2.fees.1.text</T>,
                "value": <T>cardPage.third.cards.2.fees.1.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.2.fees.2.text</T>,
                "value": <T>cardPage.third.cards.2.fees.2.value</T>,
                "show": true
            },
            {
                "text": <T>cardPage.third.cards.2.fees.3.text</T>,
                "value": <T>cardPage.third.cards.2.fees.3.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.4.text</T>,
                "value": <T>cardPage.third.cards.2.fees.4.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.5.text</T>,
                "value": <T>cardPage.third.cards.2.fees.5.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.6.text</T>,
                "value": <T>cardPage.third.cards.2.fees.6.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.7.text</T>,
                "value": <T>cardPage.third.cards.2.fees.7.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.8.text</T>,
                "value": <T>cardPage.third.cards.2.fees.8.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.9.text</T>,
                "value": <T>cardPage.third.cards.2.fees.9.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.10.text</T>,
                "value": <T>cardPage.third.cards.2.fees.10.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.11.text</T>,
                "value": <T>cardPage.third.cards.2.fees.11.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.12.text</T>,
                "value": <T>cardPage.third.cards.2.fees.12.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.13.text</T>,
                "value": <T>cardPage.third.cards.2.fees.13.value</T>,
                "show": false
            },
            {
                "text": <T>cardPage.third.cards.2.fees.14.text</T>,
                "value": <T>cardPage.third.cards.2.fees.14.value</T>,
                "show": false
            }
        ]
    }
]

export const CardThird = () => {

    const { isMobile } = useResize();
    const [isLimit, setIsLimit] = useState("limit")

    return (
        <section>
            <div className="card_third">
                <h2 className="title text_center" id="third">
                    <span>
                        <span>
                            <T>cardPage.third.title.0</T>
                        </span>
                    </span>
                    <br />
                    <T>cardPage.third.title.1</T>
                </h2>
                <div className="btn_toggle">
                    <div className={`button text_center ${isLimit === "limit" ? "active" : ""}`}
                        onClick={() => setIsLimit('limit')}>
                        <T>cardPage.third.button.0</T>
                    </div>
                    <div className={`button text_center ${isLimit === "fee" ? "active" : ""}`}
                        onClick={() => setIsLimit('fee')}>
                        <T>cardPage.third.button.1</T>
                    </div>
                </div>
                {!isMobile &&
                    cards.map((card, index) => (
                        <Card card={card} key={index} isLimit={isLimit} />
                    ))
                }
                {isMobile &&
                    <CardMobile cards={cards} isLimit={isLimit} />}
                <div className="policy_container text_center mobile_none">
                    <div className="policy_title text_blue">
                        <a href={`${process.env.REACT_APP_STORAGE || ""}pdf/cardholder-agreement.pdf`} target="_blank" rel='noreferrer'><T>cardPage.third.policy.title.0</T></a>
                        <Link to="/privacy/notice"><T>cardPage.third.policy.title.1</T></Link>
                    </div>
                    <div className="plicy_content">
                        <T>cardPage.third.policy.text.0</T><br />
                        <T>cardPage.third.policy.text.1</T><br />
                        <T>cardPage.third.policy.text.2</T>
                    </div>
                </div>
                <div className="step_container">
                    <div className="step">
                        <img src={getImg('card/step-1.png')} alt="" />
                        <p className="text"><T>cardPage.third.step.0</T></p>
                    </div>
                    <div className="dot">
                        <img src={getImg('card/dot.png')} alt="" />
                    </div>
                    <div className="step">
                        <img src={getImg('card/step-2.png')} alt="" />
                        <p className="text"><T>cardPage.third.step.1</T></p>
                    </div>
                    <div className="dot">
                        <img src={getImg('card/dot.png')} alt="" />
                    </div>
                    <div className="step">
                        <img src={getLocalImg('webp-images/cards/card_step-3.webp')} alt="" />
                        <p className="text"><T>cardPage.third.step.2</T></p>
                    </div>
                </div>
            </div>

        </section>
    )
}