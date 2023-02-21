import React from 'react';
import { Col } from 'antd';

import { MarqueePreview } from './MarqueePreview';

export const MarqueeWidget = (props) => 
{
    const { allowedCoins, theme, textColor } = props;
     return (
        <>
            <Col className='widget-preview-example-container' span={12}>
                <h3 className='text codeviewer-title mt-3'>Widget Preview</h3>
                <MarqueePreview background={theme} text={textColor} prices={allowedCoins} />
            </Col>
        </>
    )
}