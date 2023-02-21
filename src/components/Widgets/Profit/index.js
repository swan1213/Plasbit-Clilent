import React from 'react';
import { Col } from 'antd';

import { ProfitPreview } from './ProfitPreview';

export const ProfitWidget = props => {
    const { theme, textColor, buttonColor } = props;

    return (
        <>
            <Col className='widget-preview-example-container profit-preview-container' span={12}>
                <h3 className='text codeviewer-title mt-3'>Widget Preview</h3>
                <ProfitPreview background={theme} text={textColor} button={buttonColor} />
            </Col>
        </>
    );
}