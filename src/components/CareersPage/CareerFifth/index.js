import React from 'react';
import { Trans as T } from 'react-i18next';

import './Fifth.css';


export const CareerFifth = () => {

    const handleChange = (e) => {
        const tabElements = document.querySelectorAll(".tab")
        const rowElements = document.querySelectorAll(".row")
        const activeTab = document.querySelector(`.tab.${e}`)
        const activeRows = document.querySelectorAll(`.row.${e}`)

        for (let i in tabElements) {
            console.log(Object.prototype.hasOwnProperty.call(tabElements,i));
            if (Object.prototype.hasOwnProperty.call(tabElements,i)) {
                tabElements[i].classList.remove('active')
            }
        }
        activeTab.classList.add('active')

        for (let i in rowElements) {
            if (Object.prototype.hasOwnProperty.call(rowElements,i)) {
                rowElements[i].style.display = "none"
            }
        }

        for (let i in activeRows) {
            if (Object.prototype.hasOwnProperty.call(activeRows,i)) {
                activeRows[i].style.display = "flex"
            }
        }
    }

    return (
        <div id="career_fifth" className="career_fifth">
            <div className="tabs">
                <div className="tab_container">
                    <div className="tab all active" onClick={() => handleChange("all")}>&nbsp;&nbsp;&nbsp;&nbsp;<T>careerPage.fifth.titles.0</T>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className="tab marketing" onClick={() => handleChange("marketing")}>&nbsp;&nbsp;<T>careerPage.fifth.titles.1</T>&nbsp;&nbsp;</div>
                    <div className="tab customer" onClick={() => handleChange("customer")}>&nbsp;<T>careerPage.fifth.titles.2</T>&nbsp;</div>
                    <div className="tab sales" onClick={() => handleChange("sales")}>&nbsp;&nbsp;<T>careerPage.fifth.titles.3</T>&nbsp;&nbsp;</div>
                    <div className="tab products" onClick={() => handleChange("products")}>&nbsp;&nbsp;<T>careerPage.fifth.titles.4</T>&nbsp;&nbsp;</div>
                    <div className="tab product" onClick={() => handleChange("product")}>&nbsp;&nbsp;<T>careerPage.fifth.titles.8</T>&nbsp;&nbsp;</div>
                    <div className="tab general" onClick={() => handleChange("general")}>&nbsp;&nbsp;<T>careerPage.fifth.titles.9</T>&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className="mt_50">
                <div className="row all marketing">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.0</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.0</T></div>
                    </div>
                    <a href="applymanager" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all customer">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.1</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.1</T></div>
                    </div>
                    <a href="applyresearcher" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all customer">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.2</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.2</T></div>
                    </div>
                    <a href="applyofficer" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all sales">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.3</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.3</T></div>
                    </div>
                    <a href="applyanalyst" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all sales">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.4</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.4</T></div>
                    </div>
                    <a href="applyassociate" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all products">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.5</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.5</T></div>
                    </div>
                    <a href="applyreact" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all products">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.6</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.6</T></div>
                    </div>
                    <a href="applystack" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all product">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.7</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.7</T></div>
                    </div>
                    <a href="applyproduct" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all product">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.8</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.8</T></div>
                    </div>
                    <a href="applysenior" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all general">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.9</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.9</T></div>
                    </div>
                    <a href="applysales" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all general">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.10</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.10</T></div>
                    </div>
                    <a href="applyspecial" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
                <div className="row all general">
                    <div className="job">
                        <div className="font_25 font_bold"><T>careerPage.fifth.title.11</T></div>
                        <div className="font_15 font_bold"><T>careerPage.fifth.text.11</T></div>
                    </div>
                    <a href="applyprivacy" target="_blank" className="btn active"> <T>careerPage.fifth.button</T> </a>
                </div>
            </div>
        </div>
    )
}