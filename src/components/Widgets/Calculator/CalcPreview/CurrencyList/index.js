import React, { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';

import '../../../../CalcPage/CalcFirst/CurrencyList/currency-flags.min.css';

const { Option } = Select;

const currencyListArray = [
    {code: 'EUR', name: 'Andorra', symbol: '€'},
    {code: 'USD', name: 'American Samoa', symbol: '$'},
    {code: 'JPY', name: 'Japan', symbol: '¥'},
    {code: 'BGN', name: 'Bulgaria', symbol: 'лв.'}, 
    {code: 'CZK', name: 'Czechia', symbol: 'Kč'},
    {code: 'DKK', name: 'Denmark', symbol: 'kr.'},
    {code: 'GBP', name: 'Guernsey', symbol: '£'},
    {code: 'HUF', name: 'Hungary', symbol: 'Ft'},
    {code: 'PLN', name: 'Poland', symbol: 'zł'},
    {code: 'RON', name: 'Romania', symbol: 'RON'},
    {code: 'SEK', name: 'Sweden', symbol: 'kr'},
    {code: 'CHF', name: 'Liechtenstein', symbol: 'CHF'},
    {code: 'ISK', name: 'Iceland', symbol: 'ISK'},
    {code: 'NOK', name: 'Norway', symbol: 'kr'},
    {code: 'HRK', name: 'Croatia', symbol: 'kn'},
    {code: 'TRY', name: 'Turkey', symbol: '₺'},
    {code: 'AUD', name: 'Australia', symbol: '$'},
    {code: 'BRL', name: 'Brazil', symbol: 'R$'},
    {code: 'CAD', name: 'Canada', symbol: '$'},
    {code: 'CNY', name: 'China', symbol: '¥'},
    {code: 'HKD', name: 'Hong Kong', symbol: 'HK$'},
    {code: 'IDR', name: 'Indonesia', symbol: 'Rp'},
    {code: 'ILS', name: 'Israel', symbol: '₪'},
    {code: 'INR', name: 'India', symbol: '₹'},
    {code: 'KRW', name: 'Korea, Republic of', symbol: '₩'},
    {code: 'MXN', name: 'Mexico', symbol: '$'},
    {code: 'MYR', name: 'Malaysia', symbol: 'RM'},
    {code: 'NZD', name: 'Cook Islands', symbol: '$'},
    {code: 'PHP', name: 'Philippines', symbol: '₱'},
    {code: 'SGD', name: 'Singapore', symbol: '$'},
    {code: 'THB', name: 'Thailand', symbol: '฿'},
    {code: 'ZAR', name: 'Lesotho', symbol: 'R'},
]

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

    const currencyList = currencyListArray;

    useEffect(() => {
        if (currencyList.length) setCurrencies(currencyList);
    }, [currencyList]);

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