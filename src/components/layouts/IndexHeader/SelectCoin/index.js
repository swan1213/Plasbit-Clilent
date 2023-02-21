import { Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';
import { getImg, CoinTypes, asNumber } from '../../../../utils/helpers';

export const SelectCoin = ({ coinMap }) => {
  const [label, setLabel] = useState('btc');

  const getRate = (coin) => {
    if (coinMap && coinMap[coin] && coinMap[coin].latest) {
      return asNumber(parseFloat(coinMap[coin].latest), 2);
    }
    return '0.00';
  };

  const style = {
    width: '25px',
    height: '25px'
  }

  const labelMenu = {
    btc: <><img src={getImg('coins/btc.png')} style={style} alt="BTC" /> BTC/USD {getRate(CoinTypes.BTC)}$</>,
    eth: <><img src={getImg('coins/eth.png')} style={style} alt="ETH" /> ETH/USD {getRate(CoinTypes.ETH)} $</>,
    ltc: <><img src={getImg('coins/ltc.png')} style={style} alt="LTC" /> LTC/USD {getRate(CoinTypes.LTC)}$</>,
    ada: <><img src={getImg('coins/ada.png')} style={style} alt="ADA" /> ADA/USD {getRate(CoinTypes.ADA)}$</>,
    usdc: <><img src={getImg('coins/usdc.png')} style={style} alt="USDC" /> USDC/USD {getRate(CoinTypes.USDC)}$</>,
  };

  const onClick = (props) => {
    setLabel(props.key);
  };

  const menu = (
    <Menu
      onClick={onClick}
      selectedKeys={[label]}
      items={[
        {
          label: labelMenu.btc,
          key: 'btc',
        },
        {
          label: labelMenu.eth,
          key: 'eth',
        },
        {
          label: labelMenu.ltc,
          key: 'ltc',
        },
        {
          label: labelMenu.ada,
          key: 'ada',
        },
        {
          label: labelMenu.usdc,
          key: 'usdc',
        },
      ]}
    />
  );
  return (
    <Dropdown
      overlay={menu}
      overlayStyle={{
        paddingTop: '15px',
      }}
    >
      <button className='drop-down-btn' onClick={(e) => e.preventDefault()}>
        <Space>
          {labelMenu[label]}
        </Space>
      </button>
    </Dropdown>
  );
};
