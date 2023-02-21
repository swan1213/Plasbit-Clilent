
import React, { useState } from 'react';
import { Radio } from 'antd';
import { Trans as T } from 'react-i18next';

import { useResize } from '../../../utils/helpers';
import { Accordion } from '../../CardPage/Accordion';
import './Fifth.css';


const values = [
    {
        "key": "first",
        "title": <T>aboutPage.fifth.values.0.title</T>,
        "content": [
            <T>aboutPage.fifth.values.0.text.0</T>,
            <T>aboutPage.fifth.values.0.text.1</T>
        ]
    },
    {
        "key": "second",
        "title": <T>aboutPage.fifth.values.1.title</T>,
        "content": [
            <T>aboutPage.fifth.values.1.text.0</T>,
            <T>aboutPage.fifth.values.1.text.1</T>
        ]
    },
    {
        "key": "third",
        "title": <T>aboutPage.fifth.values.2.title</T>,
        "content": [
            <T>aboutPage.fifth.values.2.text.0</T>,
            <T>aboutPage.fifth.values.2.text.1</T>
        ]
    },
    {
        "key": "fourth",
        "title": <T>aboutPage.fifth.values.3.title</T>,
        "content": [
            <T>aboutPage.fifth.values.3.text.0</T>,
            <T>aboutPage.fifth.values.3.text.1</T>,
            <T>aboutPage.fifth.values.3.text.2</T>
        ]
    },
    {
        "key": "fifth",
        "title": <T>aboutPage.fifth.values.4.title</T>,
        "content": [
            <T>aboutPage.fifth.values.4.text.0</T>,
            <T>aboutPage.fifth.values.4.text.1</T>,
            <T>aboutPage.fifth.values.4.text.2</T>
        ]
    },
    {
        "key": "sixth",
        "title": <T>aboutPage.fifth.values.5.title</T>,
        "content": [
            <T>aboutPage.fifth.values.5.text.0</T>,
            <T>aboutPage.fifth.values.5.text.1</T>
        ]
    }
]

export const AboutFifth = () => {

    const { isMobile } = useResize()
    const [tab, setTab] = useState('first')
    const [order, setOrder] = useState(0)
    const [checkIndex, setCheckIndex] = useState(0)

    return (
        <section className="about_fifth">
            <div className="title">
                <span><span><T>aboutPage.fifth.title</T></span></span>
            </div>
            <div className="tab_container">
               
                {!isMobile && <>
                   
                    <div className="tabs text">
                        <Radio.Group value={checkIndex}>
                        {values.map((value, index) => (
                            <div className={`tab d_flex align_items_center ${tab === value.key ? 'active' : ''} ${order > index ? 'order' : ''} ${(order === index) && (order < values.length-1) ? 'half' : ''}`} onClick={() => {setTab(value.key); setOrder(index); setCheckIndex(index);}} key={index}>
                                <Radio style={{marginLeft: '-32px'}} value={index}></Radio>
                                <span className="tab_title">{value.title}</span>
                            </div>
                        ))}
                        </Radio.Group>
                    </div>
                    
                    <div className="contents">
                        {values.map((value, index) => (
                            <div className={`content ${tab == value.key ? 'active' : ''}`} key={index}>
                                {value.content.map((content, content_index) => (
                                    <div className="text" key={content_index}>
                                        {content}
                                    </div>
                                ))}
                                
                            </div>
                        ))}
                    </div>
                </>}
                {isMobile && values.map((value, index) => (
                    <Accordion obj={value} key={index} />
                ))}
            </div>
        </section>
    )
}