import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { Trans as T } from "react-i18next";
import './Cookies.css';

export const Cookies = () => {
    const [cookieVisible, setCookieVisible] = useState('hidden');
    const CookieBannerDisplayed = () => {
        setCookieVisible('hidden');
        localStorage.setItem('cookieBannerDisplayed', 'true');
    };

    useEffect(() => {
        if (!localStorage.getItem('cookieBannerDisplayed')) {
            setCookieVisible('visible');
        }
    }, []);

    const buttonStyle = { margin: '1em auto', padding: '5px 20px', borderRadius: '10px', fontSize: '15px', height: 'auto' };
    const closeButtonStyle = { float: 'right', margin: '0.6em auto', padding: '5px 20px', border: 'none', fontSize: '20px', cursor: 'pointer' };
    return (
        <>
            <div style={{ visibility: cookieVisible }}>
                <div className="cookie-container" style={{ visibility: cookieVisible }}>
                    <Row>
                        <Col xs={{ span: 24 }}
                            md={{
                                span: 14,
                                offset: 1
                            }} style={{ alignSelf: 'center' }}>
                          <div>
                            <span><T>cookies.cookiePopOut.cookieLine.text_1</T></span>
                            <span><T>cookies.cookiePopOut.cookieLine.text_2</T></span>
                          </div>
                          <div>
                            <span><T>cookies.cookiePopOut.cookieLine.text_3</T></span>
                          </div>
                        </Col>
                        <Col xs={{ span: 12 }}
                            md={{
                                span: 3,
                                offset: 2
                            }} style={{ display: 'flex' }}>
                            <Button ghost style={buttonStyle} onClick={CookieBannerDisplayed}>
                                Appreciate it
                            </Button>
                            <p style={closeButtonStyle} onClick={() => setCookieVisible('hidden')}>X</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export { Cookies as default } from './index'
