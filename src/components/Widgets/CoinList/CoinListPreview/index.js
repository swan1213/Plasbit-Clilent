
import React, { useState, useEffect } from 'react';
import { Table, Image, Spin } from 'antd';
import TinyArea from '@ant-design/plots/es/components/tiny-area';
import { asNumber, getReversedFilteredArray, imageEmpty, useResize } from '../../../../utils/helpers';
import $ from "jquery";

import './Second.css';

const CoinIcon = ({ val }) => {
    return <Image
        className='coin-icon'
        width="34px"
        preview={false}
        fallback={imageEmpty}
        src={val.image_url}
        alt={`${val.image_url}`}
    />
}

const PriceGraph = ({ val }) => {
    if (!val) return ''
    return (
        <>
            {TinyArea && <TinyArea
                syncViewPadding={true}
                height={50}
                width={150}
                smooth={true}
                autoFit={false}
                yAxis={{
                    min: parseFloat(val.latest) - (parseFloat(val.latest) *
                        (Math.abs(parseFloat(val.percent_change * 100)) > 10 ? 0.22 : 0.075)),
                    max: parseFloat(val.latest) + (parseFloat(val.latest) *
                        (Math.abs(parseFloat(val.percent_change * 100)) > 10 ? 0.22 : 0.075))
                }}
                data={
                    getReversedFilteredArray(val?.prices, 50)
                        ?.map((v) =>
                            asNumber(parseFloat(v), parseInt(val.unit_price_scale || 5, 10))
                        ) || []
                }
            />}
            {!TinyArea && <Spin />}
        </>
    )
}

const getPercentage = (val) => {
    return <>
        {asNumber(
            parseFloat(val.percent_change * 100),
            parseInt(val.unit_price_scale || 5, 10)
        )}
    </>
}

export const CoinListPreview = (props) => {
    const { isMobile } = useResize();
    const [dataSource, setDataSource] = useState()
    useEffect(() => {
        const prices = props.prices?.map((price, index) => ({
            no: index + 1,
            ...price
        }))
        setDataSource(prices)
    }, [props.prices])

    useEffect(() => {
        if(!isMobile){
        const element = document.getElementsByClassName('ant-table-thead');
        if(element[0].offsetWidth === 0){
            $('.ant-table-footer').css('width', 700)
        }else {
            $('.ant-table-footer').css('width', element[0].offsetWidth)
        }
    }
    },[isMobile, dataSource])

    const columns = [
        {
            title: '#',
            dataIndex: 'no',
            key: 'no',
            width: 60,
            render: (name, record) => {
                return <div style={{'color': props.text, background: props.background}} >{record.no}</div>
            },
            sorter: {
                compare: (a, b) => a.no - b.no,
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => (
                <div className='d_flex align_items_center'>
                    <CoinIcon val={record} />
                    <div className='ml_10'>
                        <div style={{'color': props.text}}>{record.name}</div>
                        <div style={{'color': props.text}}>{record.base}</div>
                    </div>
                </div>
            )
        },
        {
            title: 'Price',
            dataIndex: 'latest',
            key: 'latest',
            render: (price, record) => {
                // const prceStr = (price >= 1) ? (Number(price).toFixed(2)) : price
                const prceStr = asNumber(parseFloat(price), parseInt(record.unit_price_scale || 5, 10))
                return <div style={{'color': props.text}} >${prceStr}</div>
            },
            // sorter: {
            //     compare: (a, b) => a.latest - b.latest,
            // },
            sorter: (a, b) => ('' + a.latest).localeCompare(b.latest, undefined, { numeric: true })
        },
        {
            title: '24h Change',
            dataIndex: 'percent_change',
            key: 'percent_change',
            sorter: {
                compare: (a, b) => a.percent_change - b.percent_change,
            },
            render: (percent, record) => {
                const color = percent >= 0 ? 'green' : 'red'
                return <div style={{'color': props.text}}>{getPercentage(record)}%</div>
            },
        },
        {
            title: '24 Volume',
            dataIndex: 'volume_24h',
            key: 'volume_24h',
            // sorter: {
            //     compare: (a, b) => a.volume_24h - b.volume_24h,
            // },
            render: (volume_24h, record) => (
                <div style={{'color': props.text}}>${volume_24h}</div>
            ),
            sorter: (a, b) => ('' + a.volume_24h).localeCompare(b.volume_24h, undefined, { numeric: true })
        },
        {
            title: 'Market Cap',
            dataIndex: 'market_cap',
            key: 'market_cap',
            // sorter: {
            //     compare: (a, b) => a.market_cap - b.market_cap,
            // },
            sorter: (a, b) => ('' + a.market_cap).localeCompare(b.market_cap, undefined, { numeric: true }),
            render: (market_cap, record) => (
                <div style={{'color': props.text}}>${market_cap}</div>
            )
        },
        {
            title: '7 Days Chart',
            render: (value, record) => (
                <PriceGraph val={record} />
            )
        },
    ];

    return (
        <section className="price_second" style={{background: props.background}}>
            {isMobile ?
            <Table className='coin-list-mobile-table' columns={columns} rowKey="symbol" dataSource={dataSource} pagination={false} scroll={{x: 100}} footer={() => {
                return (
                    <div className={'plasbit-copy-rights'}>
                    <a className='crypto-join-plasbit' style={{ color: props.text, margin: 0, padding: '4px 0px 2px 9px' }} href={`${process.env.REACT_APP_HOME_URL}`}>
                        Powered by
                        <div className="plasbit-logo"></div>
                        plasbit.com
                    </a>
                </div>
                )
            }}/>
            :
            <Table columns={columns} rowKey="symbol" dataSource={dataSource} pagination={false} footer={() => {
                return (
                    <div className={'plasbit-copy-rights'}>
                    <a className='crypto-join-plasbit' style={{ color: props.text, margin: 0, padding: '4px 0px 2px 9px' }} href={`${process.env.REACT_APP_HOME_URL}`}>
                        Powered by
                        <div className="plasbit-logo"></div>
                        plasbit.com
                    </a>
                </div>
                )
            }}/>
        }

        </section>
    )
}
