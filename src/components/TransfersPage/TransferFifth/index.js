
import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Trans as T } from 'react-i18next';

import './Fifth.css'
import { getImg, useResize } from '../../../utils/helpers';

export const TransferFifth = () => {
    const { isMobile } = useResize()
    const [comefrom, setComefrom] = useState('property');

    const texts = [
        {
            title: <T>transfersPage.fifth.table.1.title</T>,
            texts: [
                { text: <T>transfersPage.fifth.table.1.text.0</T> },
                { text: <T>transfersPage.fifth.table.1.text.1</T> }
            ]
        }
    ]
    const selectTexts = {
        'property' : {
            title:  <T>transfersPage.fifth.texts.0.title</T>,
            texts: [
                <T>transfersPage.fifth.texts.0.items.0</T>,
                <T>transfersPage.fifth.texts.0.items.1</T>,
                <T>transfersPage.fifth.texts.0.items.2</T>,
            ]
        },
        'inheritance' : {
            title:  <T>transfersPage.fifth.texts.1.title</T>,
            texts: [
                <T>transfersPage.fifth.texts.1.items.0</T>,
                <T>transfersPage.fifth.texts.1.items.1</T>
            ]
        },
    
        'salary' : {
            title:  <T>transfersPage.fifth.texts.2.title</T>,
            texts: [
                <T>transfersPage.fifth.texts.2.items.0</T>,
                <T>transfersPage.fifth.texts.2.items.1</T>,
                <T>transfersPage.fifth.texts.2.items.2</T>,
                <T>transfersPage.fifth.texts.2.items.3</T>,
            ]
        },
    
        'investments' : {
            title:  <T>transfersPage.fifth.texts.3.title</T>,
            texts: [
                <T>transfersPage.fifth.texts.3.items.0</T>,
                <T>transfersPage.fifth.texts.3.items.1</T>,
                <T>transfersPage.fifth.texts.3.items.2</T>,
            ]
        },
    
        'loan' : {
            title:  <T>transfersPage.fifth.texts.4.title</T>,
            texts: [
                <T>transfersPage.fifth.texts.4.items.0</T>,
                <T>transfersPage.fifth.texts.4.items.1</T>,
                <T>transfersPage.fifth.texts.4.items.2</T>,
                <T>transfersPage.fifth.texts.4.items.3</T>,
            ]
        },
    
        'something' : {
            title:  <T>transfersPage.fifth.texts.5.title</T>,
            texts: [
                <T>transfersPage.fifth.texts.5.items.0</T>,
                <T>transfersPage.fifth.texts.5.items.1</T>,
                <T>transfersPage.fifth.texts.5.items.2</T>,
            ]
        }
    };
    const options = [
        { value: "property", label: <T>transfersPage.fifth.options.0.text</T> },
        { value: "inheritance", label: <T>transfersPage.fifth.options.1.text</T> },
        { value: "salary", label: <T>transfersPage.fifth.options.2.text</T> },
        { value: "investments", label: <T>transfersPage.fifth.options.3.text</T> },
        { value: "loan", label: <T>transfersPage.fifth.options.4.text</T> },
        { value: "something", label: <T>transfersPage.fifth.options.5.text</T> },
    ];

    return (
        <section className="transfer_fifth text_center">
            <div className="transfer_container">
                <div className="title_container">
                    <div className="title white">
                        <T>transfersPage.fifth.title.0</T>&nbsp;
                    </div>
                    <Dropdown 
                        className="select" 
                        controlClassName='select_control' 
                        placeholderClassName="select_placeholder" 
                        menuClassName="select_menu" 
                        arrowClassName="select_arrow" 
                        options={options}
                        value={comefrom} 
                        onChange={(e) => {setComefrom(e.value)}}
                    />
                </div>
                <div className="text white info">
                    <T>transfersPage.fifth.text</T>
                </div>
                <div className="table">
                    <div className="thead">
                        <div className="left"><T>transfersPage.fifth.titles.0</T></div>
                        {!isMobile && <div><T>transfersPage.fifth.titles.1</T></div>}
                    </div>
                    <div className="tbody">
                        {texts.map((text, index) => (
                            <div className="row mt_10" key={index}>
                                <div className="document left">
                                    <div>
                                        <img src={getImg('transfers/text.png')} alt="transfer" />
                                        <div className="font_18 font_bold ml_20">{text.title}</div>
                                    </div>
                                </div>
                                <div className="infomation">
                                    {text.texts.map((text, index) => (
                                        <div key={index} className={index > 0 ? 'mt_20' : ''}>
                                            <img src={getImg('transfers/arrow_right.png')} alt="transfer" />
                                            <div className="ml_20 font_18 font_bold">{text.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                            <div className="row mt_10">
                                <div className="document left">
                                    <div>
                                        <img src={getImg('transfers/text.png')} alt="transfer" />
                                        <div className="font_18 font_bold ml_20 select_text">
                                            {selectTexts[comefrom].title}
                                        </div>
                                    </div>
                                </div>
                                <div className="infomation">
                                    {selectTexts[comefrom].texts.map((sentence, index) => (
                                        <div key={index} className={index > 0 ? 'mt_20' : ''}>
                                            <img src={getImg('transfers/arrow_right.png')} alt="transfer" />
                                            <div className="ml_20 font_18 font_bold">
                                                {sentence}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
                <button className="btn active"><T>transfersPage.fifth.button</T></button>
            </div>
        </section>
    )
}