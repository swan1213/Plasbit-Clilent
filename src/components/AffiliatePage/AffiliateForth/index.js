import React, { useState, useEffect } from 'react';
import LeftOutlined  from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { getLocalImg, useResize } from '../../../utils/helpers';
import { Trans as T } from "react-i18next";
import  Element  from 'react-scroll/modules/components/Element';


const cards = [
    {
        id: "virtual",
        name : 'Virtual card',
        card: 'affiliate_card_items_small',
        image: getLocalImg('cards/card-grey.png'),
        virtualCreation: "$299",
        virtualMonthly: "$20,000",
        virtualFee: "5%",
        virtualMonthlyFee: "$19.90"
    },
    {
        id: "plastic",
        name : 'Plastic card',
        card: 'affiliate_card_items_large',
        image: getLocalImg('cards/card-blue.png'),
        plasticCreation: "$499",
        plasticMonthly: "$20,000",
        plasticFee: "5%",
        plasticMonthlyFee: "$29.90"
    },
    {
        id: "metal",
        name : "Metal card",
        card: 'affiliate_card_items_small',
        image: getLocalImg('cards/card-black.png'),
        metalCreation: "$999",
        metalMonthly: "$50,000",
        metalFee: "8%",
        metalMonthlyFee: "$39.90"
    }
];

export const AffiliateForth = () => {
    const { isMobile } = useResize();
    const [selectedCard, setSelectedCard] = useState(1);
    const [plasbitCard, setPlasbitCard] = useState(cards);

    useEffect(() => {
        if (!isMobile) {
            setPlasbitCard(cards);
        } else {
            setPlasbitCard([cards[selectedCard]]);
        }
    }, [isMobile, selectedCard]);

    const onChangeCardPanel = type => {
        if (selectedCard + type >= 0 && selectedCard + type < 3) {
            setSelectedCard(selectedCard + type);
        }
        else if (selectedCard + type < 0) {
            setSelectedCard(2);
        }
        else if (selectedCard + type >= 3) {
            setSelectedCard(0);
        }
    }
    return (
        <div className='affiliate_card' style={{marginBottom: 50}}>
            <Element name="fourthPage"/>
                <div className='affiliate_fourth_title'>
                    <T>affiliatePage.fourth.title</T>
                </div>
            <div className='affiliate_card_group'>
                {
                    plasbitCard?.map((item, index) => {
                        return (
                            <div key={index} className={item.card} >
                                <div className='affiliate_card_container'>
                                    <img
                                        src={item.image}
                                        alt={`${item.image}`}
                                        style={{filter: "invert(94%) sepia(0%) saturate(7491%) hue-rotate(65deg) brightness(105%) contrast(103%)"}}
                                    />
                                    <div className='affiliate_card_text' style={{marginTop: !isMobile && index === 1 && 20}}>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            <T>affiliatePage.fourth.card.0</T>
                                            {(item.id === "virtual")? item.virtualCreation : (item.id === "metal"? item.metalCreation : item.plasticCreation)}
                                        </div>
                                        <div>
                                            <T>affiliatePage.fourth.card.1</T>
                                            {(item.id === "virtual")? item.virtualMonthly : (item.id === "metal"? item.metalMonthly : item.plasticMonthly)}
                                        </div>
                                        <div>
                                            {(item.id === "virtual")? item.virtualFee : (item.id === "metal"? item.metalFee : item.plasticFee)}
                                            <T>affiliatePage.fourth.card.2</T>
                                        </div>
                                        <div>
                                            <T>affiliatePage.fourth.card.3</T>
                                        </div>
                                        <div>
                                            <T>affiliatePage.fourth.card.4</T>
                                            {(item.id === "virtual")? item.virtualMonthlyFee : (item.id === "metal"? item.metalMonthlyFee : item.plasticMonthlyFee)}
                                        </div>
                                        <span style={{textDecoration: 'none'}}>
                                            <T>affiliatePage.fourth.card.5</T>
                                        </span>
                                    </div>
                                    <div>
                                        <a href={`${process.env.REACT_APP_URL}signup`}>
                                            <button className='affiliate_card_button'                                        >
                                                <T>affiliatePage.fourth.button</T>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                isMobile &&
                <div className='affiliate-card-btngroup'>
                    <button onClick={() => onChangeCardPanel(-1)}><LeftOutlined /></button>
                    <button onClick={() => onChangeCardPanel(1)}><RightOutlined /></button>
                </div>
            }
        </div>
    );
}