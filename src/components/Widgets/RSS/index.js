import React from 'react';
import { Col } from 'antd';
import { RssPreview } from './RssPreview/RssPreview';


export const RssWidget = (props) => {
  const { allowedXml, theme, textColor, numCards } = props;

     return (
        <>
            <Col className='widget-preview-example-container' span={12}>
                <h3 className='text codeviewer-title mt-3'>Widget Preview</h3>
                <RssPreview background={theme} text={textColor} xml={allowedXml} numCards={numCards} />
            </Col>
        </>
    )
}