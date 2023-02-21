import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Select } from 'antd';

import './currency-flags.min.css';


const { Option } = Select;

export const CurrencyList = ({ setCurrency, isActive, setIsActive }) => {

    const [currencies, setCurrencies] = useState([]);
    const select = useRef(null);

    function onChange(value) {
        setCurrency(value);
        setIsActive(!isActive);
    }

    function onBlur() {
        setIsActive(!isActive);
    }

    const blackList = ['BTC', 'CLF', 'CNH', 'CUC', 'GGP', 'IMP', 'JEP', 'LSL', 'MRU', 'PAB', 'SDG', 'SSP', 'STN', 'TMT', 'VES', 'XPD', 'XPT', 'XAG', 'XAU', 'XDR', 'ZWL']

    useEffect(() => {
        axios.get('https://openexchangerates.org/api/currencies.json').then((response) => {
            const data = response.data;
            const code = Object.keys(data);
            let obj = code.filter(item => !(blackList.includes(item)))
                .map((item) => ({
                    code: item,
                    name: data[item]
                }))
            setCurrencies(obj)
        })
    }, [])

    return (
        <div className="currency_container">
            {isActive && <Select
                ref={select}
                showSearch
                style={{
                    position: 'absolute',
                    marginTop: 5,
                    width: document.querySelector('div.currency_width').clientWidth
                }}
                placeholder="Search for your currency"
                optionFilterProp="children"
                onChange={onChange}
                onBlur={onBlur}
                defaultOpen={true}
                autoFocus={true}
            >
                {currencies?.map((currency, index) => (
                    <Option key={index} value={currency.code}>
                        <div className={`currency-flag currency-flag-${currency.code.toLowerCase()}`}></div>
                        &nbsp;{currency.name} &nbsp;&nbsp; ( {currency.code} )
                    </Option>
                ))}
            </Select>}
        </div>
    )
}