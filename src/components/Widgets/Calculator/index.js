import React from 'react';
import { Col } from 'antd';

import { CalcPreview } from './CalcPreview';
import { useResize } from '../../../utils/helpers';

export const CalculatorWidget = props => {
    const { theme, textColor, buttonColor } = props;
    const { isMobile } = useResize();

    return (
        <>
            <Col className='widget-preview-example-container' span={isMobile ? 24 : 12}>
                <h3 className='text codeviewer-title mt-3'>Widget Preview</h3>
                <CalcPreview background={theme} text={textColor} button={buttonColor}  />
            </Col>
            
        </>
    );
}