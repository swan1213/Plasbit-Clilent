import React from 'react';
import { Row, Col } from 'antd';
import { getImg } from '../../../utils/helpers';
import i18n from "i18next";

const aggregators = [
    {
        id : 0,
        title: 'affiliatePage.third.cards.first.title',
        text: 'affiliatePage.third.cards.first.text',
        image: getImg('affiliate/lock.png')},
    { 
        id : 1,
        title: 'affiliatePage.third.cards.second.title',
        text: 'affiliatePage.third.cards.second.text',
        image: getImg('affiliate/card.png') },
    { 
        id : 2,
        title: 'affiliatePage.third.cards.fourth.title',
        text: 'affiliatePage.third.cards.fourth.text',
        image: getImg('affiliate/wallet.png') },
    { 
        id : 3,
        title: 'affiliatePage.third.cards.third.title',
        text: 'affiliatePage.third.cards.third.text',
        image: getImg('affiliate/safe.png') },
];

export const AffiliateThird = () => {

    return (
        <div className='affiliate_aggregator'>
            <Row className='affiliate_aggregator_group' gutter={[20, 10]} justify="center">
                <Col key='title' sm={24} style={{marginBottom : "30px",textAlign: "center"}}>
                    <span className='affiliate_aggregator_title'>
                        {i18n.t('affiliatePage.third.title')}
                    </span>
                </Col>
                {
                    aggregators?.map((item, index) => {
                        return(
                            <Col md={12} style={{display: 'flex', justifyContent: 'center'}} key={index}>
                                <div  className='affiliate_aggregator_card'>
                                    <div className='affiliate_aggregator_img_panel'>
                                        <img src={item.image} alt={`${item.image}`} key={item.image}/>
                                    </div>
                                    <div>
                                        <h4 className='affiliate_aggregator_font26'>{i18n.t(item.title)}</h4>
                                        <div key={item.id} className='affiliate_aggregator_font20'>{i18n.t(item.text)}</div>
                                    </div>
                                </div>
                            </Col>
                        )
                        
                    })
                }
            </Row>
        </div>
    )
}