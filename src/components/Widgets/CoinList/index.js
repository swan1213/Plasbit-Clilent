import React, { useEffect } from 'react';
import { Col } from 'antd';
import $ from "jquery";

import { CoinListPreview } from './CoinListPreview';

export const CoinListWidget = (props) => 
{
    const { allowedCoins, theme, textColor } = props;
    useEffect(() => {
        $('.ant-table-tbody, .ant-table-cell-fix-right, .ant-table-footer').css('background', theme);
        $('.ant-table-thead th').css('background', theme);
        $('.ant-table-tbody div, .ant-table-cell').css('color', textColor);
    },[theme, textColor]);

    return (
        <>
            <Col className='widget-preview-example-container coin-list-preview' span={12}>
                <h3 className='text codeviewer-title mt-3'>Widget Preview</h3>
                <CoinListPreview background={theme} text={textColor} prices={allowedCoins} />
            </Col>
        </>
    );
}