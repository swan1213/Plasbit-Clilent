import React, { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';
import { useSelector } from 'react-redux';

const { Option } = Select;

export const CoinList = ({ setCoin, isActive, setIsActive }) => {

    const [coins, setCoins] = useState([]);
    const select = useRef(null);

    const coinList = useSelector(state => state.globalData?.dataSet);

    useEffect(() => {
        if (coinList.length) setCoins(coinList.filter(item => item.symbol !== 'ETH2'));
    }, [coinList]);

    const onChange = value => {
        setCoin(value);
        setIsActive(!isActive);
    }

    const onBlur = () => {
        setIsActive(!isActive);
    }

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
                {coins?.map((currency, index) => (
                    <Option key={index} value={currency.symbol}>
                        <img style={{width: 25, height: 25}} src={currency.image_url} alt="currency-img"/>
                        &nbsp;{currency.name} &nbsp;&nbsp; ( {currency.symbol} )
                    </Option>
                ))}
            </Select>}
        </div>
    )
}